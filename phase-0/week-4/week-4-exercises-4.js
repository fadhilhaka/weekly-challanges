//[Exercises 4] Cari Modus

//Logic Challenge - Mencari Modus

function  cariModus(arr) {
  //periksa bila semua angka berbeda atau  bila semua angka sama
  var counterX = 0
  var counterY = 0
  for (var x = 0; x < arr.length; x++) {
    for(var y = 0; y < arr.length; y++) {
      //hitung jumlah perbandingan angka sama
      if (arr[x] == arr[y]) {
        counterX++
      //hitung jumlah perbandingan angka tidak sama
      } else if (arr[x] != arr[y]) {
        counterY++
      }
      //jika jumlah perbandingan angka sama sama dengan arr.length*(arr.length-1) maka semua angka sama, tunjukkan -1
      if (counterX == arr.length*(arr.length-1)) {
      return -1
      //jika jumlah perbandingan angka tidak sama sama dengan arr.length*(arr.length-1) maka semua angka tidak sama, tunjukkan -1
      } else if (counterY == arr.length*(arr.length-1)) {
      return -1
      }
    }
  }
  //sort 'arr'
  arr.sort(function(value1, value2) { return value1 > value2 });
  //periksa angka berbeda pada 'arr'
  var container = []
  var current = null
  var counter = 0
  //bandingkan tiap index 'arr' dengan null atau ''
  for (var i = 0; i < arr.length; i++) {
    //bila tidak sama definisikan index 'arr' sebagai 'current' lalu mulai hitungan dengan mendefinisikan 'counter' sebagai 1
    if (arr[i] != current) {
      current = arr[i]
      counter = 1
    //bila index 'arr' telah terdefinisi sebagai 'current', maka masukkan ke dalam array 'container' bersama dengan jumlah 'counter'
    } else {
      counter++
      container.push([arr[i], counter])
    }
  }
  //periksa tiap index 'container' dengan jumlah 'counter' paling besar 
  var palingBesar = container[0][1]
  for (var j = 0; j < container.length; j++) {
    //bila index 'container' memiliki jumlah 'counter' paling besar, tunukkan index tersebut
    if (container[j][1] > palingBesar || (container.length > 1)) {
      palingBesar = container[j][1]
      return container[j][0]
    } else if (container.length === 1) {
      return container[j][0]
    } 
  }
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 6, 10, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1