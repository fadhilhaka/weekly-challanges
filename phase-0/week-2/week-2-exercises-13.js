//[Exercises 13] X dan O

//Logic Challenge - X dan O

//SET and STORE 'str' without any value
//SET and STORE 'panjangO' with length of character 'o' in the 'str'
//SET and STORE 'panjangX' with length of character 'x' in the 'str'
//IF 'panjangO' < 'panjangX'
//  DISPLAY false
//ELSE IF 'panjangO' > 'panjangX'
//  DISPLAY false
//ELSE
//  DISPLAY true

function xo(str) {
  var panjangO = (str.match(/o/g)).length;
  var panjangX = (str.match(/x/g)).length; 
  if (panjangO < panjangX) {
    return false;
  } else if (panjangO > panjangX) {
    return false;
  } else {
    return true;
  }
} 


if (counterO = 'o') {
  counterO++;
} else if (counterX = 'x') {
  counterX++;
} 
if (counterX > counterO) {
  return false
}


  //TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true