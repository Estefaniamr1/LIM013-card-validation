import validator from './validator.js';

let number;
let valid= document.getElementById('validarNumber');
valid.addEventListener('click',validarNumber);
function validarNumber(){


    number= document.getElementById('numberCard').value;
    let c1= validator.isValid(number);
    let c2= validator.maskify(number);
    
    if (c1==true) {
        document.getElementById("resultado").textContent="Tarjeta Valida"+c2;
    }
    else {
        document.getElementById("resultado").textContent="Tarjeta Invalida"+c2;
    }
    
}
