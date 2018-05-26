//[Exercises 14] Mengelompokkan Angka

//Logic Challenge - Mengelompokkan Angka

function mengelompokkanAngka(arr) {
    // you can only write your code here!
    var panjang = arr.length
    var genap = []
    var ganjil = []
    var kelipatanTiga = []
    var hasil = []
    for (i = 0; i < panjang; i++){
      if (arr[i] % 2 === 0 && arr[i] % 3 !== 0) {
        var x = i
        genap.push(arr[x])
      } else if (arr[i] % 2 !== 0 && arr[i] % 3 !== 0) {
        var y = i
        ganjil.push(arr[y])
      } else if (arr[i] % 3 === 0) {
        var z = i
        kelipatanTiga.push(arr[z])
      }
    }
    hasil.push(genap)
    hasil.push(ganjil)
    hasil.push(kelipatanTiga)
    return hasil
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]
  