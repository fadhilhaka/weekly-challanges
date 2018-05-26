//[Exercises 6] Hitung Huruf

//Logic Challenge - Hitung Huruf

function hitungHuruf(kata) {
  // you can only write your code here!
  //pisah kata
  var word = ''
  var container = []
  var containerKata = []
  
  for (var i = 0; i < kata.length; i++) {
    if (kata[i] === ' ') {
      word = ''
    } else {
      word = word + kata[i]
    }
  container.push(word)  
  }
  
  kata = kata + ' '
  
  for (i = 0; i < kata.length; i++) {
    if (kata[i] === ' ') {
      containerKata.push(container.slice(i-1, i))
    }
  }
  var wordA = ''
  var kataKata = [] 
  
  for (var j = 0; j < containerKata.length; j++) {
    wordA = containerKata[j][0]
    kataKata.push(wordA)
  }
  //
  var current = ''
  var counter = 0
  var gudang = []
  
  for (var x = 0; x < kataKata.length; x++) {
    gudang.push([])
    for (var y = 0; y < kataKata[x].length; y++) {
      gudang[x].push(kataKata[x].indexOf(kataKata[x][y]))
    }  
  }
  
  var index = []
  
  for (var a = 0; a < gudang.length; a++) {
    index.push([])
    gudang[a].sort(function(value1, value2) { return value1 > value2 })
    for (var b = 0; b < gudang[a].length; b++) {
      if (gudang[a][b] != current) {
        current = gudang[a][b]
      } else {
        index[a].push(current)
      }
    }
  }
  
  for (var a = 0; a < gudang.length; a++) {
    if (index[a] == '') {
      index.splice(a, 1, [])
    }
  }
  
  var hasil = ''
  var indexArr = []
  for (var z = 0; z < index.length; z++) {
    indexArr.push([])
    hasil = index[z].length
    indexArr[z].push(hasil)
  }
  
  var biggest = indexArr[0]
  for (var k = 0; k < indexArr.length; k++) {
    if (indexArr[k] > biggest) {
      biggest = indexArr[k]
    }
  }
  return kataKata[indexArr.indexOf(biggest)]
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau