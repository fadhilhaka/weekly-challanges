//[Exercises 5 (Auto)] Palindrome

//Logic Challenge - Palindrome

var kata = '';

function palindrome(kata) {
  var kataBalik = '';
  var panjang = kata.length - 1;
  for (i = panjang; i>= 0; i--) {
    kataBalik = kataBalik + kata[i];
  }
  if (kata === kataBalik) {
    return true;
  } else {
    return false;
  }
}

// // TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false