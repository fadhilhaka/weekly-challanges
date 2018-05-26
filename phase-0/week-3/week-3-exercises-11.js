//[Exercises 11 (Auto)] Deret Aritmatika

//Logic Challenge - Tentukan Deret Aritmatika

function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var a = ''
    for (j = 0; j < 1; j++) {
    var panjang = arr.length
      for (i = 0; i < panjang; i++) {
        var x = arr[1] - arr[0]
        var y = arr[i+1]-arr[i]
        if (arr[i+1] == undefined) {
        y = arr[i] - arr[i-1]
        }
       // console.log(x, y)
        if (x !== y) {
          return false
        } 
      } 
    return true
    } 
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false