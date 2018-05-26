/*
======================
The Dan World
======================
Kamu telah dilempar ke dimensi lain!
Di dunia ini, semua kalimat akan ditambahi kata "dan" diantara setiap katanya
Buatlah sebuah function yang bisa membantumu mentranslate bahasa "normal" kita, ke bahasa "dan"!

Contoh ada di test case

RULES:
--------
DILARANG menggunakan built in function .split dan .join

*/

function translateDan (sentence) {
  // your code here
  var a = ''
  //periksa tiap karakter dari 'sentence' hingga mendapatkan karakter ' ' (yang merupakan pemisah antar kata) 
  for (i = 0; i < sentence.length; i++) {
    //ganti karakter ' ' dengan ' dan ' dengan catatan karakter lain harus tetap muncul seperti biasa
    if (sentence[i] === ' ') {
      a = a + sentence[i] + ' dan '
    } else if (sentence[i] !== ' ') {
      a = a + sentence[i]
    }
  }
  //tunjukkan 'a' yang merupakan 'sentence' yang telah berubah 
  return a
}

//TEST CASES
console.log(translateDan('aku ingin makan')) // aku dan ingin dan makan
console.log(translateDan('aku lapar')) // aku dan lapar
console.log(translateDan('tolong bantu aku')) // tolong dan bantu dan aku
console.log(translateDan('selamatkan aku dari serangan monster')) // selamatkan dan aku dan dari dan serangan dan monster
console.log(translateDan('aku butuh istirahat')) // aku dan butuh dan istirahat
