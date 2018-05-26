/*
**************
FASTEST CLIMBER
**************
Fastest climber adalah sebuah function yang menerima sebuah parameter berupa string.
Dimana pada string tersebut, terdapat nama nama pemanjat tebing, dan waktu nya dalam bentuk jam dan menit.
Function dibawah akan mereturn nama pemanjat tebing tercepat.

RULES:
 - DILARANG menggunakan REGEX
 - DILARANG menggunakan muilt in function .reduce(), .map(), .filter()
 - DILARANG menggunakan built in function .indexOf(), dan .include()
 - DILARANG menggunakan built in function .split()

*/
function splitmanual (sentence, delimiter) {
  var contain = [] 
  var str = ''
  sentence += delimiter
  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] === delimiter) {
      contain.push(str)
      str = ''
    } else {
      str += sentence[i]
    }
  }
  return contain
}

function fastestClimber (string) {
  // your code here
  var splitString = splitmanual (string, ',')
  var newSplitString = []
  for (var a = 0; a < splitString.length; a++) {
    newSplitString.push(splitmanual ([splitString[a]], ' '))
  }
  var time = ''
  var arrTime = []
  for (var b = 0; b < newSplitString.length; b++) {
    time = newSplitString[b][1][0] + newSplitString[b][2][0] + newSplitString[b][2][1]
    arrTime.push([Number(time)])
  }
  var climber = []
  for (var c = 0; c < newSplitString.length; c++) {
    climber.push(splitmanual (newSplitString[c][0], ':'))
  }
  var fastest = arrTime[0][0]
  var indexFastest = []
  for (var d = 0; d < arrTime.length; d++) {
    if (arrTime[d][0] < fastest) {
      fastest = arrTime[d][0]
      indexFastest.push(d)
    }
  }
  if (indexFastest[0] === undefined) {
    return climber[0][0]
  } else {
    return climber[indexFastest[0]][0]
  }
}

console.log(fastestClimber('Kyle: 1jam 30menit,Nein: 2jam 30menit,Light: 0jam 59menit')) // Light
console.log(fastestClimber('Retsu: 1jam 30menit,Tokichi: 2jam 01menit,Go: 1jam 59menit')) // Retsu
console.log(fastestClimber('Awtian: 1jam 01menit,Pipu: 1jam 11menit,Caca: 1jam 59menit')) // Awtian
