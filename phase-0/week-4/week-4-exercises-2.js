//[Exercises 2] Faktor Persekutuan Terbesar

//Faktor Persekutuan Terbesar

function fpb(angka1, angka2) {
    // you can only write your code here!
    var x = ''
    var y = ''
    var z = ''
    var a = []
    var b = []
    
    for (i = 1; i < angka1; i++) {
      if (angka1 % i === 0) {
        x = i
        a.push(x)
      }
    }
    
    for (j = 1; j < angka2; j++) {
      if (angka2 % j === 0) {
        y = j
        b.push(y)
      }
    }
    
    for (k = 0; k < a.length; k++) {
      for (l = 0; l < b.length; l++) {
        if (a[k] === b[l]) {
          z = a[k]
        }
      }
    }
    return z
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1