//[Exercises 15] Mengelompokkan Hewan

//Logic Challenge - Mengelompokkan Hewan

function groupAnimals(animals) {
  // you can only write your code here!
  var hurufAwal = []
  var containerKata = []
  var container = []
  //sort animals
  animals.sort(function(value1, value2) {return value1 > value2 });
  //Ambil huruf awal dari tiap kata
  for (i = 0; i < animals.length; i++) {
    hurufAwal.push(animals[i][0])
  }
  //mengelompokkan variasi karakter huruf awal dalam satu array
  var current = null; //null bisa diganti dengan ''
  var counter = 0;
  for (var j = 0; j < animals.length; j++) {
    if (hurufAwal[j] != current) {
      if (counter > 0) {
        container.push(current)
      }
    current = hurufAwal[j];
    counter = 1;
    }
  }
  if (counter > 0) {
    container.push(current)
  }
  //membuat array kosong sesuai dengan jumlah variasi karakter huruf awal
  for (k = 0; k < container.length; k++) {
    containerKata.push([])
  }
  //masukkan kata dalam array animals ke dalam array containerKata sesuai dengan letak karakter huruf awal
  for (l = 0; l < animals.length; l++) {
    for (m = 0; m < container.length; m++) {
      if (animals[l][0] == container[m]) {
      containerKata[m].push(animals[l])
      }
    }
  }
  return containerKata;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]