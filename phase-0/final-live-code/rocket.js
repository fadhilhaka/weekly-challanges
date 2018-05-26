/**
=======================
British National Crisis
=======================
Tiga narapidana kabur dari penjara London. Tiga narapidana ini memiliki nomor sel 1, 5, dan 9.
Tiga narapidana ini bergabung dan menyatukan kekuatan dan pikiran untuk mengacau di Inggris
dengan melakukan pengeboman di tempat-tempat yang berbeda.

Setiap kali mereka mau melakukan pengeboman, mereka mengirimkan sebuah kode aneh
ke Scotland Yard, markas kepolisian Inggris.
Seorang detektif pemula tengah mencoba menyelesaikan krisis tersebut.
Ternyata, kode tersebut merupakan sebuah pola. Kode tersebut merupakan
angka 2,3,4,6,7, atau 8  yang ditulis dengan kata dalam bahasa Inggris, dan diacak.
Seluruh karakter di kode tersebut apabila disusun dengan baik, akan menghasilkan
beberapa kata berupa angka dalam bahasa Inggris.

District yang akan diserang selanjutnya adalah total dari angka yang ditemukan di kode tersebut!
Karena tiga narapidana ini benci dengan sel mereka,
 mereka tidak memasukkan angka 1, 5, dan 9.  Berikut ini adalah bahasa Inggris untuk angka yang digunakan:
  TWO -> 2
  THREE -> 3
  FOUR -> 4
  SIX -> 6
  SEVEN -> 7
  EIGHT -> 8

Contoh Kode 1:
WTWTHROETEO.
Apabila diacak mendapatkan kombinasi:
TWO TWO THREE => 2, 2, dan 3. 2 + 2 + 3 = 7, maka targetnya District 7!

Contoh Kode 2:
HSEVTEEING.
Apabila diacak mendapatkan kombinasi:
 SEVEN EIGHT => 7 dan 8. 7 + 8 = 15, maka targetnya District 15!

Contoh Kode 3:
FNEXSIVUSEOR. Apabila diacak mendapatkan kombinasi:
 FOUR SIX SEVEN => 4, 6, dan 7. 4 + 6 + 7 = 17, maka targetnya District 17!

Contoh Kode 4:
WTO. Apabila diacak mendapatkan kombinasi:
 TWO => 2. Maka targetnya District 2! 

HINT: Urutan angka mana yang keluar lebih dulu tidak penting!
 Yang penting adalah kita mendapatkan district berapa yang menjadi target!
*/

function nextTargetArea(code) {
  // Code Hanya Disini!
  var arrJumlah = []
  for (var a = 0; a < code.length; a++) {
    if (code[a] === 'W') {
      arrJumlah.push(2)
    } else if (code[a] === 'U') {
      arrJumlah.push(4)
    } else if (code[a] === 'X') {
      arrJumlah.push(6)
    } else if (code[a] === 'V') {
      arrJumlah.push(7)
    } else if (code[a] === 'G') {
      arrJumlah.push(8)
    }
  }
  for (var c = 0; c < arrJumlah.length; c++) {
    if (arrJumlah[c] === 2) {
      code = code.replace('T', '')
      code = code.replace('W', '')
      code = code.replace('O', '')
    } else if (arrJumlah[c] === 4) {
      code = code.replace('F', '')
      code = code.replace('O', '')
      code = code.replace('U', '')
      code = code.replace('R', '')
    } else if (arrJumlah[c] === 6) {
      code = code.replace('S', '')
      code = code.replace('I', '')
      code = code.replace('X', '')
    } else if (arrJumlah[c] === 7) {
      code = code.replace('S', '')
      code = code.replace('E', '')
      code = code.replace('V', '')
      code = code.replace('E', '')
      code = code.replace('N', '')      
    } else if (arrJumlah[c] === 8) {
      code = code.replace('E', '')
      code = code.replace('I', '')
      code = code.replace('G', '')
      code = code.replace('T', '')
      code = code.replace('H', '')      
    } 
  }
  if (code.length % 5 === 0) {
    arrJumlah.push(3 * code.length / 5)
  }
  var hasil = 0
  for (var b = 0; b < arrJumlah.length; b++) {
    hasil += arrJumlah[b] 
  }
  return "District " + hasil + " is the next target!"
}

console.log(nextTargetArea('WTO')); // "District 2 is the next target!"
console.log(nextTargetArea('WTWTHROETEO')); // "District 7 is the next target!"
console.log(nextTargetArea('HSEVTEEING')); // "District 15 is the next target!"
console.log(nextTargetArea('FNEXSIVUSEOR')); // "District 17 is the next target!"
console.log(nextTargetArea('EFNEXRSIVHUSEORTE')); // "District 20 is the next target!"