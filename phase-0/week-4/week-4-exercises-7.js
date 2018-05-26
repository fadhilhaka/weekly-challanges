//[Exercises 7] Digit Perkalian Minimum

//Logic Challenge - Digit Perkalian Minimum

function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var store = []
    for (var i = 1; i <= angka; i++) {
      if (angka % i === 0) {
        store.push(i)
      }
    }
    var storeFaktor = []
    for (var j = 0; j < store.length; j++) {
      storeFaktor.push([])
      for (var k = 0; k < store.length; k++) {
        if (store[j]*store[k] === angka) {
          storeFaktor[j].push(store[j], store[k])
        }
      }
    }
    
    var faktor = ''
    var storeAngka = []
    for (var l = 0; l < storeFaktor.length; l++) {
      for (var m = 0; m < storeFaktor[l].length; m++) {
        if (m === storeFaktor[l].length-1) {
          faktor = storeFaktor[l][m] + '' +storeFaktor[l][m-1]
          storeAngka.push(faktor)
        }
      }
    }
    
    var smallest = storeAngka[0].length
    for (var n = 0; n < storeAngka.length; n++) {
      if (storeAngka[n].length < smallest) {
        smallest = storeAngka[n].length
      }
    }  
    
  return smallest
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2