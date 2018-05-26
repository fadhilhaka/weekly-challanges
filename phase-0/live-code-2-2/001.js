/*
==================================
Array Mastery: Who's the winner?
==================================
Nama:________
[INSTRUKSI]
Ada dua tim, Gryffindor dan Slytherin yang sedang bertarung pada sebuah kompetisi futsal.
Function whosTheWinner akan menerima suatu parameter beruapa array berisikan nama
tim yang sudah mencetak gol. Apabila pada array jumlah "Gryffindor" lebih banyak
daripada "Slytherin" maka function akan mereturn "Gryffindor Juara Futsal Hogwarts 2018".
Sedangkan jika jumlah "Slytherin" lebih banyak daripada "Gryffindor" maka function
akan mereturn "Slytherin Juara Futsal Hogwarts 2018". Jika jumlah kedua tim sama,
maka function akan mereturn "Draw, pertandingan akan dilanjutkan dengan penalty kick!"

Let's start our own wizardy, shall we?

[RULE]
- Wajib menuliskan algoritma/pseudocode. Tidak ada algoritma/pseudocode atau
  algoritma/pseudocode tidak match dengan kode maka indikasi soal tidak
  diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .map, .filter, atau .reduce!

*/

//algoritma/pseudocode
// SET and STORE 'counterG' with 0
// SET and STORE 'counterS' with 0
// CALCULATE 'Gryffindor' statement and 'Slytherin' statement
//   IF 'Gryffindor' statement true
//     add 'counterG' by 1
//   ELSE IF 'Slytherin' statement true
//     add 'counterS' by 1
//   ENDIF 
// DETERMINE the result by comparing 'counterG' and 'counterS'
//   IF 'counterG' GREATER THAN 'counterS'
//     DISPLAY "Gryffindor Juara Futsal Hogwarts 2018"
//   ELSE IF 'counterG' SMALLER THAN 'counterS'
//     DISPLAY "Slytherin Juara Futsal Hogwarts 2018"
//   ELSE IF 'counterG' EQUAL to 'counterS'
//     DISPLAY "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
//   ELSE IF 'counterG' EQUAL to 0 AND 'counterS' EQUAL to 0
//     DISPLAY "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
//   ENDIF

function whosTheWinner(goals) {
  // your code here
  //buat variabel sebagai pengganti gol Gryffindor dan Slytherin dengan nilai awal 0
  var counterG = 0
  var counterS = 0
  //hitung jumlah total gol berdasarkan data yang diberikan 
  for (i = 0; i < goals.length; i++) {
    if (goals[i] === "Gryffindor") {
      //tiap kali Gryffindor mencetak gol, counterG akan bertambah 1
      counterG++
    } else if (goals[i] === "Slytherin") {
      //tiap kali Slytherin mencetak gol, counterS akan bertambah 1
      counterS++
    }
  }
  //bandingkan junmlah total gol antara Gryffindor dengan jumlah total gol Slytherin lalu keluarkan pengumuman sesuai hasil
  //bila counterG lebih besar dari counterS maka "Gryffindor Juara Futsal Hogwarts 2018"
  if (counterG > counterS) {
    return "Gryffindor Juara Futsal Hogwarts 2018"
  //bila counterG lebih kecil dari counterS maka "Slytherin Juara Futsal Hogwarts 2018"  
  } else if (counterG < counterS) {
    return "Slytherin Juara Futsal Hogwarts 2018"
  //bila counterG sama dengan counterS maka "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
  } else if (counterG == counterS) {
    return "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
  //bila counterG dan counterS sama-sama bernilai 0 maka "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
  } else if (counterG === 0 && counterS === 0) {
    return "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
  }
}

// TEST CASES
console.log(whosTheWinner(["Gryffindor", "Slytherin", "Slytherin"])); // "Slytherin Juara Futsal Hogwarts 2018"
console.log(whosTheWinner(["Gryffindor", "Gryffindor", "Slytherin", "Slytherin", "Gryffindor"])); // "Gryffindor Juara Futsal Hogwarts 2018"
console.log(whosTheWinner(["Gryffindor", "Slytherin"])); // "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
console.log(whosTheWinner([])); // "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
console.log(whosTheWinner(["Slytherin"])); // "Slytherin Juara Futsal Hogwarts 2018"
