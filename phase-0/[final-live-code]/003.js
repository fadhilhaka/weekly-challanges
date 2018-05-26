
/*
Count solo
===========
Diberikan sebuah function countSolo, dimana function ini akan menerima parameter sebagai array
dan akan mereturn total jumlah dari angka angka yang TIDAK memiliki pasangan.

Example:
input: [ 5, 5, 6, 6, 3, 1, 2, 7, 7 ]
proses: 3 + 1 + 2
result: 6

RULES:
 - TIDAK BOLEH MENGGUNAKAN built in function .map, .filter, .reduce!
 - TIDAK BOLEH MENGGUNAKAN built in function .indexOf dan .include!

*/
///////////////////////////////
function countSolo (numbers) {
  // your code here
  var myObj = {}
  for (var a = 0; a < numbers.length; a++) {
    if (myObj[numbers[a]] === undefined) {
      myObj[numbers[a]] = 1
    } else {
      myObj[numbers[a]]++
    }
  }
  var keys = Object.keys(myObj)
  var hasil = []
  for (var b = 0; b < keys.length; b++) {
    if (myObj[keys[b]] === 1) {
      hasil.push(keys[b])
    }
  }
  var jumlah = 0
  for (var c = 0; c < hasil.length; c++) {
    jumlah += Number(hasil[c])
  }
  return jumlah
}
///////////////////////////////
function countSolo (numbers) {
  // your code here
  numbers.sort(function(value1, value2) { return value1 > value2 });
  var current = ''
  var counter = 0;
  var container = []
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] != current) {
      if (counter > 0) {
        container.push([current, counter])
      }
    current = numbers[i];
    counter = 1;
    } else {
      counter++
    }
  }
  if (counter > 0) {
    container.push([current, counter])
  }
  var hasil = []
  for (var a = 0; a < container.length; a++){
    if (container[a][1] === 1) {
      hasil.push(container[a][0])
    }
  }
  var jumlah = 0
  for (var b = 0; b < hasil.length; b++) {
    jumlah += hasil[b]
  }
  return jumlah
}

console.log(countSolo([ 5, 5, 6, 6, 3, 1, 2, 7, 7])) // 6
console.log(countSolo([ 3, 6, 3, 6, 1, 1, 2, 1 ]))  // 2
console.log(countSolo([ 3, 3, 3, 3, 4, 5, 8, 10, 11 ])) // 38
