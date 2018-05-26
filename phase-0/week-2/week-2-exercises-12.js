//[Exercises 12] Konversi Menit

//Logic Challenge - Konversi Menit

//STORE 'menit' without any value
//STORE 'jam' without any value
//STORE 'menitSisa' without any value
//CALCULATE menit/60 then round it down
//SET 'jam' value with calculation result
//CALCULATE menit % 60
//SET 'menitSisa' value with calculation result
//IF 'menitSisa' is not 0
//  IF menit >= 0 && menit < 10
//    DISPLAY '0' + ':' + '0' + menit
//  ELSE IF menit >= 10 && menit < 60
//    DISPLAY '0' + ':' + menit
//  ELSE IF menit > 60 && menitSisa < 10
//    DISPLAY jam + ':' + '0' + menitSisa
//  ELSE IF menit > 60 && menitSisa >= 10
//    DISPLAY jam + ':' + menitSisa
//ELSE
//  DISPLAY jam + ':' + '00'

function konversiMenit(menit) {
  var jam = Math.floor(menit/60);
  var menitSisa = menit % 60;
  if (menit % 60) {
    if ((menit >= 0) && (menit < 10)) {
      return '0' + ':' + '0' + menit;
    } else if ((menit >= 10) && (menit < 60)) {
      return '0' + ':' + menit;
    } else if ((menit > 60) && (menitSisa < 10)) {
      return jam + ':' + '0' + menitSisa;
    } else if ((menit > 60) && (menitSisa >= 10)) {
      return jam + ':' + menitSisa;
    }
  } else {
    return jam + ':' + '00';
  }
}