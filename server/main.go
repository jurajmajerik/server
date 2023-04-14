package main

import (
	db "app/db"
	"encoding/json"
	"log"
	"net/http"
	"net/http/httputil"
	"net/url"
	"strings"
	"os"
	"path/filepath"
	"time"

	"github.com/joho/godotenv"
	"github.com/gorilla/mux"
)

type Driver struct {
	Id       string `json:"id"`
	DriverId string `json:"driverId"`
	Name        string `json:"name"`
	Status 		  string `json:"status"`
	Location string `json:"location"`
	Path     string `json:"path"`
	PathIndex int `json:"pathIndex"`
	CustomerId string `json:"customerId"`
}

type Customer struct {
	Id          string `json:"id"`
	CustomerId  string `json:"customerId"`
	Name        string `json:"name"`
	Active      bool   `json:"active"`
	Location    string `json:"location"`
	Destination string `json:"destination"`
	DriverId    string `json:"driverId"`
}

func getDrivers(w http.ResponseWriter, req *http.Request) {
	rows, err := db.Connection.Query(`
		SELECT
			id,
			driver_id,
			name, 
			status, 
			location,
			path,
			path_index,
			customer_id 
		FROM drivers
		`,
	)
	if err != nil {
		http.Error(w, "Failed to get drivers: "+err.Error(), http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	var drivers []Driver

	for rows.Next() {
		var driver Driver
		rows.Scan(
			&driver.Id,
			&driver.DriverId,
			&driver.Name,
			&driver.Status,
			&driver.Location,
			&driver.Path,
			&driver.PathIndex,
			&driver.CustomerId,
		)
		drivers = append(drivers, driver)
	}

	ridesBytes, _ := json.MarshalIndent(drivers, "", "\t")

	w.Header().Set("Content-Type", "application/json")
	w.Write(ridesBytes)
}

func getCustomers(w http.ResponseWriter, req *http.Request) {
	rows, err := db.Connection.Query(`
		SELECT 
			id, 
			customer_id, 
			name, 
			active, 
			location, 
			destination, 
			driver_id 
		FROM customers WHERE
		active = true AND 
		driver_id IS NULL AND 
		(location IS NOT NULL AND location != 'null') 
		`,
	)
	if err != nil {
		http.Error(w, "Failed to get customers: "+err.Error(), http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	var customers []Customer

	for rows.Next() {
		var customer Customer
		rows.Scan(
			&customer.Id,
			&customer.CustomerId,
			&customer.Name,
			&customer.Active,
			&customer.Location,
			&customer.Destination,
			&customer.DriverId,
		)
		customers = append(customers, customer)
	}

	ridesBytes, _ := json.MarshalIndent(customers, "", "\t")

	w.Header().Set("Content-Type", "application/json")
	w.Write(ridesBytes)
}

type spaHandler struct {
	staticPath string
	indexPath  string
}

func (h spaHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	path, err := filepath.Abs(r.URL.Path)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	path = filepath.Join(h.staticPath, path)

	_, err = os.Stat(path)
	if os.IsNotExist(err) {
		http.ServeFile(w, r, filepath.Join(h.staticPath, h.indexPath))
		return
	} else if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	http.FileServer(http.Dir(h.staticPath)).ServeHTTP(w, r)
}

func getGrafanaProxy() *httputil.ReverseProxy {
	grafanaURL, _ := url.Parse("http://" + os.Getenv("SERVER_IP") + ":3000" )
	grafanaProxy := httputil.NewSingleHostReverseProxy(grafanaURL)
	return grafanaProxy
}

func main() {
	err := godotenv.Load("../.env")
  if err != nil {
    log.Fatal(err)
  }

	db.InitDB()
	defer db.Connection.Close()

	router := mux.NewRouter()

	grafanaProxy := getGrafanaProxy()
	
	router.HandleFunc("/api/drivers", getDrivers)
	router.HandleFunc("/api/customers", getCustomers)

	router.HandleFunc("/grafana/{subpath:.*}", func(w http.ResponseWriter, r *http.Request) {
		grafanaURL, _ := url.Parse("http://" + os.Getenv("SERVER_IP") + ":3000" )

		r.URL.Host = grafanaURL.Host
		r.URL.Scheme = grafanaURL.Scheme
		r.Header.Set("X-Forwarded-Host", r.Header.Get("Host"))
		r.Header.Set("Host", r.URL.Host)
		r.Header.Set("Origin", "http://" + os.Getenv("SERVER_IP"))
		r.Host = grafanaURL.Host

		// Modify the incoming request URL to remove the "/grafana" prefix
    r.URL.Path = strings.TrimPrefix(r.URL.Path, "/grafana")

    grafanaProxy.ServeHTTP(w, r)
	})

	// spa := spaHandler{staticPath: "../frontend/build", indexPath: "index.html"}
	router.PathPrefix("/").Handler(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		staticPath := "../frontend/build"
		indexPath := "index.html"
		path, err := filepath.Abs(r.URL.Path)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
	
		path = filepath.Join(staticPath, path)
	
		_, err = os.Stat(path)
		if os.IsNotExist(err) {
			http.ServeFile(w, r, filepath.Join(staticPath, indexPath))
			return
		} else if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	
		http.FileServer(http.Dir(staticPath)).ServeHTTP(w, r)
	}))

	serverEnv := os.Getenv("SERVER_ENV")
	if serverEnv == "DEV" {
		srv := &http.Server{
			Handler: router,
			Addr:    ":8080",
			WriteTimeout: 15 * time.Second,
			ReadTimeout:  15 * time.Second,
		}
		
		log.Fatal(srv.ListenAndServe())
	} else if serverEnv == "PROD" {
		srv := &http.Server{
			Handler: router,
			Addr:    ":443",
			WriteTimeout: 15 * time.Second,
			ReadTimeout:  15 * time.Second,
		}
	
		log.Fatal(srv.ListenAndServeTLS(
			"/etc/letsencrypt/live/rides.jurajmajerik.com/fullchain.pem",
			"/etc/letsencrypt/live/rides.jurajmajerik.com/privkey.pem",
		))
	}
}
