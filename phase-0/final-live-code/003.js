/**
Highest Top Speed
=================
Implementasikan function `highestTopSpeed` untuk mencari
top speed yang paling tinggi dari data yang diberikan.

Function ini akan menerima satu parameter yaitu `data`
yang memiliki tipe data string.

Di dalam string `data` terdapat nama orang dan top speed orang
tersebut. Tiap orang akan dipisah dengan tanda koma ','
Tugas kamu adalah untuk mencari top speed tertinggi dari
string yang telah diberikan

# Contoh I/O
Contoh input dan output bisa kamu lihat di test case

# Kondisi khusus
- Jika string kosong, maka tampilkan 'No data'

# Constraints
- DILARANG menggunakan built-in function .map, .filter, .reduce
- DILARANG menggunakan built-in object Math
- DILARANG menggunakan built-in function .sort
- DILARANG menggunakan built-in function .indexOf
*/

function splitmanual(sentence, del) {
  // your code here
  if (sentence.length < 2) {
    return 'No data'
  } 
  var container = []
  var containerWord = []
  var word = ''

  for (i = 0; i < sentence.length; i++) {
    if (sentence[i] === del) {
      word = ''
    }   else { 
      word = word + sentence[i]
    }
    container.push(word)
  }
  sentence = sentence + del
  for (i = 0; i < sentence.length; i++) {
    if (sentence[i] === del) {
      containerWord.push(container.slice(i-1, i))
    }
  }
  var containerString = [] 
  for (var j = 0; j < containerWord.length; j++) {
    containerString.push(containerWord[j][0])
  }
  return containerString
}

function highestTopSpeed (data) {
  // your code here
  var pisah = splitmanual(data, ',')
  var arr = pisah
  var newArr = []
  for (var a = 0; a < arr.length; a++) {
    var newPisah = splitmanual(arr[a], ' ')
    newArr.push(newPisah[0])
  }
  var finalArr = []
  for (var b = 0; b < newArr.length; b++) {
    var finalPisah = splitmanual(newArr[b], ':')
    finalArr.push(finalPisah)
  }
  var biggest = finalArr[0][1]
  for (var c = 0; c < finalArr.length; c++) {
      if (finalArr[c][1] > biggest) {
        biggest = finalArr[c][1]
      }
  }
  if (data === '') {
    return 'No data'
  } else {
    return biggest
  }
}
console.log(highestTopSpeed('Nakazato:140 km/h,Ryosuke:180 km/h,Iketani:110 km/h'));
// 180

console.log(highestTopSpeed('Bunta:200 km/h,Takumi:180 km/h,Sudo:160 km/h'));
// 200

console.log(highestTopSpeed('Joshima:175 km/h,Hoshino:150 km/h,Inui:175 km/h'));
// 175

console.log(highestTopSpeed(''));
// No data
