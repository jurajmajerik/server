const obstacles = [[18,22,3,9,"#99dea8"],[32,33,23,29,"#99dea8"],[32,33,31,34,"#99dea8"],[33,34,35,35,"#99dea8"],[35,37,35,36,"#99dea8"],[34,37,31,34,"#99dea8"],[0,6,20,20,"#87c1fa"],[8,24,20,20,"#87c1fa"],[26,27,20,20,"#87c1fa"],[27,28,21,21,"#87c1fa"],[28,29,22,22,"#87c1fa"],[29,30,23,23,"#87c1fa"],[30,30,24,29,"#87c1fa"],[30,30,31,36,"#87c1fa"],[31,31,36,36,"#87c1fa"],[31,33,37,37,"#87c1fa"],[33,42,38,38,"#87c1fa"],[44,48,38,38,"#87c1fa"],[49,54,38,38,"#87c1fa"],[54,55,39,39,"#87c1fa"],[55,56,40,40,"#87c1fa"],[56,56,41,47,"#87c1fa"],[56,56,49,62,"#87c1fa"],[56,56,64,76,"#87c1fa"],[56,56,77,90,"#87c1fa"],[56,56,92,99,"#87c1fa"],[0,1,0,1],[3,4,0,1],[0,4,3,4],[6,10,0,1],[6,6,3,3],[8,8,3,3],[10,10,3,3],[6,10,4,4],[12,16,0,1],[12,16,3,4],[15,16,5,6],[18,24,0,1],[24,24,3,5],[24,24,7,9],[12,16,8,9],[12,13,6,6],[6,10,6,8],[0,4,6,9],[0,4,11,12],[6,10,10,12],[12,14,11,12],[16,19,11,12],[21,24,11,12],[0,2,14,15],[0,2,17,18],[4,6,14,15],[4,6,17,18],[0,0,16,16],[6,6,16,16],[8,19,14,15],[21,24,14,15],[8,14,17,18],[16,24,17,18],[0,0,22,22],[2,2,22,22],[4,4,22,22],[6,6,22,22],[8,8,22,22],[10,10,22,22],[12,12,22,22],[14,14,22,22],[16,16,22,22],[18,18,22,22],[20,20,22,22],[22,22,22,22],[24,24,22,22],[0,2,24,24],[4,6,24,24],[8,10,24,24],[12,14,24,24],[16,20,24,24],[22,22,24,24],[24,24,24,24],[0,6,26,26],[8,14,26,26],[16,22,26,26],[26,26,23,23],[26,27,24,24],[28,28,26,29],[24,26,26,26],[0,2,28,28],[4,6,28,28],[8,14,28,28],[0,2,30,30],[4,6,30,30],[8,10,30,30],[12,14,30,30],[0,2,32,32],[4,6,32,32],[8,10,32,32],[12,14,32,34],[28,28,31,32],[25,26,31,32],[20,23,31,32],[25,26,29,29],[16,23,29,29],[16,18,31,32],[16,23,28,28],[25,26,28,28],[26,27,11,16],[26,27,18,18],[29,30,11,15],[30,31,20,20],[31,31,21,21],[30,31,19,19],[29,31,18,18],[29,29,19,19],[29,31,16,16],[26,27,7,9],[29,30,7,9],[26,27,3,5],[29,29,3,5],[31,31,3,5],[26,31,0,1],[16,18,34,34],[20,23,34,34],[25,28,34,35],[20,23,36,37],[18,18,36,36],[16,16,36,36],[16,16,38,38],[18,18,38,38],[35,37,29,29],[35,37,27,27],[35,37,23,25],[33,33,18,21],[35,37,18,21],[8,10,34,34],[8,8,35,36],[10,10,36,37],[9,10,38,38],[6,7,38,38],[4,6,34,36],[12,14,36,38],[4,4,38,38],[1,2,38,38],[2,2,34,37],[1,1,34,34],[0,1,36,36],[0,0,34,34],[0,0,38,38],[32,33,11,14],[33,33,15,16],[35,35,14,16],[35,35,11,12],[37,37,11,16],[32,33,7,9],[33,33,4,5],[33,33,0,2],[35,37,4,9],[35,37,0,2],[39,41,0,2],[39,41,4,9],[39,39,11,12],[40,41,11,11],[41,41,12,16],[40,40,14,14],[39,40,16,16],[39,39,14,14],[39,39,18,18],[41,41,18,21],[39,40,21,21],[40,40,20,20],[39,41,23,24],[39,41,26,27],[39,41,29,29],[39,41,31,33],[39,41,35,36],[39,39,20,20],[42,42,35,36],[42,42,31,33],[42,42,29,29],[44,44,29,36],[43,47,26,27],[46,47,29,31],[46,47,33,36],[43,43,23,24],[44,47,24,24],[45,47,18,22],[43,43,20,21],[43,43,18,18],[43,47,15,16],[43,44,11,13],[46,47,11,13],[43,47,9,9],[43,43,7,7],[45,47,7,7],[43,47,4,5],[43,43,0,2],[45,45,0,1],[46,47,1,1],[47,47,0,0],[45,45,3,3],[47,47,3,3],[33,37,40,40],[39,42,40,40],[44,44,40,40],[46,47,40,40],[46,47,42,43],[46,47,45,47],[43,44,43,46],[44,44,42,42],[42,42,42,42],[42,42,43,46],[39,40,42,42],[39,40,44,46],[44,44,47,47],[42,42,47,47],[40,40,47,47],[39,39,47,47],[37,37,42,47],[35,35,46,47],[35,35,42,44],[33,33,42,44],[32,33,46,47],[30,31,39,44],[29,29,38,39],[28,28,36,36],[25,25,36,36],[26,26,36,36],[25,27,38,38],[27,27,40,44],[28,28,41,44],[25,25,40,44],[25,30,46,47],[20,23,39,39],[20,21,41,41],[23,23,41,44],[20,21,43,44],[18,18,40,44],[13,16,40,44],[20,23,46,47],[13,18,46,47],[0,0,46,47],[1,2,47,47],[2,2,46,46],[0,2,44,44],[0,0,40,42],[1,2,42,42],[2,2,40,40],[4,4,40,44],[4,4,46,47],[6,7,44,47],[6,7,40,42],[9,11,40,42],[9,11,44,47],[9,9,44,44],[0,2,49,50],[4,4,49,50],[6,10,49,50],[12,12,49,50],[14,18,49,50],[20,20,49,50],[21,21,50,50],[22,23,49,50],[25,25,49,49],[27,27,49,49],[29,30,49,50],[25,27,51,52],[29,30,52,52],[20,23,52,52],[14,18,52,52],[12,12,52,52],[8,10,52,52],[6,6,52,52],[0,4,52,52],[32,33,49,49],[32,33,51,52],[35,35,49,52],[36,36,52,52],[36,36,50,50],[37,37,49,49],[37,37,50,50],[37,37,52,52],[39,40,49,52],[42,42,49,52],[44,44,49,52],[46,47,49,49],[46,47,51,51],[46,47,52,52],[49,49,40,40],[51,52,40,40],[52,53,41,41],[52,53,43,43],[52,54,45,47],[54,54,43,43],[53,54,42,42],[50,50,43,47],[49,49,43,44],[49,49,47,47],[50,50,40,41],[49,49,46,46],[49,49,41,41],[49,50,49,49],[52,53,49,49],[54,54,51,52],[52,53,51,52],[49,50,51,52],[54,54,49,49],[54,54,54,56],[54,54,58,62],[52,52,58,62],[52,52,54,56],[50,50,54,54],[49,50,56,56],[46,48,54,54],[47,47,55,56],[44,44,54,56],[45,45,56,56],[44,50,58,58],[47,50,60,60],[44,45,60,60],[44,50,62,62],[42,42,54,56],[42,42,58,58],[42,42,60,62],[39,40,54,54],[40,40,55,58],[39,39,58,58],[39,40,60,60],[40,40,61,62],[39,39,62,62],[37,37,54,55],[37,38,56,56],[37,37,58,62],[29,35,54,56],[33,35,58,62],[29,31,58,62],[25,27,54,54],[25,27,56,56],[25,27,58,60],[27,27,62,62],[25,25,62,62],[20,23,54,56],[20,23,58,60],[20,23,62,62],[18,18,54,58],[18,18,60,62],[14,16,54,54],[16,16,56,56],[14,14,56,56],[16,16,58,58],[14,14,58,58],[14,16,60,62],[12,12,54,56],[10,11,56,56],[10,10,54,54],[8,8,54,56],[6,6,54,56],[4,4,54,56],[0,2,54,56],[10,12,58,58],[4,8,58,58],[2,2,58,58],[0,0,58,58],[10,12,60,62],[6,8,60,60],[6,8,62,62],[4,4,60,62],[2,2,60,62],[0,0,60,62],[54,54,64,64],[54,54,66,68],[53,54,70,71],[54,54,73,73],[54,54,75,76],[51,52,75,76],[51,52,73,73],[51,51,68,71],[52,52,68,68],[51,52,66,66],[51,52,64,64],[46,49,64,64],[44,44,64,64],[44,49,66,66],[47,49,68,70],[44,45,68,70],[49,49,71,71],[47,47,71,71],[47,49,73,73],[49,49,75,75],[47,47,75,75],[47,49,77,77],[45,45,73,76],[45,45,71,71],[43,43,73,76],[45,48,78,78],[43,43,78,78],[43,43,68,71],[41,42,66,66],[41,41,68,71],[41,41,73,74],[41,41,76,78],[41,42,64,64],[51,51,77,79],[50,50,79,79],[53,54,78,78],[53,54,79,79],[45,48,79,79],[41,43,79,79],[39,39,64,66],[39,39,68,71],[39,39,73,74],[39,39,76,76],[39,39,78,79],[37,37,64,66],[37,37,68,68],[37,37,70,71],[37,37,73,73],[37,37,75,76],[37,37,78,79],[35,35,64,66],[33,34,64,64],[33,33,65,66],[33,35,68,69],[33,35,71,71],[33,35,73,74],[33,35,76,76],[33,35,78,79],[31,31,64,64],[29,29,64,64],[31,31,66,66],[29,29,66,66],[31,31,68,68],[29,29,68,68],[31,31,69,71],[29,29,70,71],[29,31,73,75],[31,31,76,76],[29,29,77,79],[30,31,78,79],[25,27,64,64],[25,27,66,66],[25,27,68,71],[27,27,73,75],[25,25,73,75],[25,27,77,77],[25,27,79,79],[20,23,64,64],[23,23,66,66],[20,21,66,66],[20,21,68,68],[23,23,68,69],[22,23,71,71],[20,20,69,71],[21,21,69,69],[20,23,73,73],[21,23,75,75],[20,23,77,77],[21,23,79,79],[19,19,79,79],[19,19,75,75],[18,18,73,75],[18,18,77,79],[18,18,68,71],[18,18,64,66],[16,16,64,66],[14,14,64,64],[14,14,66,66],[14,16,68,70],[16,16,71,71],[14,14,71,71],[14,16,73,75],[16,16,77,79],[14,14,77,79],[10,12,64,64],[10,12,66,66],[10,12,68,68],[10,12,70,71],[12,12,73,73],[10,10,73,75],[11,12,75,75],[10,12,77,77],[12,12,78,79],[10,10,79,79],[8,8,77,79],[8,8,73,75],[8,8,68,71],[8,8,66,66],[8,8,64,64],[6,6,64,66],[4,6,68,68],[6,6,69,71],[4,4,71,71],[5,5,69,69],[4,6,73,75],[4,6,77,79],[4,4,64,66],[0,2,64,64],[2,2,65,69],[0,1,66,66],[0,0,67,67],[0,0,69,69],[0,2,71,71],[0,2,73,73],[0,0,75,75],[2,2,75,75],[0,2,77,77],[0,2,79,79],[50,51,81,81],[50,51,83,83],[50,51,85,85],[51,51,86,86],[48,48,83,86],[45,48,81,81],[45,46,83,86],[48,49,87,87],[51,51,88,90],[48,49,89,90],[45,46,88,90],[45,46,92,92],[48,51,92,92],[51,51,93,93],[49,49,93,93],[46,46,93,93],[49,51,95,95],[47,47,94,95],[46,46,94,94],[49,51,97,97],[46,47,97,97],[45,45,96,97],[44,44,94,96],[43,43,92,92],[43,43,88,90],[43,43,83,86],[41,43,81,81],[41,41,82,84],[41,41,86,86],[41,41,88,90],[41,41,92,94],[42,42,94,95],[41,41,96,97],[42,42,97,97],[37,39,81,81],[37,39,83,83],[38,38,84,85],[39,39,85,85],[37,37,85,85],[37,39,87,89],[39,39,90,90],[37,37,90,90],[37,39,92,93],[37,39,95,97],[33,35,81,81],[33,35,83,85],[33,35,87,87],[33,35,89,89],[35,35,91,91],[33,33,91,91],[33,35,93,93],[33,35,95,95],[33,35,97,97],[31,31,95,97],[31,31,91,93],[31,31,89,89],[31,31,87,87],[31,31,83,85],[31,31,81,81],[29,29,81,81],[27,29,83,83],[27,27,81,82],[25,26,81,81],[25,25,82,83],[27,30,85,85],[25,25,85,85],[27,29,87,89],[25,25,87,89],[25,25,91,91],[27,29,91,91],[27,29,93,93],[25,25,93,93],[25,29,95,95],[27,29,97,97],[25,25,97,97],[21,23,81,81],[21,21,82,83],[23,23,82,84],[21,21,85,86],[22,23,86,86],[21,23,88,88],[23,23,89,89],[21,21,90,93],[23,23,91,93],[23,23,95,95],[21,21,95,97],[23,23,97,97],[18,19,81,83],[18,19,85,85],[18,19,87,88],[19,19,90,90],[17,17,90,92],[19,19,92,94],[17,17,94,96],[19,19,96,97],[13,17,97,97],[13,15,95,95],[15,15,94,94],[13,13,94,94],[13,15,92,92],[15,15,90,90],[13,13,90,90],[13,16,87,88],[13,16,85,85],[15,16,83,83],[13,13,81,83],[14,16,81,81],[11,11,81,81],[10,10,81,82],[10,11,83,83],[10,11,85,85],[10,11,87,88],[10,11,90,90],[10,11,92,92],[10,11,94,95],[10,11,97,97],[4,8,81,82],[6,8,84,84],[4,4,84,84],[6,8,86,86],[4,4,86,86],[4,4,88,88],[6,8,88,88],[4,8,90,90],[8,8,91,93],[4,7,92,92],[6,6,93,93],[4,4,93,93],[4,8,95,95],[4,8,97,97],[0,2,81,82],[2,2,84,86],[0,1,84,84],[0,0,86,86],[0,2,88,88],[2,2,90,90],[0,0,90,90],[0,2,92,92],[2,2,93,95],[0,0,93,95],[0,2,97,97],[49,49,36,36],[49,49,33,34],[51,51,33,34],[51,53,36,36],[53,53,33,34],[55,55,33,36],[56,56,35,37],[57,57,36,38],[58,59,34,34],[59,59,35,35],[59,59,37,38],[58,59,32,32],[55,56,31,31],[56,56,33,34],[51,53,31,31],[49,49,29,31],[51,51,29,29],[53,56,29,29],[58,59,29,30],[58,59,25,27],[53,56,25,27],[49,51,25,27],[49,51,23,23],[53,56,23,23],[58,58,23,23],[60,60,23,23],[61,61,25,27],[62,62,21,23],[58,61,21,21],[54,56,21,21],[51,52,21,21],[49,49,21,21],[49,52,18,19],[54,56,18,19],[58,58,18,19],[60,62,18,19],[49,50,15,16],[52,52,15,16],[50,52,13,13],[49,49,11,13],[50,50,11,11],[52,52,11,11],[49,50,9,9],[52,52,7,9],[49,50,7,7],[49,52,5,5],[49,49,3,3],[51,51,3,3],[53,53,3,3],[55,55,3,3],[49,53,1,1],[55,55,0,1],[52,52,0,0],[50,50,0,0],[49,49,0,0],[54,55,5,9],[54,55,11,11],[54,55,13,13],[54,56,15,16],[58,62,15,16],[57,62,13,13],[57,58,11,11],[60,62,11,11],[57,62,8,9],[60,62,5,6],[57,58,5,6],[57,60,3,3],[62,62,1,3],[57,62,0,0],[60,60,1,1],[58,58,1,1],[61,61,29,30],[61,61,32,34],[61,61,36,38],[63,65,25,25],[65,65,21,24],[64,64,21,21],[64,64,23,23],[64,65,18,19],[64,65,15,16],[64,65,13,13],[64,65,9,11],[64,65,5,7],[64,65,3,3],[65,65,0,2],[64,64,0,0],[64,64,1,1],[63,65,27,27],[63,63,28,30],[65,65,28,30],[63,65,32,32],[63,65,34,34],[63,63,36,36],[65,65,36,36],[65,65,38,38],[63,63,38,38],[58,61,40,40],[63,65,40,40],[58,58,42,42],[60,61,42,42],[63,65,42,42],[58,58,44,47],[60,61,44,45],[60,61,47,47],[63,65,44,47],[58,58,49,50],[58,58,52,55],[58,58,57,57],[58,58,59,62],[59,61,61,61],[59,61,60,60],[61,61,59,59],[61,61,62,62],[60,60,57,57],[62,65,57,57],[63,65,59,59],[63,65,61,62],[60,60,58,59],[60,60,52,55],[60,61,49,50],[62,62,52,52],[62,62,54,54],[62,63,56,56],[64,64,52,54],[65,65,56,56],[65,65,54,54],[65,65,52,52],[63,63,50,50],[63,65,49,49],[65,65,50,51],[58,61,64,64],[63,65,64,64],[58,58,66,66],[60,60,66,66],[61,61,66,68],[60,60,68,68],[58,58,68,68],[63,65,66,68],[58,61,70,70],[63,65,70,70],[58,61,72,72],[63,63,72,72],[65,65,71,72],[58,61,74,75],[63,65,74,75],[59,61,76,76],[60,61,77,77],[61,61,78,78],[63,63,77,77],[63,65,79,79],[65,65,77,77],[64,64,80,80],[65,65,81,81],[66,66,82,82],[65,66,80,80],[67,67,82,83],[66,66,83,83],[65,67,85,85],[66,66,87,90],[66,66,92,93],[66,66,95,97],[67,67,77,77],[66,67,79,79],[67,67,80,80],[67,67,74,75],[68,68,87,90],[68,68,92,92],[68,68,94,94],[68,68,96,97],[69,70,85,88],[70,70,90,90],[70,70,92,94],[70,70,96,97],[69,70,82,83],[69,69,79,80],[70,70,80,80],[69,70,77,77],[69,70,74,75],[67,67,70,72],[69,70,70,72],[67,70,66,68],[67,70,64,64],[67,67,62,62],[69,70,62,62],[69,70,60,60],[67,67,60,60],[67,70,58,58],[67,70,56,56],[67,67,54,54],[69,70,54,54],[70,70,50,53],[71,76,50,50],[76,76,51,54],[75,75,52,53],[73,73,51,53],[71,71,52,53],[72,74,55,55],[67,68,50,52],[67,67,49,49],[69,69,47,48],[67,68,47,47],[67,67,44,46],[69,69,43,45],[70,71,45,45],[71,71,46,48],[73,76,45,48],[73,75,43,43],[71,71,43,43],[67,67,41,42],[68,71,41,41],[73,73,41,41],[75,75,41,41],[67,71,39,39],[73,75,39,39],[67,69,37,37],[71,73,37,37],[75,75,35,37],[71,73,35,35],[69,69,35,35],[67,67,35,35],[67,69,33,33],[71,71,33,33],[73,75,33,33],[77,78,43,43],[78,78,39,42],[77,77,39,39],[77,77,41,41],[77,78,33,37],[78,78,45,48],[78,78,50,54],[76,78,56,56],[74,74,56,56],[72,72,56,56],[72,74,58,58],[76,78,58,58],[67,67,31,31],[67,67,27,29],[69,69,27,31],[71,71,30,31],[71,71,27,28],[73,75,27,31],[77,77,27,31],[79,79,27,31],[78,78,29,29],[77,79,25,25],[73,75,25,25],[71,71,25,25],[67,69,25,25],[67,67,23,23],[67,69,21,21],[69,69,23,23],[71,71,21,23],[73,75,21,23],[76,77,22,22],[77,79,23,23],[79,79,21,22],[77,77,21,21],[77,79,19,19],[73,75,19,19],[71,71,19,19],[67,69,19,19],[67,67,18,18],[69,69,18,18],[71,74,18,18],[77,77,18,18],[79,79,18,18],[67,69,16,16],[71,71,16,16],[73,75,16,16],[74,74,17,17],[75,75,17,17],[77,79,16,16],[67,67,14,14],[69,71,14,14],[73,75,14,14],[77,77,14,14],[79,79,14,14],[77,79,12,12],[73,75,12,12],[69,71,12,12],[67,67,12,12],[67,67,9,10],[69,71,9,10],[73,73,10,10],[75,75,9,10],[73,73,7,8],[74,75,7,7],[77,79,7,10],[69,71,7,7],[67,67,7,7],[67,69,5,5],[71,71,5,5],[73,75,5,5],[77,79,5,5],[67,67,3,3],[67,67,1,1],[67,69,0,0],[69,69,2,3],[71,71,0,3],[72,74,3,3],[72,74,1,1],[73,73,0,0],[76,76,1,3],[74,76,0,0],[78,78,0,3],[80,80,3,3],[80,80,0,1],[81,82,5,5],[82,82,0,3],[81,82,7,10],[81,82,12,12],[81,82,14,14],[81,81,16,16],[81,81,18,18],[81,82,19,19],[83,83,18,19],[83,83,16,16],[81,83,21,23],[81,81,25,25],[83,83,25,25],[81,81,27,29],[82,84,27,27],[83,83,28,29],[81,84,31,31],[84,84,29,29],[84,84,12,14],[84,84,9,10],[84,84,5,7],[84,84,0,3],[85,86,21,23],[85,86,18,19],[85,86,16,16],[86,86,14,14],[86,86,12,12],[86,86,5,10],[86,86,2,3],[86,86,0,0],[85,86,25,25],[86,86,27,29],[86,86,31,31],[88,90,0,0],[88,90,2,2],[92,92,0,2],[93,95,1,1],[94,96,0,0],[97,97,0,2],[97,97,4,4],[95,95,3,4],[94,94,3,3],[92,93,4,4],[90,90,4,4],[88,88,4,7],[90,90,6,7],[92,93,6,7],[95,95,6,7],[97,97,6,7],[88,90,9,10],[92,95,9,10],[97,97,9,10],[88,90,12,12],[92,95,12,12],[97,97,12,12],[88,90,14,14],[88,90,16,16],[92,93,14,14],[92,92,16,16],[94,95,16,16],[95,95,14,14],[97,97,14,16],[88,90,18,19],[92,92,18,19],[94,95,18,19],[97,97,18,18],[97,97,20,25],[92,96,21,21],[96,96,23,23],[92,94,23,23],[92,92,22,22],[95,95,25,25],[92,93,25,25],[90,90,21,21],[88,90,23,23],[88,88,21,22],[88,90,25,25],[88,88,27,27],[88,90,29,29],[90,90,27,28],[92,93,27,27],[92,93,29,29],[95,97,27,27],[95,95,28,29],[97,97,28,29],[88,97,31,31],[80,82,33,33],[84,84,33,33],[86,86,33,33],[88,91,33,33],[93,95,33,35],[97,97,33,35],[89,91,35,35],[90,90,34,34],[86,87,35,35],[82,84,35,35],[80,80,35,35],[80,82,37,37],[84,84,37,37],[86,87,37,37],[89,91,37,37],[93,93,37,37],[95,95,37,37],[97,97,37,37],[80,80,39,43],[81,81,41,41],[81,81,39,39],[81,81,43,43],[83,84,39,39],[83,83,40,43],[84,84,43,43],[85,85,41,41],[86,86,39,43],[88,88,39,40],[88,88,42,43],[90,90,39,43],[92,92,39,39],[92,92,41,43],[94,94,39,41],[95,96,39,39],[96,96,40,41],[94,96,43,43],[80,81,45,45],[80,81,47,48],[83,84,45,48],[86,86,45,45],[86,86,47,48],[88,88,45,48],[89,90,45,45],[90,90,47,47],[90,90,48,48],[92,92,45,45],[92,96,47,48],[94,96,45,45],[97,97,39,39],[97,97,41,41],[97,97,43,45],[97,97,47,47],[97,97,49,49],[92,95,49,49],[88,90,50,50],[84,86,50,50],[80,82,50,50],[80,82,52,54],[84,86,52,52],[84,86,54,54],[88,88,52,52],[88,90,54,54],[90,90,52,53],[92,93,51,51],[95,97,51,51],[92,93,53,54],[95,97,53,54],[80,82,56,58],[84,84,56,56],[86,86,56,56],[85,85,57,57],[84,86,58,58],[88,90,56,56],[88,90,58,58],[92,92,56,58],[94,94,56,58],[95,97,56,56],[97,97,57,58],[96,96,58,58],[72,74,60,60],[72,74,62,62],[76,78,60,62],[80,80,60,60],[82,82,60,60],[80,82,62,62],[84,84,60,62],[85,88,60,60],[86,90,62,62],[90,90,60,61],[92,92,60,62],[94,97,60,62],[72,74,64,64],[76,78,64,64],[80,80,64,64],[82,85,64,64],[87,90,64,64],[92,97,64,65],[72,72,66,66],[72,74,68,68],[74,74,66,67],[76,78,66,68],[80,83,66,66],[80,82,68,68],[84,86,68,68],[85,85,66,66],[87,90,66,66],[88,90,68,68],[92,97,67,68],[72,74,70,70],[72,74,72,72],[76,78,70,72],[80,82,70,70],[80,82,72,72],[84,84,70,72],[86,86,70,72],[88,88,70,70],[88,88,72,72],[88,88,74,74],[90,90,72,72],[90,90,70,70],[90,90,74,76],[88,89,76,76],[92,94,70,71],[92,94,73,73],[96,97,70,73],[72,74,74,75],[76,78,74,74],[76,78,76,76],[80,82,74,76],[84,86,74,76],[92,94,75,76],[96,97,75,76],[72,72,77,77],[74,74,77,77],[76,76,77,77],[78,78,77,77],[80,80,77,77],[82,82,77,77],[84,84,77,77],[86,86,77,77],[71,72,79,80],[74,78,79,80],[80,82,79,79],[84,84,79,79],[86,86,79,79],[88,90,78,79],[92,94,78,79],[96,96,78,78],[97,97,79,82],[96,96,80,82],[97,97,77,78],[92,94,81,82],[88,90,81,82],[86,86,81,81],[84,84,81,81],[80,82,81,81],[72,72,82,82],[74,78,82,82],[80,80,82,85],[82,82,83,85],[84,86,83,85],[74,78,84,85],[72,72,84,85],[88,90,84,84],[89,94,85,85],[92,92,83,84],[94,94,84,84],[96,97,84,85],[72,72,87,87],[72,72,89,90],[74,78,87,87],[74,78,89,90],[80,80,87,87],[80,80,89,90],[82,84,89,89],[83,83,90,90],[81,81,91,91],[81,81,92,95],[82,84,87,87],[86,86,87,87],[86,88,89,89],[88,88,86,88],[90,90,87,89],[92,92,87,89],[94,97,87,87],[94,96,88,89],[97,97,89,89],[94,97,91,91],[90,92,91,93],[86,88,91,91],[83,84,91,91],[83,84,93,93],[86,86,93,93],[88,88,93,93],[83,86,95,96],[88,92,95,96],[94,94,93,93],[96,97,93,96],[94,94,95,96],[97,97,97,97],[94,96,97,97],[92,92,97,97],[84,90,97,97],[81,81,97,97],[72,72,92,92],[74,78,92,92],[80,80,92,92],[77,79,94,97],[75,75,94,94],[72,75,96,97],[72,73,94,94],[58,59,79,79],[58,58,76,78],[58,61,81,81],[58,60,83,83],[61,61,80,80],[62,64,83,83],[63,63,82,82],[63,63,80,80],[58,60,85,87],[58,60,89,90],[62,63,85,85],[62,64,87,87],[62,64,89,90],[58,58,92,92],[60,60,92,92],[58,60,94,95],[58,60,97,97],[62,62,92,92],[62,64,94,94],[64,64,92,93],[62,64,96,97],[53,54,81,81],[53,54,83,83],[53,54,85,88],[53,54,90,90],[53,54,92,94],[53,54,96,97],[46,46,0,0],[51,51,0,0],[72,72,0,0],[93,93,0,0],[97,97,40,40],[97,97,48,48],[97,97,88,88],[91,91,97,97],[0,1,65,65],[0,1,37,37],[0,1,35,35],[99,99,0,2],[98,99,4,4],[98,99,6,7],[98,99,9,10],[98,99,12,12],[98,99,14,14],[99,99,15,16],[99,99,18,18],[99,99,20,20],[99,99,22,24],[99,99,26,27],[99,99,29,29],[98,99,31,31],[99,99,33,35],[99,99,37,37],[98,99,40,40],[99,99,43,45],[99,99,39,39],[99,99,41,41],[99,99,47,49],[99,99,51,51],[98,99,53,54],[99,99,56,58],[99,99,60,62],[99,99,64,65],[99,99,67,68],[99,99,70,73],[98,98,71,72],[99,99,75,77],[99,99,79,82],[99,99,84,85],[99,99,87,87],[98,99,89,89],[99,99,91,91],[99,99,93,95],[99,99,97,97],[97,99,99,99],[94,95,99,99],[92,92,99,99],[90,90,99,99],[87,88,99,99],[83,85,99,99],[81,81,99,99],[77,79,98,99],[75,75,98,99],[72,73,98,98],[70,70,98,99],[68,68,98,99],[66,66,99,99],[62,64,98,99],[60,60,99,99],[58,58,99,99],[53,54,99,99],[49,51,98,99],[45,47,99,99],[41,42,99,99],[39,39,99,99],[37,37,99,99],[33,35,98,99],[31,31,99,99],[27,29,99,99],[25,25,99,99],[21,23,99,99],[19,19,98,99],[13,17,99,99],[10,11,99,99],[4,8,99,99],[0,2,99,99],[44,44,97,97],[44,44,99,99],[83,83,97,97],[25,25,22,22],[28,28,25,25],[74,74,98,99],[72,73,99,99],[59,60,62,62]];

export default obstacles;