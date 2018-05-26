//[Exercises 4] Tantangan Array 3 (Array Join, Split, Slice, Splice, Sort)

//Menggunakan Built-in Function pada Array

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2() {
  input.splice(1, 1, "Roman Alamsyah Elsharawy")
  input.splice(2, 1, "Provinsi Bandar Lampung")
  input.splice(4, 1, "Pria")
  input.push("SMA Internasional Metro")
  console.log(input);
  var bio = input.slice(3, 4)
  var bioInput = bio[0].split("/")
  var bulan = bioInput[1];
  switch (bulan) {
    case '01':
    console.log('Januari');
    break;
    case '02':
    console.log('Februari');
    break;
    case '03':
    console.log('Maret');
    break;
    case '04':
    console.log('April');
    break;
    case '05':
    console.log('Mei');
    break;
    case '06':
    console.log('Juni');
    break;
    case '07':
    console.log('Juli');
    break;
    case '08':
    console.log('Agustus');
    break;
    case '09':
    console.log('September');
    break;
    case '10':
    console.log('Oktober');
    break;
    case '11':
    console.log('November');
    break;
    case '12':
    console.log('Desember');
    break;
    default:
    console.log('Masukkan bulan antara 1 - 12');
  }
  var sortBio = bioInput.slice(0)
  sortBio.sort(function(value1, value2) {
    return value2-value1
  });
  console.log(sortBio);
  var joinBio = bioInput.join('-');
  console.log(joinBio);
  console.log(input[1].slice(0, 14));
  
}

console.log(dataHandling2(input));