//[Exercises 5] Ubah Huruf

//Logic Challenge - Ubah Huruf

function  ubahHuruf(kata) {
  // you can only write your code here!
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  var x = ''
  var y = ''
  var a = []
  for (var i = 0; i < kata.length; i++) {
    for (var j = 0; j < alphabet.length; j++) {
      if (kata[i] === alphabet[j]) {
        x = alphabet[j+1]
        if (kata[i] === alphabet[25]) {
          x = alphabet[0]
        }
        a.push(x)
      } 
    }
  }
  for (var k = 0; k < a.length; k++) {
    y = y + a[k]
  }
return y
} 

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu