//balik angka

var x = ''
var y = ''
var z = 12345
var current = []

while (z > 10) {
  x = z % 10
  z = Math.floor(z / 10)
  //untuk palindrom
  //y = y*10 + x
  current.push(x)
  console.log(x, y, z)
}
  current.push(z)
  console.log(current)