//[Exercises 2] Tantangan Array 1 (Mengakses Nilai dalam Array)

//Mengakses Nilai Dalam Array

var kata;

function balikString(kata) {
  var result = '';
  var panjang = kata.length - 1;
  for (i = panjang; i >= 0; i--){
    result = result + kata[i];
  }
  //console.log(result);
  return result
}

console.log(balikString('qwerty'));