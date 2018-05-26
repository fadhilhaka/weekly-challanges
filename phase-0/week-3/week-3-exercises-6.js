//[Exercises 6 (Auto)] Palindrome Angka

//Logic Challenge - Number Palindrome

function angkaPalindrome(num) {
  var pal = false;
  while (pal === false) {
    num++
    var a = '';
    var x = num.toString();
    var panjang = x.length - 1;
    for (i = panjang; i >= 0; i--) {
      a = a + x[i];
    }
    if (a === x) {
      pal === true;
      var b = Number(a);
      return b
    }
}
}

//

var num, x, y, i, j;
num = 111
j = num
i = 1
y = 0
a, b = 0
while (j > 0) {
  x = j % 10
  j = Math.floor(j / 10)
  y = y*10 + x
}

//
  
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
  
