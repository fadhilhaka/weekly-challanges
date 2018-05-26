/* Given an array of one's and zero's convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11 */

//
function binaryArrayToNumber(arr) {
  Math.floor(arr.join(''), 2);
  //Math.floor(arr, radix) radix => base number, biner has a base of 2
}
//
const binaryArrayToNumber = arr => {
  // your code
  var result = 0
  var arrResult = []
  for (var a = 0; a < arr.length; a++) {
    if (arr[a] === 1) {
      var end = Math.pow(2, (arr.length-1)-a)
      arrResult.push(end)
    }
  }
  for (var b = 0; b < arrResult.length; b++) {
    result += arrResult[b]
  }
  return result
};

describe("One's and Zero's", () => {

  it("Example tests", () => {
      Test.assertEquals(binaryArrayToNumber([0,0,0,1]), 1);
      Test.assertEquals(binaryArrayToNumber([0,0,1,0]), 2);
      Test.assertEquals(binaryArrayToNumber([1,1,1,1]), 15);
      Test.assertEquals(binaryArrayToNumber([0,1,1,0]), 6);
  });

});