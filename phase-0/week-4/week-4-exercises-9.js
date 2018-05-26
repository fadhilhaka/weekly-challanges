//[Exercises 9] Tukar Ukuran

//Logic Challenge - Tukar Besar Kecil

function  tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var ubahKalimat = ''
    var hasil = ''
    for (var i = 0; i < kalimat.length; i++) {
      ubahKalimat = kalimat.toUpperCase();
      if (kalimat[i] === ubahKalimat[i]) {
        hasil = hasil + ubahKalimat[i].toLowerCase();
      } else {
        hasil = hasil + ubahKalimat[i]
      }
      
    }
    return hasil
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"