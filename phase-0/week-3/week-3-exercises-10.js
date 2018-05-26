//[Exercises 10 (Auto)] Perkalian Unik

//Logic Challenge - Perkalian Unik

function perkalianUnik(arr) {
    // you can only write your code here!
    var panjang = arr.length
    var a = 1
    for (i = 0; i < panjang; i++) {   
      a = a * arr[i]
    }
    var x = ''
    for (k = 0; k < 1; k++) {
      for (j = 0; j < panjang; j++) {
        var b = a / arr[j]
        x = x + b + ' '
      }
    var y = x.split(' ')
    var z = y.pop()
    return y
    }
  }
  
  // TEST CASES
  console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
  console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
  console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
  console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
  console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]