//[Exercises 11] Balik Kata

//Logic Challenge - Balik Kata

//SET and STORE 'kata' with any value
//SET and STORE 'panjangKata' with length of 'kata'
//SET and STORE 'i' with 'panjangKata' - 1
//SET and STORE 'hasilKata' with ''
//WHILE i <= 'panjangKata' - 1 && i >= 0
//  CALCULATE hasilKata = hasilKata + kata[i]
//  DECREMENT i by 1
//ENDWHILE

//FOR i >= 0 from i = panjangKata - 1
//  CALCULATE hasilKata = hasilKata + kata[i]
//  DECREMENT i by 1
//ENDFOR

function balikKata(kata) {
  var panjangKata = kata.length;
  var i = panjangKata - 1;
  var hasilKata = '';
  while (i <= panjangKata - 1 && i >= 0) {
    hasilKata = hasilKata + kata[i];
    i--;
  }
  //console.log(hasilKata);
  return hasilKata
}

function balikKata(kata) {
  var panjangKata = kata.length;
  var i;
  var hasilKata = '';
  for (i = panjangKata - 1; i >= 0; i--) {
    hasilKata = hasilKata + kata [i];
  }
  //console.log(hasilKata);
  return hasilKata
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS