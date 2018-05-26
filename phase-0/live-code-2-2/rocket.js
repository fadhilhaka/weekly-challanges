/**
Multi Dimensional XO
====================
Implementasikan function `multiDimensionalXO` untuk membuat
array `size` x `size`. Array akan diisi dengan huruf 'x' atau huruf 'o'.
# Contoh I/O
- Input: 3
  Output: [ [ 'x', 'o', 'x' ], [ 'o', 'x', 'o' ], [ 'x', 'o', 'x' ] ]
Pastikan kamu mengisi selang-seling, lihatlah pattern dari output di test case!
# Kondisi khusus
- Jika `size` lebih kecil dari 1, tampilkan 'Invalid input'
*/

function multiDimensionalXO (size) {
  // Code here
  var container = []
  var ganjil = []
  var genap = []
  var x = ''
  var y = ''
  //bila nilai 'size' kurang dari 1, maka tunjukkan 'Invalid input'
  if (size < 1) {
    return 'Invalid input'
  }
  //buat variabel dengan nama 'container' yang memiliki jumlah array kosong sebanyak nilai 'size'
  for (i = 0; i < size; i++) {
    container.push([])
  }
  //buat variabel 'ganjil' yang diisi 'x' untuk urutan ganjil dan 'o' untuk urutan genap, dengan panjang sesuai nilai 'size'
  for (j = 1; j <= size; j++) {
    if (j % 2 === 0) {
      x = 'o'
      ganjil.push(x)
    } else {
      x = 'x'
      ganjil.push(x)
    }
  }
  //buat variabel 'genap' yang diisi 'o' untuk urutan ganjil dan 'x' untuk urutan genap, dengan panjang sesuai nilai 'size'
  for (k = 1; k <= size; k++) {
    if (k % 2 === 0) {
      y = 'x'
      genap.push(y)
    } else {
      y = 'o'
      genap.push(y)
    }
  }
  //ganti array kosong dalam 'container' dengan 'genap' untuk array kosong dengan urutan genap dan 'ganjil' untuk array kosong dengan urutan ganjil
  for (l = 1; l <= size; l++) {
    if (l % 2 === 0) {
      container.splice(l-1, 1, genap)
      //container[l-1].push(genap)
    } else {
      container.splice(l-1, 1, ganjil)
      //container[l-1].push(ganjil)
    }
  }
  //tunjukkan 'container'
  return container
}

//nested loop
function multiDimensionalXO (size) {
  // Code here
  var a = ''
  var b = 1
  for (i = 0; i < size; i++) {
    a = a + '\n'
    for (j = 1; j <= size; j++) {
      if (b % 2 === 0) {
        a = a + 'x' + ' '
      } else {
        a = a + 'o' + ' '
      }
      b++
    }
  }
 return a
}

//nested loop array
function multiDimensionalXO (size) {
  var a = ''
  var b = 1
  var x = []
  var y = 0
  for (i = 0; i < size; i++) {
    x.push([])
  }
  for (j = 0; j < size; j++) {
    for (k = 0; k < size; k++) {
      if (b % 2 === 0) {
        a = a + 'x'
      } else {
        a = a + 'o'
      }
      b++
    }
  }
  
  for (l = 0; l < size; l++) {
    for (m = 0; m < size; m++) {
      x[l].push(a[y])
      y++
    }
  }
  return x
}

console.log(multiDimensionalXO(3));
// [ [ 'x', 'o', 'x' ], [ 'o', 'x', 'o' ], [ 'x', 'o', 'x' ] ]

console.log(multiDimensionalXO(5));
/*
[ [ 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x' ] ]
*/

console.log(multiDimensionalXO(6));
/*
[ [ 'x', 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x', 'o' ] ]
*/

console.log(multiDimensionalXO(0));
// Invalid input
