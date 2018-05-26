//find biggest / smallest manual
var palingBesar = arr[0]
var palingKecil = arr[0]
var a = ''
var b = ''
var x = ''
var y = ''

function caripalingbesarmanual (arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > palingBesar) {
      palingBesar = arr[i]
      //a = a + palingBesar
    } 
    // else {
    //   b = b + arr[i]
    // }
  }
  for (j = 0; j < arr.length; j++) {
    if (arr[j] < palingKecil) {
      palingKecil = arr[j]
      //x = x + palingKecil
    } 
    // else {
    //   y = y + arr[j]
    // }
  }
return palingBesar
}
console.log(caripalingbesarmanual([5,1,9,5,7]))