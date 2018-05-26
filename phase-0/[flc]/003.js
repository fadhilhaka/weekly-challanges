/**
  Vowels Counter Recursive

  Diberikan sebuah function vowelsCounterRecursive(sentences) yang menerima satu parameter berupa
  string. Function akan me-return jumlah huruf vokal yang terdapat di dalam parameter inputan

- Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function vowelsCounterRecursive
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function vowelsCounterRecursive
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX

*/

function  vowelsCounterRecursive(sentences) {
  // your code here
  var vowel = 'aiueoAIUEO'
  var count = 0
  for (var a = 0; a < vowel.length; a++) {
    if (sentences[0] === vowel[a]) {
      count++
    }
  }
  sentences = sentences.slice(1)
  if (sentences.length === 0) {
    return count
  } else {
    return count + vowelsCounterRecursive(sentences)
  }
}

console.log(vowelsCounterRecursive('aldi suka makAn baksO')) // 8
console.log(vowelsCounterRecursive('Azizy')) // 2
console.log(vowelsCounterRecursive('awtIan')) // 3
