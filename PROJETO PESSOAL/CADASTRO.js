





class validator { 
    constructor() {
        this.validations = [
            'data-min-length',
        ]
    }
    // INICIA A VALIDAÇÃO DE TODOS OS CAMPOS
    validate(form) {

        // PEGAR OS INPUTS
        let inputs = form.getElementByTagName('input');

        // TRANSFORMO UMA HTMLCOLLECTION > ARRAY
        let inputsArray = [...inputs]

        // LOOP DOS INPUTS E VALIDAÇÃO DO QUE ELE ENCONTRAR
        inputsArray.forEach(function(input){

            // LOOP EM TODAS AS VALIDAÇÕES EXISTENTES
            for (let i = 0; this.validations.length > i; i++) {

                // VERIFICA SE A VALIDAÇÃO ATUAL EXISTE NO INPUT
                if (input.getAttribute(this.validations[i]) != null) {

                    // LIMPANDO A STRING PARA VIRAR UM METODO
                    let method = this.validations[i].replace('data-', '').replace('-', '');

                    //VALOR DO INPUT PARA MANIPULAR
                    let value = input.getAttribute(this.validations[i]);

                    //CHAMAR O METODO 
                    this[method](input, value);



                }
            }

        }, this);

    }

    //VERIFICA SE UM INPUT TEM UM NÚMERO MINIMO DE CARACTERES
    minlength(input, minValue) {
        let inputLength = input.value.length;
        let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres`;
        if (inputLength < minValue)
            this.printMessage(input, errorMessage);

    }
     
    // METODO PARA IMPRIMIR MENSAGEM DE ERRO NA TELA 
    printMessage(input, msg) {

        let template = document.querySelector('.error-validation').cloneNode(true);

        template.textContent = msg;

        let inputParent = input.parentNode;

        template.classList.remove('template');

        inputParent.appendChild('template');


    }


}
let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new validator();

// DISPARO DE VALIDAÇÕES

submit.addEventListener('click', function(e) {

    e.preventDefault();
   
    validator.validate(form);



});









