//[Exercises 13 (Auto)] Target Terdekat

//Logic Challenge - Target Terdekat
function targetTerdekat(arr) {
  // you can only write your code here!
  var panjang = arr.length
  var arrX = [];
  var arrY = [];
  var duaDimensi = [];
  var hasil = ''
  for (i = 0; i < panjang; i++) {
    if (arr[i] === 'o') {
      var x = i
      arrX.push(x)  
      
    } else if (arr[i] === 'x') {
      var y = i
      arrY.push(y)
    }
  }
  duaDimensi.push(arrX)
  duaDimensi.push(arrY) 
  if (x === undefined || y === undefined ) {
    return 0
  }
  for (j = 0; j < arrX.length; j++) {
    for (k = 0; k < arrY.length; k++) {
      var selisih = duaDimensi[0][j] - duaDimensi[1][k]
      if (selisih < 0) {
        selisih = duaDimensi[1][k] - duaDimensi[0][j]
      }
      if (arrX.length > arrY.length) {
        var panjangHasil = arrX.length
      } else {
        var panjangHasil = arrY.length
      }
      hasil = hasil + selisih
    }
    var sortHasil = hasil.split('') 
  }
  var sortAkhir = sortHasil.sort(function(value1, value2) {return value1 > value2 });
  return Number(sortAkhir[0])
}

// TEST CASES
// console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
// console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
// console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
// console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
// console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2