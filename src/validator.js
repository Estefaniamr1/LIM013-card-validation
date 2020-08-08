const validator = {

    isValid: function (cardNumber) {
        let carray = cardNumber.split('');
        if (carray.length >16) {
            return false;
        }
        carray.reverse();
        let sum = 0;
        for (let i = 0; i < carray.length; i++) {
            let tmp = parseInt(carray[i]);
            if ((i % 2) != 0) {
                tmp *= 2;
                if (tmp > 9)
                tmp -= 9;
            }
            sum += tmp;
        }
        if ((sum % 10) == 0) {
            return true;
        }
        else {
            return false;
        }
    },
    maskify: (number) => {
        var valor = ''
        if (number.length > 4) {
            for (let i = 0; i < number.length - 4; i++) {
                valor = valor + '#'
            }
            return valor + number.substring(number.length - 4, number.length)
        }
    }
}

export default validator;

//maskify: function(number){
    //let cipher = number.replace(/.(?=.{4,}$)/g, '#');
    //return cipher;
    //}