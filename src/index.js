import validator from './validator.js';

let cnumber;
let valid= document.getElementById('validarNumber');
valid.addEventListener('click',validarNumber);function validarNumber(){


    cnumber = document.getElementById('numberCard').value;
    let c1= validator.isValid (cnumber);
    let c2= validator.maskify(cnumber);
    console.log (c1);
    console.log (c2);
}
