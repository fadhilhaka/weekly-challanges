
/**
Mini Sudoku Board
=================
Implementasikan function `miniSudokuBoard` untuk membuat
papan 3x3 yang tipe data-nya berupa Array.
`miniSudokuBoard` akan menerima satu parameter yaitu `text`
yang tipe data-nya berupa String.

# Contoh I/O
- Input: '290500007'
  Output: [ ['2', '9', '0'], ['5', '0', '0'], ['0', '0', '7] ]
  
- Input: '302609005'
  Output: [ ['3', '0', '2'], ['6', '0', '9'], ['0', '0', '5'] ]

# Kondisi khusus
- Jika parameter adalah string kosong, kembalikan nilai 'Empty board'
- Jika panjang dari string tidak sama dengan 9, kembalikan nilai 'Invalid input'

*/

function miniSudokuBoard (text) {
  // Code here
  var hasilA = []
  var hasilB = []
  var hasilC = []
  for (var a = 0; a < text.length; a++) {
    if (a < 3) {
      hasilA.push(text[a])
    } else if (a < 3 || a < 6) {
      hasilB.push(text[a])
    } else if (a < 6 || a < 9) {
      hasilC.push(text[a])
    }
  }
  var hasilTotal = []
  hasilTotal.push(hasilA)
  hasilTotal.push(hasilB)
  hasilTotal.push(hasilC)
  if (text.length < 1) {
    return 'Empty board'
  } else if (text.length !== 9) {
    return 'Invalid input'
  } else {
    return hasilTotal
  }
}

console.log(miniSudokuBoard('005030081'));
// /[ [ '0', '0', '5' ], [ '0', '3', '0' ], [ '0', '8', '1' ] ]
console.log(miniSudokuBoard('105802000'));
// [ [ '1', '0', '5' ], [ '8', '0', '2' ], [ '0', '0', '0' ] ]
console.log(miniSudokuBoard('608730000'));
// [ [ '6', '0', '8' ], [ '7', '3', '0' ], [ '0', '0', '0' ] ]
console.log(miniSudokuBoard('096040001'));
// [ [ '0', '9', '6' ], [ '0', '4', '0' ], [ '0', '0', '1' ] ]
console.log(miniSudokuBoard('87109'));
// Invalid input
console.log(miniSudokuBoard(''));
// Empty board
