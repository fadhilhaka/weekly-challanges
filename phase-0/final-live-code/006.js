/**
Virus Check Recursive
---------------------
Implementasikan function `virusCheckRecursive` untuk menghitung ada berapa virus yang
terdapat di dalam `str` berdasarkan `viruses` yang dicari.

Contoh 1:
input:
  str: 'qlD4MZax0raQqew'
  viruses: 'x|0|q' ==> berarti mencari x, 0 dan q

output: 4

Contoh 2:
input:
  str: 'HH0NBP1zRa'
  viruses: 'h|r' ==> berarti mencari h dan r

outuput: 3


RULES:
  - Wajib menggunakan metode rekursif
  - Dilarang menambahkan parameter baru
  - Dilarang membuat variable di luar function virusCheckRecursive
  - Dilarang mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - Dilarang menambahkan function di luar maupun di dalam function virusCheckRecursive

*/

//////////////////////////////////////////////
function virusCheckRecursive (str, viruses) {
  // your code here
  if (str === undefined || viruses === undefined || str.length === 0 || viruses.length === 0) {
    return 'There is no virus'
  }
  var count = 0
  for (var a = 0; a < viruses.length; a++) {
    if (str[0] === viruses[a] || str[0] === viruses[a].toUpperCase() || str[0] === viruses[a].toLowerCase()) {
      count++
    }
  }
  var strReg = str[0]
  var myReg = new RegExp(strReg)
  str = str.replace(myReg, '')
  if (str.length === 1) {
    return count
  } else {
    return count + virusCheckRecursive (str, viruses)
  }
}
//////////////////////////////////////////////
function virusCheckRecursive (str, viruses) {
  // your code here
  if (str === undefined || viruses === undefined || str.length === 0 || viruses.length === 0) {
    return 'There is no virus'
  }
  var count = 0
  for (var a = 0; a < str.length; a++) {
    for (var b = 0; b < viruses.length; b++) {
      if (str[a] === viruses[b] || str[a] === viruses[b].toUpperCase() || str[a] === viruses[b].toLowerCase()) {
        count++
      }
    }
  }
  return count
}
//////////////////////////////////////////////
function virusCheckRecursive (str, viruses) {
  // your code here
  if (viruses === undefined) {
    return 'There is no virus'
  }
  var arrViruses = viruses.match(/\w/gi)
  var strArrViruses = ''
  for (var x = 0; x < arrViruses.length; x++) {
    strArrViruses += arrViruses[x]
  }
  var arr = []
  for (var a = 0; a < strArrViruses.length; a++) {
    for (var b = 0; b < str.length; b++) {
      var myReg = new RegExp(strArrViruses[a], 'gi');
    }
    arr.push(str.match(myReg))
  }
  if (arr[0] === null) {
    return 0
  } 
  var count = 0
  for (var c = 0; c < arr.length; c++) {
    for (var d = 0; d < arr[c].length; d++) {
      count = count + arr[c][d].length
    }
  }
  return count
}

console.log(virusCheckRecursive('qlD4MZax0raQqew', 'x|0|q')); // 5
console.log(virusCheckRecursive('HH0NBP1zRa', 'h|r')); // 3
console.log(virusCheckRecursive('4O4TmIF6ONaiMlzpXxPqwy', '4|X|p')); // 6
console.log(virusCheckRecursive('mjBgPlzks', 'm')); // 1
console.log(virusCheckRecursive('AIn4Ks05bBaa', 'x')); // 0
console.log(virusCheckRecursive('RsMFjBUjvIaP')); // There is no virus
console.log(virusCheckRecursive('')); // There is no virus