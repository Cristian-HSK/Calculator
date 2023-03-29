let controle = 1
let registro1
let registro2
let operador
const numeroVisor = document.getElementById("textovisor")
function checaSeOperador(teclaClicada){
    if(teclaClicada=="+" || teclaClicada=="-" || teclaClicada=="^" || teclaClicada=="x" || teclaClicada=="/" || teclaClicada=="%"){
        return true
    }
    else{
        return false
    }
}
function resetaVisor(){
    numeroVisor.innerHTML = "0"
}
function apagaDígito(){
    numeroVisor.innerHTML = numeroVisor.innerHTML.slice(0,-1);
    //snumeroVisor.innerHTML = "0"
    //numeroVisor.innerHTML[lenght(numeroVisor.innerHTML)] = ""
}
function escreverNumeroNoVisor(numero){
    if(numeroVisor.innerHTML.length>=14){
        window.alert("LIMITE DE NÚMEROS EXCEDIDO")
    }
    else{console.log(numeroVisor.length)
        if(numeroVisor.innerHTML==0){
            numeroVisor.innerHTML=numero
        }
        else{
            numeroVisor.innerHTML=numeroVisor.innerHTML+numero
        }
    }
}
function quandoTeclaPressionada(tecla){
    if(checaSeOperador(tecla)){
        registro1 = numeroVisor.innerHTML
        console.log(registro1)
        operador = tecla
        resetaVisor()
        // console.log(registro1)
        // console.log(tecla)
    }
    else if(tecla=="C"){
        resetaVisor()
    }
    else if(tecla=="⌫"){
        if(numeroVisor.innerHTML.length>1){
            apagaDígito()
        }
        else{
            resetaVisor()
        }
    }
    else if(tecla=="="){
        registro2 = numeroVisor.innerHTML
        if(operador=="+"){
            numeroVisor.innerHTML = parseFloat(registro1) + parseFloat(registro2)
        }
        else if(operador=="-"){
            numeroVisor.innerHTML = parseFloat(registro1) - parseFloat(registro2)
        }
        else if(operador=="x"){
            numeroVisor.innerHTML = parseFloat(registro1) * parseFloat(registro2)
        }
        else if(operador=="/"){
            numeroVisor.innerHTML = parseFloat(registro1) / parseFloat(registro2)
        }
        else if(operador=="^"){
            numeroVisor.innerHTML = Math.pow(parseFloat(registro1), parseFloat(registro2))
        }
        else if(operador=="%"){
            numeroVisor.innerHTML = (parseFloat(registro1) * parseFloat(registro2)) / 100
        }
        // console.log(tecla)
        //console.log(registro2)
    }
    else{
        escreverNumeroNoVisor(tecla)
        //console.log(tecla)
    }
}
resetaVisor()