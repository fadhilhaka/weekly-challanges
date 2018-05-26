/*
di data structure, yang harus student achieve:
- forming sebuah array berisikan object
- bisa mengakses isi terdalam dari array berisikan object
- bisa melakukan operasi filtering / grouping data
*/

/*
---------------
Students Report
---------------
PROBLEM
=======
Diberikan sebuah function bernama getReport.
Function akan menerima sebuah parameter array of object dengan format:
[
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  ...
]
Data di atas merupakan campuran seluruh nilai student dari kelas manapun.
Function akan memproses array of object tersebut untuk membuat sebuah report dalam bentuk array of object dengan format:
[
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  ...
]
Data yang diharapkan merupakan akumulasi student yang lulus dan tidak dari setiap kelas.
Standard kelulusan adalah minimum 70.
*/

///////////////////////////////////
function getReport(studentGrades) {
  // only code here..
  studentGrades.sort(function(value1, value2) { return value1.classCode > value2.classCode });
  var current = ''
  var uniqueClass = []
  for (var a = 0; a < studentGrades.length; a++) {
    if (studentGrades[a].classCode !== current) {
      current = studentGrades[a].classCode
      uniqueClass.push(studentGrades[a].classCode)
    }
  }
  var result = []
  for (var b = 0; b < uniqueClass.length; b++) {
    var myObj = {
      classCode: uniqueClass[b],
      passed: [],
      failed: [],
    }
    result.push(myObj)
  }
  for (var c = 0; c < studentGrades.length; c++) {
    for (var d = 0; d < result.length; d++) {
      if (studentGrades[c].classCode === result[d].classCode) {
        if (studentGrades[c].score >= 70) {
          result[d].passed.push(studentGrades[c].name)
        } else {
          result[d].failed.push(studentGrades[c].name)
        }
      }
    }
  }
  return result
}
////////////////////////////////////
function getReport(studentGrades) {
  // only code here..
  var myObjA = {}
  var myObjB = {}
  var myObjC = {}
  var myArr = []
  var passed = [[],[],[]]
  var failed = [[],[],[]]

  for (var a = 0; a < studentGrades.length; a++) {
    if (studentGrades[a].classCode === 'A') {
      if (studentGrades[a].score >= 70) {
        passed[0].push(studentGrades[a].name)
      } else {
        failed[0].push(studentGrades[a].name)
      }
      myObjA.classCode = 'A',
      myObjA.passed = passed[0],
      myObjA.failed = failed[0];
    }
  }
  myArr.push(myObjA)
  for (var a = 0; a < studentGrades.length; a++) {
    if (studentGrades[a].classCode === 'B') {
      if (studentGrades[a].score >= 70) {
        passed[1].push(studentGrades[a].name)
      } else {
        failed[1].push(studentGrades[a].name)
      }
      myObjB.classCode = 'B',
      myObjB.passed = passed[1],
      myObjB.failed = failed[1];
    }
  }
  myArr.push(myObjB)
  for (var a = 0; a < studentGrades.length; a++) {
    if (studentGrades[a].classCode === 'C') {
      if (studentGrades[a].score >= 70) {
        passed[2].push(studentGrades[a].name)
      } else {
        failed[2].push(studentGrades[a].name)
      }
      myObjC.classCode = 'C',
      myObjC.passed = passed[2],
      myObjC.failed = failed[2];
    }
  }
  myArr.push(myObjC)
  
  return myArr
}
  
var grades1 = [
  { name: 'John', score: 80, classCode: 'A' },
  { name: 'Mike', score: 60, classCode: 'B' },
  { name: 'Budi', score: 70, classCode: 'C' },
  { name: 'Siti', score: 50, classCode: 'A' },
  { name: 'Aaron', score: 10, classCode: 'A' },
  { name: 'Arthur', score: 10, classCode: 'C' },
  { name: 'Osass', score: 10, classCode: 'B' },
  { name: 'Yolo', score: 90, classCode: 'C' },
];

console.log(getReport(grades1));

/*
[
  { classCode: 'A', passed: [ 'John' ], failed: [ 'Siti', 'Aaron' ] },
  { classCode: 'B', passed: [], failed: [ 'Mike', 'Osass' ] },
  { classCode: 'C', passed: [ 'Budi', 'Yolo' ], failed: [ 'Arthur' ] },
]
*/