//objetc

var p = {
  p1: 'value1'
};

p.p2 = 'value2'

for (var p1 in p) {
  if (p.p1) {
    console.log(p1 + ' -> ' + p[p1])
  }
  if (p.p2 === 'value2') {
    p.p3 = 'value3'
  }
}
//var keys = Object.keys(p);
//console.log(Object.keys(p))
//delete p.p1

console.log(p)