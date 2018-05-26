//nested box 1-2-3

function multiDimensionalXO (size) {
  var a = ''
  var b = 1
  
  for (i = 0; i < size; i++) {
    a = a + '\n'
    for (j = 0; j < size; j++) {
      a = a + b
      b++
    }
  }
  console.log(a)
}

multiDimensionalXO (3)

//nested box 1-2-3

// function multiDimensionalXO (size) {
//   var a = ''
//   var b = 1
//   var c = 1
  
//   for (i = 0; i < size; i++) {
//     a = a + '\n'
//     for (j = 0; j < size; j++) {
//       a = a + b
//       b++
//     }
//      for (j = 0; j < 2; j++) {
//       a = a + c
//       c++
//     }
//   }

//   console.log(a)
// }

// multiDimensionalXO (3) 