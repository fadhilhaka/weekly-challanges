//[Exercises 12] Shopping Time!

//Logic Challenge - Shopping Time!

function shoppingTime(memberId, money) {
    // you can only write your code here!
    if (memberId === '' || memberId === undefined) {
      return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    } else if (money < 50000) {
      return 'Mohon maaf, uang tidak cukup'
    }
    var saleItem = ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone']
    var hargaSale = [1500000, 500000, 250000, 175000, 50000]
    var cart = ''
    var listPurchased = []
    var changeMoney = 0
    var hasil = []
    var myObj = {
      memberId: memberId,
      money: money
    }

    for (var i = 0; i < saleItem.length; i++) {
      if (money >= hargaSale[i]) {
        cart = saleItem[i]
        listPurchased.push(cart)
        money = money - hargaSale[i] //-
      }
    }
    myObj.listPurchased = listPurchased;
    myObj.changeMoney = money;

    hasil.push(myObj)
    return hasil
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja