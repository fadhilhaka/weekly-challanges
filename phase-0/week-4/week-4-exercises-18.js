//[Exercises 18] Kali Terus Rekursif

//Logic Challenge - Kali Terus (Rekursif)

function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var satuan = ''
    var container = []
    while (angka >= 10){
      satuan = angka % 10
      angka = Math.floor(angka / 10)
      container.push(satuan)
    }
    container.push(angka)
    
    var hasil = 1
    for (var i = 0; i < container.length; i++) {
      hasil = hasil * container[i]
    }
    //console.log(container, hasil)
    if (hasil >= 10) {
      return kaliTerusRekursif(hasil)
    } else {
      return hasil
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6