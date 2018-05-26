/* Encrypt me
    Kamu adalah seorang agen rahasia yang ingin mengirimkan pesan ke partnermu,untuk menmbuat kode yang kamu kirim tetap konfidental,
    kamu harus mengikuti sebuah kamus yang dimiliki oleh H8BI (Hacktiv8 Bureau of Investigation)

  Berikut adalah kamus huruf dari HBI
  huruf biasa abcdefghijklmnopqrstuvwxyz
  huruf H8BI  !@#$%^&*()-+1234567890[]{}

  Buatlah sebuah function yang mentranslate kata kata biasa, menjadi kata kata ter enkripsi menggunakan kamus H8BI!

  Note:
  - Selain karakter huruf biasa maka tidak akan di-translate

  Contoh 1:
  encrypt(dimitri) akan menghasilkan => $(1(86(

  Contoh 2:
  encrypt(@wtian) akan menghasilkan => @[8(!2

  Selamat berjuang, agen rahasia..

  RULES:
  ------
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE, jika tidak ada maka dianggap tidak mengerjakan
  - DILARANG MENGGUNAKAN BUILT IN FUNCTION .indexOf !

*/

//ALGORITMA/PSEUDOCODE
// SET and STORE 'alphabet' with 'abcdefghijklmnopqrstuvwxyz'
// SET and STORE 'hack8' with '!@#$%^&*()-+1234567890[]{}'
// SET and STORE 'arr' with empty array
// SET and STORE 'hasil' with empty string
// FOR 'a' LESS THAN 'input' length from 'a' EQUAL to 0
//   PUSH value 'input[a]' to 'arr' 
//   FOR 'b' LESS THAN 'alphabet' length from 'b' EQUAL to 0
//     IF 'input[a]' STRICT EQUAL 'alphabet[b]' OR 'input[a]' STRICT EQUAL 'hack8[b]'
//       PUSH value 'hack8[b]' to 'arr'
//       SPLICE value 'arr[a]' from 'arr'
//     ENDIF
//     ADD 'b' by 1
//   ENDFOR
//   ADD 'a' by 1
// ENDFOR
// FOR 'c' LESS THAN 'arr' length from 'c' EQUAL to 0
//   DETERMINE 'hasil' with 'hasil' added by 'arr[c]' 
//   ADD 'c' by 1
// ENDFOR
// DISPLAY 'hasil'

var alphabet = 'abcdefghijklmnopqrstuvwxyz'
var hack8 = '!@#$%^&*()-+1234567890[]{}'

function encrypt(input) {
  // your code here
  var arr = []
  for (var a = 0; a < input.length; a++) {
    arr.push(input[a])
    for (var b = 0; b < alphabet.length; b++) {
      if (input[a] === alphabet[b] || input[a] === hack8[b]) {
        arr.push(hack8[b])
        arr.splice(a, 1)
      }
      
    }
  }
  var hasil = ''
  for (var c = 0; c < arr.length; c++) {
    hasil = hasil + arr[c]
  }
  return hasil
}

console.log(encrypt('dimitri')) // $(1(86(
console.log(encrypt('irsyah mardiah')) //(67{!* 1!6$(!*
console.log(encrypt('dimitr€€')) // $(1(86€€
console.log(encrypt('d!mas')) // $!1!7
console.log(encrypt('@wtian')) // @[8(!2