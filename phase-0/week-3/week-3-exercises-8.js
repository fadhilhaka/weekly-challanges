//[Exercises 8 (Auto)] Pasangan Angka Terbesar

//Logic Challenge - Pasangan Angka Terbesar

function pasanganTerbesar(num) {
  // you can only write your code here!
  var numString = num.toString()
  var newNum = '';
  for (i = 0; i < numString.length-1; i++){
    var x = numString[i] + numString[i+1]
    newNum = newNum + x + ' '
  }
  var newNumA = newNum.split(' ').map(Number)
  newNumA.pop()
  return Math.max.apply(Math, newNumA)
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99