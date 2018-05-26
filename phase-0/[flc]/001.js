/*
-----------------
RELATION FORECAST
-----------------
PROBLEM
=======
getRelationForecast adalah sebuah program sederhana untuk mendapatkan persentase
seberapa matching laki-laki dan perempuan berdasarkan nama.
Skala persentase adalah dari 0% - 100%.
Untuk setiap kriteria dibawah ini, lakukan perubahan skala.
- tambah 50 jika jumlah huruf a (atau A) di nama male dan female bertotal 5 atau lebih
- tambah 30 jika huruf depan male dan huruf belakang female sama
- tambah 10 jika nama female lebih panjang dari nama male
Otomatis 100 % jika:
  - nama male dan nama female kedua-keduanya memiliki 'kode'.
Ingat, skala tidak boleh melebihi 100%!

RULES
=====
- Dilarang menggunakan regex metode apapun
- Dilarang menggunakan sintaks .includes, .replace, .search.

*/

function getRelationForecast(maleName, femaleName) {
  // your code here
  maleName = maleName.toLowerCase();
  femaleName = femaleName.toLowerCase();
  var myObj = {}
  for (var a = 0; a < maleName.length; a++) {
    if (myObj[maleName[a]] === undefined) {
      myObj[maleName[a]] = 1
    } else {
      myObj[maleName[a]]++
    }
  }
  console.log(myObj)
  if (myObj)
  for (var b = 0; b < femaleName.length; b++) {
    if (myObj[femaleName[b]] === undefined) {
      myObj[femaleName[b]] = 1
    } else {
      myObj[femaleName[b]]++
    }
  }
  var keys = Object.keys(myObj)
  var count = 0
  
  if (maleName[0] === femaleName[femaleName.length-1]) {
    count += 30
  }
  if (maleName.length < femaleName.length) {
    count += 10
  }
  for (var c = 0; c < keys.length; c++) {
    if (myObj[keys[c]] >= 5) {
      count += 50
    }
  }
  var countMaleK = 0
  var countMaleO = 0
  var countMaleD = 0
  var countMaleE = 0
  var countFemaleK = 0
  var countFemaleO = 0
  var countFemaleD = 0
  var countFemaleE = 0
  for (var d = 0; d < maleName.length; d++) {
    if (maleName[d] === 'k') {
      countMaleK++
    } else if (maleName[d] === 'o') {
      countMaleO++
    } else if (maleName[d] === 'd') {
      countMaleD++
    } else if (maleName[d] === 'e') {
      countMaleE++
    }
  }
  for (var e = 0; e < femaleName.length; e++) {
    if (femaleName[e] === 'k') {
      countFemaleK++
    } else if (femaleName[e] === 'o') {
      countFemaleO++
    } else if (femaleName[e] === 'd') {
      countFemaleD++
    } else if (femaleName[e] === 'e') {
      countFemaleE++
    }
  }
  if (countMaleK != 0 && countMaleO != 0 && countMaleD != 0 && countMaleE != 0 && countFemaleK != 0 && countFemaleO != 0 && countFemaleD != 0 && countFemaleE != 0) {
    count = 100
  }
  return count + '%'
}

console.log(getRelationForecast('Indra', 'Indriani')); // 40%
console.log(getRelationForecast('Arakawa', 'Mirai')); // 50%
console.log(getRelationForecast('Osass', 'Siti')); // 0%
console.log(getRelationForecast('Joe', 'Jeanne')); // 10%
console.log(getRelationForecast('Nameless Koder', 'Do Nothing but kodeing')); // 100%