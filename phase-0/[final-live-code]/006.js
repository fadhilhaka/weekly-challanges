/**
  Hapus Simbol Rekursif

  Diberikan sebuah function hapusSimbol(str) yang menerima satu parameter berupa
  string. Function akan me-return string yang telah bersih dari berbagai simbol,
  hanya menyisakan a-z dan angka 0-9.

  RULES:
  - Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function hapusSimbolRec
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function hapusSimbolRec
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX

**/

function hapusSimbolRec(str) {
  //your code here
  var alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789'
  var hasil = ''

  for (var a = 0; a < alphabet.length; a++) {
    if (str[0] === alphabet[a]) {
      hasil += str[0]
    }
  }
  
  str = str.slice(1)
  
  if (str.length < 1) {
    return hasil
  } else {
    return hasil + hapusSimbolRec(str)
  }
}

console.log(hapusSimbolRec('test%$4aa')); // test4aa
console.log(hapusSimbolRec('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbolRec('ma@#k!an~')); // makan
console.log(hapusSimbolRec('coding')); // coding
console.log(hapusSimbolRec('1+3-5*2=100')); // 1352100
//////////////////////////////
function hapusSimbolRec(str) {
  //your code here
  var alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789'
  var hasil = ''
  for (var a = 0; a < str.length; a++) {
    for (var b = 0; b < alphabet.length; b++) {
      if (str[a] === alphabet[b]) {
        hasil += str[a]
      }
    }
  }
  return hasil
}

console.log(hapusSimbolRec('test%$4aa')); // test4aa
console.log(hapusSimbolRec('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbolRec('ma@#k!an~')); // makan
console.log(hapusSimbolRec('coding')); // coding
console.log(hapusSimbolRec('1+3-5*2=100')); // 1352100
