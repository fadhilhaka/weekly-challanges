/*
==============
Catch Me if You Can
==============
Instruksi
=========
Seorang detektif sedang mengejar pelaku-pelaku kejahatan. Pelaku-pelaku kejahatan
ini akan memasang beberapa jebakan secara acak agar detektif tidak menangkap mereka.
Detektif memiliki 3 "nyawa", setiap detektif terkena jebakan maka "nyawa" dari detektif ini akan berkurang.

Buatlah sebuah algoritma/pseudocode yang akan menerima sebuah inputan array yang isinya adalah string berupa:
 - '@' adalah jebakan yang dipasang oleh pelaku-pelaku kejahatan
 - '*' adalah jalanan biasa
 - 'Villain' adalah pelaku kejahatan

Dimana function ini akan mengembalikan berapa banyak villain yang berhasil detektif tangkap.
Contoh
-------
1. inputan: ['*', '*', '@', '*', 'Villain', '*',  '@', 'Villain']
   output: Nice work, detective! You got all villains: 2
2. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain', 'Villain', '@']
   output: Ooops, you die. You got 3 villains
3. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain',  '@', 'Villain']
   output: Ooops, you die. You got 2 villains
*/

// Algoritma / Pseudocode here..
// SET and STORE 'nyawa' with 3
// SET and STORE 'tangkap' with 0
// FOR i LESS THAN 'array' length from i EQUAL to 0
//     IF 'array[i]' STRICT EQUAL to '@'
//         REDUCE 'nyawa' by 1
//     ELSE IF 'array[i]' STRICT EQUAL to 'Villain'
//         ADD 'tangkap' by 1
//     ENDIF
//     ADD i by 1
// ENDFOR
// IF 'nyawa' LESS THAN 1
//     DISPLAY 'Ooops, you die. You got ' + 'tangkap' + ' villains'
// ELSE 
//     DISPLAY 'Nice work, detective! You got all villains: ' + 'tangkap'
// ENDIF