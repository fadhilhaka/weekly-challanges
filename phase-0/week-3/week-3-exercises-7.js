//[Exercises 7 (Auto)] Hitung Jumlah Kata

//Logic Challenge - Menghitung Jumlah Kata

// function hitungJumlahKata(kalimat) {
//   // you can only write your code here!
//   var pisah = kalimat.split(' ');
//   return pisah.length
// }

function translateDan (sentence) {
  // your code here
  var y = ''
  for (i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      var x = sentence[i] 
      x = x + 'dan'
    }
    
    console.log(x)
  }
  return 
}

//TEST CASES
console.log(translateDan('aku ingin makan')) // aku dan ingin dan makan
console.log(translateDan('aku lapar')) // aku dan lapar
console.log(translateDan('tolong bantu aku')) // tolong dan bantu dan aku
console.log(translateDan('selamatkan aku dari serangan monster')) // selamatkan dan aku dan dari dan serangan dan monster
console.log(translateDan('aku butuh istirahat')) // aku dan butuh dan istirahat