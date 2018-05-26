//cherry pick

function panjangO(substring,string) {
  var arr = [], i = -1;
  //bila index huruf yg dicari lebih besar dari atau sama dengan 0 loop terus berjalan
  while ((i = string.indexOf(substring, i+1)) >= 0) {
    //syntax indexOf ==> str.indexOf(searchValue[, fromIndex])
    //console.log(i, i+1, string.indexOf(substring, i+1))
  arr.push(i);
  }
  return arr;
}
console.log(panjangO('o', 'storyo'));