//[Exercises 12 (Auto)] Deret Geometri

//Logic Challenge - Tentukan Deret Geometri

function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    var a = ''
    for (j = 0; j < 1; j++) {
    var panjang = arr.length
      for (i = 0; i < panjang; i++) {
        var x = arr[1] / arr[0]
        var y = arr[i+1] / arr[i]
        if (arr[i+1] == undefined) {
        y = arr[i] / arr[i-1]
        }
        //console.log(x, y)
        if (x !== y) {
          return false
        } 
      } 
    return true
    } 
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false