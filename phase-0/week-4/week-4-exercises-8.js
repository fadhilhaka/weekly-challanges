//[Exercises 8] Urutkan Abjad

//Logic Challenge - Mengurutkan Abjad

function urutkanAbjad(str) {
    // you can only write your code here!
    var alphabet = 'abcdefghiklmnopqrstuvwxyz'
    var sortHuruf = ''
    var huruf = []
    for (var i = 0; i < str.length; i++) {
      sortHuruf = alphabet.indexOf(str[i])
      huruf.push(sortHuruf)
    }
    huruf.sort(function(value1, value2) { return value1 > value2 });
    
    var sortKata = ''
    for (var j = 0; j < huruf.length; j++) {
      sortKata = sortKata + alphabet[huruf[j]]
    }
    return sortKata
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'