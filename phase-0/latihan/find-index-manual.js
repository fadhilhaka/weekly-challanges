//
function indexFinder (array, item) {
  var index = -1
  for (var i = 0; i < array.length; i++) {
    if (array[i].classCode === item) { 
      index = i
      break;
    }
  }
}