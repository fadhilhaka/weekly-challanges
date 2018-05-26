//[Exercises 11] Change me

//Logic Challenge - Change Me!

function changeMe(arr) {
  // you can only write your code here!
  if (arr.length === 0) {
    var kosong = console.log('""')
    return kosong
  }
  var hasil = []
  for (var i = 0; i < arr.length; i++) {
    var myObj = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: arr[i][2],
      age: 2018 - arr[i][3],
    }
    if (arr[i][3] === undefined) {
      myObj.age = 'Invalid Birth Year'
    }
    hasil.push(myObj)
  }
  for (var j = 0; j < hasil.length; j++) {
    var hasilAkhir = console.log(j+1 + '. ' + arr[j][0] + ' ' + arr[j][1] + ':') + console.log(hasil[j])  
  }
  return hasilAkhir
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""