//[Exercises 15] Password Generator

//Logic Challenge - Password Generator

function changeVocals (str) {
    //code di sini
    var kata = ''
    var vokal = []
    var alpha = 'abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (var i = 0; i < str.length; i++) {
      for (var j = 0; j < alpha.length; j++) {
        if (str[i] === alpha[j]) {
          kata = alpha[j]
          if (str[i] === 'a' || str[i] === 'e'|| str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U' ) {
            kata = alpha[j+1]
          }
          vokal.push(kata)
        }  
      }
    }
    return vokal
  }
  //console.log(changeVocals (str))
  
  function reverseWord (str) {
    //code di sini
    var kataReverse = ''
    var reverse = changeVocals(str);
    for (var k = reverse.length-1; k >= 0; k--) {
      kataReverse = kataReverse + reverse[k]
    }
    return kataReverse
  }
  //console.log(reverseWord(str))
  
  function setLowerUpperCase (str) {
    //code di sini
    var kataSetCase = ''
    var setCase = reverseWord(str);
    for (var l = 0; l < setCase.length; l++) {
      kata = setCase.toUpperCase();
      if (setCase[l] === kata[l]) {
        kataSetCase = kataSetCase + kata[l].toLowerCase();
      } else {
        kataSetCase = kataSetCase + kata[l]
      }
    }
    return kataSetCase
  }
  //console.log(setLowerUpperCase(str))
  
  function removeSpaces (str) {
    //code di sini
    var kataSpasi = ''
    var spasi = setLowerUpperCase(str);
    for (i = 0; i < spasi.length; i++) {
      if (spasi[i] !== ' ') {
        kataSpasi = kataSpasi + spasi[i]
      }
    }
    return kataSpasi
  }
  //console.log(removeSpaces(str))
  
  function passwordGenerator (name) {
    //code di sini
    //removeSpaces(str) diganti dengan removeSpaces(name)
    var password = removeSpaces(name);
    if (password.length <=4) {
      return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    return password
  }
  //console.log(passwordGenerator ('Sergei Dragunov'))
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'