//[Exercises 2] Naik Angkot

//Logic Challenge - Naik Angkot

function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var hasil = []
  for (var a = 0; a < arrPenumpang.length; a++) {
    var myObj = {}
    myObj.penumpang = arrPenumpang[a][0]
    myObj.naikDari = arrPenumpang[a][1]
    myObj.tujuan = arrPenumpang[a][2]
    if (rute.indexOf(arrPenumpang[a][2])-rute.indexOf(arrPenumpang[a][1]) > 0) {
      myObj.bayar = (rute.indexOf(arrPenumpang[a][2])-rute.indexOf(arrPenumpang[a][1]))*2000
    } else {
      myObj.bayar = (rute.indexOf(arrPenumpang[a][1])-rute.indexOf(arrPenumpang[a][2]))*2000
    }
    // Ngga pake indexOf
    // for (var b = 0; b < rute.length; b++) {
    //   if (rute[b] === arrPenumpang[a][1]) {
    //     var naikDari = b
    //   } else if (rute[b] === arrPenumpang[a][2]) {
    //     var tujuan = b
    //   }
    // }
    // if (tujuan - naikDari > 0) {
    //   myObj.bayar = (tujuan - naikDari)*2000
    // } else {
    //   myObj.bayar = (naikDari - tujuan)*2000
    // }
    hasil.push(myObj)
  }
  return hasil
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]