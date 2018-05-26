//[Exercises 3] Tantangan Array 2 (Melooping menggunakan Array)

//Melakukan Looping Data Array

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling() {
  var dataList = '';
  for (j = 0; j <= 3; j++) {
    var dataInput = '\n' + 'Nomor ID: ' + input[j][0] + '\n' + 'Nama Lengkap: ' + input[j][1] + '\n' + 'TTL: ' + input[j][2] + ' ' + input[j][3] + '\n' + 'Hobi: ' + input[j][4] + '\n';
    dataList = dataList + dataInput;
  }
  return dataList
}

console.log(dataHandling(input));

//
var list1 = 'Nomor ID: ' + input[0][0] + '\n' + 'Nama Lengkap: ' + input[0][1] + '\n' + 'TTL: ' + input[0][2] + ' ' + input[0][3] + '\n' + 'Hobi: ' + input[0][4] + '\n';
var list2 = 'Nomor ID: ' + input[1][0] + '\n' + 'Nama Lengkap: ' + input[1][1] + '\n' + 'TTL: ' + input[1][2] + ' ' + input[1][3] + '\n' + 'Hobi: ' + input[1][4] + '\n';
var list3 = 'Nomor ID: ' + input[2][0] + '\n' + 'Nama Lengkap: ' + input[2][1] + '\n' + 'TTL: ' + input[2][2] + ' ' + input[2][3] + '\n' + 'Hobi: ' + input[2][4] + '\n';
var list4 = 'Nomor ID: ' + input[3][0] + '\n' + 'Nama Lengkap: ' + input[3][1] + '\n' + 'TTL: ' + input[3][2] + ' ' + input[3][3] + '\n' + 'Hobi: ' + input[3][4] + '\n';

function dataHandling() {
  var dataList1 = list1 + '\n';
  var dataList2 = list2 + '\n';
  var dataList3 = list3 + '\n';
  var dataList4 = list4 + '\n';
  var dataInput = dataList1 + dataList2 + dataList3 + dataList4;
  return dataInput
}

console.log(dataHandling(input));