const validator = {
  
  isValid: function (cardNumber){
  cardNumber = cardNumber.split(' ').join("");
  if (cardNumber.length !== 16) {
      return false;
  }
  var carray = new Array();
  for (var i = 0; i < cardNumber.length; i++) {
      console.log (carray)
  }
  carray.reverse();
  var sum = 0;
  for (var i = 0; i < carray.length; i++) {
      var tmp = carray[i];
      if ((i % 2) != 0) {
          tmp *= 2;
          if (tmp > 9) {
              tmp -= 9;
          }
      }
      sum += tmp;
  }
  if ((sum % 10) == 0){
      return true;
  }
  else{
      return false;
  }
}, 
maskify: function(number){
    let cipher = number.replace(/.(?=.{4,}$)/g, '#');
    return cipher;
    }
    }

export default validator;
