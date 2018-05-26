/**
Even Pairs Sum
--------------
Implementasikan function `evenPairsSum` yang akan menjumlahkan pasangan-pasangan angka genap yang
ada di dalam `str`.
Contoh
- input: '34102180'
  pasangan: 34, 10, 21, 80
  output: 124
  Karena ada pasangan genap (34, 10, 80) maka akan dijumlahkan

- input: '31913791'
  pasangan: 31, 91, 37, 91
  output: 0
  Karena tidak ada pasangan genap

- input: '2130113'
  pasangan: 21, 30, 11, 32
  output: 62
  Karena ada pasangan genap (30, 32) maka akan dijumlahkan

NOTE: Jika angka terakhir tidak memiliki pasangan, maka pasangkan dengan angka pertama seperti
      pada contoh terakhir

RULES:
 - WAJIB MENGGUNAKAN algoritma/pseudocode, tidak menyertakan algoritma/pseudocode maka codingan dianggap tidak valid

*/
//algoritma/pseudocode
// SET and STORE 'jumlah' with 0
// SET and STORE 'hasil' with empty string
// FOR 'a' LESS THAN 'str' length from 'a' EQUAL to 0
//   IF 'str' length mod 2 STRICT EQUAL to 0
//     IF 'a' mod 2 STRICT EQUAL 0
//       CALCULATE 'hasil' by addition of 'str[a]' to 'str[a+1]'
//         IF 'Number(hasil)' mod 2 STRICT EQUAL to 0
//           CALCULATE 'jumlah' by addition of 'jumlah' to 'Number(hasil)'
//         ENDIF
//     ENDIF
//   ELSE
//     IF 'a' mod 2 STRICT EQUAL to 0 AND 'a' LESS THAN 'str' length -1
//       CALCULATE 'hasil' by addition of 'str[a]' to 'str[a+1]'
//         IF 'Number(hasil)' mod 2 STRICT EQUAL to 0
//           CALCULATE 'jumlah' by addition of 'jumlah' to 'Number(hasil)'
//         ELSE
//           IF 'a' STRICT EQUAL 'str' length -1
//             CALCULATE 'hasil' by addition of 'str[str.length-1]' to 'str[0]'
//               IF 'Number(hasil)' mod 2 STRICT EQUAL to 0
//                 CALCULATE 'jumlah' by addition of 'jumlah' to 'Number(hasil)'
//               ENDIF
//           ENDIF
//         ENDIF
//     ENDIF
//   ENDIF
//   ADD 'a' by 1
// ENDFOR
// DISPLAY 'jumlah'

function evenPairsSum (str) {
  // Code disini
  //var arrHasil = []
  var jumlah = 0
  var hasil = ''
  for (var a = 0; a < str.length; a++) {
    if (str.length % 2 === 0){
      if (a % 2 === 0) {
        hasil = str[a] + str[a+1]
        //arrHasil.push(hasil)
        if (Number(hasil) % 2 === 0) {
          jumlah += Number(hasil)
        }
      }
    } else {
      if (a % 2 === 0 && a < str.length-1) {
        hasil = str[a] + str[a+1]
        //arrHasil.push(hasil)
        if (Number(hasil) % 2 === 0) {
          jumlah += Number(hasil)
        }
      } else if (a === str.length-1) {
        hasil = str[str.length-1] + str[0]
        //arrHasil.push(hasil)
        if (Number(hasil) % 2 === 0) {
          jumlah += Number(hasil)
        }
      }
    }
  }

  // for (var b = 0; b < arrHasil.length; b++) {
  //   if (Number(arrHasil[b]) % 2 === 0) {
  //     jumlah += Number(arrHasil[b])
  //   }
  // }
  return jumlah
}

console.log(evenPairsSum('2044101211')); // 86
console.log(evenPairsSum('33791363')); // 0
console.log(evenPairsSum('23426766201')); // 140
console.log(evenPairsSum('2478201')); // 134
