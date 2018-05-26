/**

  Diberikan sebuah function countMe yang menerima sebuah parameter array of string.
  Function ini akan me-return object literal dimana isi dari object tersebut berisi
  jumlah karakter pada array of string

  Contoh:
  input: [ 'dimitri', 'awtian', 'icha' ]
  output:
    {
      d: 1,
      i: 5,
      m: 1,
      t: 2,
      r: 1,
      a: 3,
      w: 1,
      n: 1,
      c: 1,
      h: 1
    }
**/

//CARA LANGSUNG PAKE OBJECT
function countMe(names) {
  //your code here
  var myObj = {}
  for (var i = 0; i < names.length; i++) {
    for (var j = 0; j < names[i].length; j++) {
      //myObj[names[i][j]] = 0
      if (myObj[names[i][j]] === undefined) {
        myObj[names[i][j]] = 1
      } else {
        myObj[names[i][j]]++
      }
    }
  }
  return myObj
}

//CARA PRIMITIF
function countMe(names) {
  //your code here
  var newNames = ''
  var arr = []
  for (var i = 0; i < names.length; i++) {
    newNames += names[i]
  }
  arr.push(newNames)
  var newArr = []
  var word = ''
  for (var j = 0; j < arr[0].length; j++) {
    word = arr[0][j]
    newArr.push(word)
  }
  //sort
  var current = false
  while (current === false) {
    current = true
    for (var k = 1; k < newArr.length; k++) {
      if (newArr[k-1] > newArr[k]) {
        current = false
        var move = newArr[k-1]
        newArr[k-1] = newArr[k]
        newArr[k] = move
      }
    }
  }
  //count
  var currentArr = ''
  var counter = 0
  var containerArr = []
  var containerCounter = []
  for (var l = 0; l < newArr.length; l++) {
    if (newArr[l] != currentArr) {
      if (counter > 0) {
        containerArr.push(currentArr)
        containerCounter.push(counter)
      }
      currentArr = newArr[l]
      counter = 1
    } else {
      counter++
    }
  }
  if (counter > 0) {
    containerArr.push(currentArr)
    containerCounter.push(counter)
  }
  //put in object
  var myObject = {}
  
  for (var m = 0; m < containerArr.length; m++) {
    myObject[containerArr[m]] = containerCounter[m]
  }
  return myObject
}

console.log(countMe([ 'dimitri', 'awtian', 'icha' ]));
//{
//   d: 1,
//   i: 5,
//   m: 1,
//   t: 2,
//   r: 1,
//   a: 3,
//   w: 1,
//   n: 1,
//   c: 1,
//   h: 1
// }

console.log(countMe([ 'dimas', 'ryan', 'akbar', 'tama']));
// {
//   d: 1,
//   i: 1.
//   m: 2,
//   a: 6,
//   s: 1,
//   r: 2,
//   y: 1,
//   n: 1,
//   k: 1,
//   b: 1,
//   t: 1
// }