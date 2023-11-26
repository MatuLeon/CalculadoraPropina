
let valorCuenta = 0
let comensalesNum = 1
let propina = 0
let cuenta = document.getElementById("cuenta");
let comensales = document.getElementById("comensales");
let botonPropina = document.querySelectorAll(".btn-Propina");
let personalizarPropina = document.getElementById("personalizar");
let propinaPersona = document.getElementById("propinaPersona");
let cuentaTotal = document.getElementById("cuentaTotal");
let reset = document.getElementById('reset');




function validaCuenta() {
    cuenta.addEventListener('input', () => {
        let validation = /^[0-9,$]*$/
        if(!validation.test(cuenta.value)){
            
        }else{
            valorCuenta = parseFloat(cuenta.value)
            totalCuenta()
        }

    })
}

function click_Btn() {
    botonPropina.forEach(btn => {
        btn.addEventListener('click', porcentajePropina => {
            changeColor()
            propina = Number(porcentajePropina.target.innerText.slice(0, -1))
            btn.classList.add('btn-Propina_select')
            totalCuenta()
        })
    })
}

function changeColor(){
    botonPropina.forEach(btn =>{
        btn.classList.remove('btn-Propina_select')
    })
}


function numComensales() {
    comensales.addEventListener('input', () => {
        let validation = /^[0-9,$]*$/
        if(!validation.test(comensales.value)){

        }else{
            comensalesNum = parseFloat(comensales.value)
            totalCuenta()
        }
    })
}

function personalizar_Propina() {
    personalizarPropina.addEventListener('input', () => {
        let validation = /^[0-9,$]*$/
        if(!validation.test(personalizarPropina.value)){
            document.getElementById('messageError').className = 'messageError'
            document.getElementById('messageError').textContent = 'Número no valido'
            
        }else{
            document.getElementById('messageError').className = 'messageErrorDisabled';
            document.getElementById('messageError').textContent = ''
            propina = parseFloat(personalizarPropina.value)
            totalCuenta()
        }
    })
}

function reiniciarCuenta() {
    reset.addEventListener('click', () => {
        valorCuenta = 0
        comensalesNum = 1
        propina = 0
        cuenta.value = 0
        comensales.value = 0
        totalCuenta()
    })
}

function totalCuenta() {
    propinaPersona.innerText = '$' +((valorCuenta * (propina / 100)) / comensalesNum).toFixed(2);
    cuentaTotal.innerText = '$' +((valorCuenta * (1 + propina / 100)) / comensalesNum).toFixed(2);
}

validaCuenta();
click_Btn();
numComensales();
personalizar_Propina();
reiniciarCuenta()



