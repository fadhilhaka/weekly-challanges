//sort manual

//bubble sort
function sortmanual (arr) {
  var current = false
  //bisa diganti !current
  while (current === false) {
    current = true
    for (var j = 1; j < arr.length; j++) {
      if (arr[j-1] > arr[j]) {
        current = false
        var move = arr[j-1]
        arr[j-1] = arr[j]
        arr[j] = move
      }
    }
  }
return arr
}
console.log(sortmanual([5,1,9,5,7]))