var temp = [
  [31, 32, 19, 37],
  [29, 27, 55, 36],
  [17, 27, 42, 46],
  [29, 52, 21, 64],
  [91, 27, 31, 61],
];
function myArrayFunction(arr) {
  var newTemps = [...arr];
  var avarageDayTemp = [];

  for (var i = 0; i < newTemps.length; i++) {
    for (var j = 0; j < newTemps[i].length; j++) {
      avarageDayTemp = "";
      var total = 0;
      total = newTemps[i][j] + newTemps[i][j] + newTemps[i][j] + newTemps[i][j];
      avarageDayTemp = total / 4;
      return avarageDayTemp;
    }
  }
}

console.log(myArrayFunction(temp));
module.exports = myArrayFunction;
