//split manual
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

//TEST CASES
console.log(splitmanual('aku ingin makan dan tidur siang', ' '))

// function splitmanual (sentence, delimiter) {
//   // your code here
//   var container = []
//   var containerWord = []
//   var word = ''

//   for (i = 0; i < sentence.length; i++) {
//     //pake sentence.charAt(i)juga sama aja
//     if (sentence[i] === delimiter) {
//       //huruf setelah ' ' diganti dengan kosong (dihilangkan)
//       word = ''
//     }   else {
//       //yang tersisa adalah huruf/kata sebelum ' '  
//       word = word + sentence[i]
//     }
//     container.push(word)
//   }

//   sentence = sentence + delimiter

//   for (i = 0; i < sentence.length; i++) {
//     if (sentence[i] === delimiter) {
//       containerWord.push(container.slice(i-1, i))
//     }
//   }
//   //[ [ 'aku' ], [ 'ingin' ], [ 'makan' ], [ 'dan' ], [ 'tidur' ], [ 'siang' ] ]
//   //var wordA = ''
//   var containerString = []
  
//   for (var j = 0; j < containerWord.length; j++) {
//     //wordA = containerWord[j][0]
//     containerString.push(containerWord[j][0])
//   }
//   //[ 'aku', 'ingin', 'makan', 'dan', 'tidur', 'siang' ]
//   return containerString
// }

// //TEST CASES
// console.log(splitmanual('aku ingin makan dan tidur siang'))