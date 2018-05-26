//[Exercises 13] Toko X

//Logic Challenge - Toko X

function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
    // you can only write your code here!
    if (shoppers.length === 0) {
      return shoppers
    }
    var hasil = []
    var pembeli = []
    var totalProduk = []
    for (var x = 0; x < listBarang[0].length; x++) {
      pembeli.push([])
      totalProduk.push([])
    }
    for (var i = 0; i < shoppers.length; i++) {
      for (var j = 0; j < listBarang[0].length; j++){
        if (shoppers[i].product === listBarang[j][0]) {
          if (shoppers[i].amount <= listBarang[j][2]) {
            listBarang[j].splice(2, 1, (listBarang[j][2] - shoppers[i].amount))
            if (listBarang[j][2] >= 0) {
              pembeli[j].push(shoppers[i].name)
              totalProduk[j].push(shoppers[i].amount)
            }
          }
        }
      }
    }
    
    var totalS = 0
    for (var a = 0; a < totalProduk[0].length; a++) {
      totalS += totalProduk[0][a]
    }
    var totalZ = 0
    for (var b = 0; b < totalProduk[1].length; b++) {
      totalZ += totalProduk[1][b]
    }
    var totalU = 0
    for (var c = 0; c < totalProduk[2].length; c++) {
      totalU += totalProduk[2][c]
    }
    
    var stacattu = {
      product: listBarang[0][0],
      shoppers: pembeli[0],
      leftOver: listBarang[0][2],
      totalProfit: totalS * listBarang[0][1]
    }
    hasil.push(stacattu)
    var zoro = {
      product: listBarang[1][0],
      shoppers: pembeli[1],
      leftOver: listBarang[1][2],
      totalProfit: totalZ * listBarang[1][1]
    }
    hasil.push(zoro)
    var uniklooh = {
      product: listBarang[2][0],
      shoppers: pembeli[2],
      leftOver: listBarang[2][2],
      totalProfit: totalU * listBarang[2][1]
    }
    hasil.push(uniklooh)
  
    return hasil
  }
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]