// Competency: Function + Looping + Conditional
/*
Instruksi
=========
Buatlah sebuah function bernama drawLadder yang menerima satu parameter bernama row, dan akan menampilkan x ke samping di baris ganjil, dan o di baris genap. 
Function drawLadder tidak perlu me-return apapun.
Function tidak perlu mengembalikan nilai (tidak perlu ada return).

buat deret urut tangga angka sesuai dengan nilai 'row'
tiap angka ganjil diganti dengan 'x'
tiap angka genap diganti dengan 'o'

Contoh 1
--------
input: 3
x
xo
xox

Contoh 2
--------
input: 6
tampilan:
x
xo
xox
xoxo
xoxox
xoxoxo

*/

function drawLadder(row) {
  // hanya code disini
  var j = '';
  var x = []
  for (i = 1; i <= row; i++) {
    if (i % 2 === 0) {
      j = j + 'o';
    } else {
      j = j + 'x'
    }
    x.push(j)
  }
  return x
}

function drawLadder(row) {
  // hanya code disini
  for (i = 1; i < row; i++) {
    var j = '';
    for (k = 0; k < i; k++) {
      if (i % 2 === 0) {
        j = j + 'o';
      } else {
        j = j + 'x'
      }
      console.log(j);
    }
  }
  return
}

drawLadder(6);
drawLadder(3);