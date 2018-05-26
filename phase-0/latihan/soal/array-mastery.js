/*
==================================
Array Mastery: Separate Them
==================================

Nama:________

[INSTRUKSI]
Setiap student di HACKTIV8 memiliki tim project dengan komposisi satu tim berdua.

Function separateThem akan menerima satu parameter berupa array yang berisi string
pasangan nama student dengan format 'NAMA_STUDENT_1 dan NAMA_STUDENT_2'.
Function ini akan memecah setiap kelompok menjadi per orang satu per satu.
[CONTOH]
input: ['Budi dan Badu', 'Indra dan Indri']
input: ['Budi', 'Badu', 'Indra', 'Indri']

input: ['Budi dan Badu', 'Indra dan Indri', 'James dan Rodhie']
input: ['Budi', 'Badu', 'Indra', 'Indri', 'James', 'Rodhie']

input: []
output: []

*/

function splitmanual (sentence, delimiter) {
  // your code heresplitmanual (sentence, delimiter)
  var container = []
  var containerWord = []
  var word = ''

  for (i = 0; i < sentence.length; i++) {
    if (sentence[i] === delimiter) {
      word = ''
    }   else {
      word = word + sentence[i]
    }
    container.push(word)
  }
  sentence = sentence + delimiter
  for (i = 0; i < sentence.length; i++) {
    if (sentence[i] === delimiter) {
      containerWord.push(container.slice(i-1, i))
    }
  }
  var containerString = []
  for (var j = 0; j < containerWord.length; j++) {
    containerString.push(containerWord[j][0])
  }
  return containerString
}

function separateThem(students) {
  if (students[0] === undefined) {
    return []
  }
  var arrStudents = []
  for (var b = 0; b < students.length; b++) {
    var newStudents = splitmanual (students[b], ' ')
    
    for (var a = 0; a < newStudents.length; a++) {
      if (newStudents[a] === 'dan') {
        newStudents.splice(a, 1)
        for (var c = 0; c < newStudents.length; c++) {
          arrStudents.push(newStudents[c])
        }
      }
    }
  }
  return arrStudents
}
  
// TEST CASES
console.log(separateThem(['Budi dan Badu'])); // ['Budi', 'Badu']
console.log(separateThem(['Budi dan Michael'])); // ['Budi', 'Michael']
console.log(separateThem(['Budi dan Badu', 'Indra dan Indri'])); // ['Budi', 'Badu', 'Indra', 'Indri']
console.log(separateThem(['Budi dan Badu', 'Indra dan Indri', 'James dan Rodhes'])); // ['Budi', 'Badu', 'Indra', 'Indri', 'James', 'Rhodes']
console.log(separateThem([])); // []