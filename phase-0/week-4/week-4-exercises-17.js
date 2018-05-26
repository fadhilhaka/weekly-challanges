//[Exercises 17] Total Digit Rekursif

//Logic Challenge - Total Digit (Rekursif)

function totalDigitRekursif(angka) {
  // you can only write your code here!
  var hasil = ''
  if (angka / 10 >= 1) {
    hasil = angka % 10
    return hasil + totalDigitRekursif(Math.floor(angka / 10))
  } else {
    return angka
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5