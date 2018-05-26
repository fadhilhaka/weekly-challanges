//[Exercises 10] Cek AB

//Logic Challenge - Check AB

function  checkAB(num) {
    // you can only write your code here!
    var huruf = []
    var hurufA = []
    var hurufB = []
    for (var i = 0; i < num.length; i++) {
      huruf.push(num[i])
    }
    if (huruf.indexOf('a') === -1 || huruf.indexOf('b') === -1) {
      return false
    }
    var currentA = ''
    var currentB = ''
    var hasil = ''
    var hasilArr = []
    for (var j = 0; j < huruf.length; j++) {
      for (var k = 0; k < huruf.length; k++) {
        if (huruf[j] === 'a' && huruf[k] === 'b') {
          currentA = j
          currentB = k
          if (j > k) {
            hasil = j - k - 1
          } else {
            hasil = k - j - 1
          }
          hasilArr.push(hasil)
          for (var l = 0; l < hasilArr.length; l++) {
            if (hasilArr[l] % 3 === 0 && hasilArr[l] !== 0) {
              hasilArr.splice(0, l-1)
            }
          }
        }
      }
    }
    for (l = 0; l < hasilArr.length; l++) {
      if (hasilArr[l] % 3 === 0 && hasilArr[l] !== 0) {
        return true
      } else {
        return false
      }
    }
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false