let mainScreen = document.querySelector("#prin"); 
let secScreen = document.querySelector("#sub");
console.log(mainScreen.id)

let primerNumero = "";
let segundoNumero = "";

; //set 0 as display difault;
mainScreen.textContent = primerNumero; 
let listo = true; //flag for new entries.


let numButtons = document.querySelectorAll(".num");

numButtons.forEach(button => {
    let input = button.id;
    button.addEventListener("click", (button) => {
        console.log(input);
        inputNum(input);
    })
});

let ceButton = document.querySelector("#CE");

ceButton.addEventListener("click", () => clearError());

function clearError(){
    mainScreen.textContent ="";
}


function inputNum(num){
    if (listo == true){
        primerNumero ="";
        
        listo = false;
    }

    primerNumero += num;
    mainScreen.textContent = primerNumero;
}

function setSeg(op){
    
    if(segundoNumero!=""){
        operation(operator,segundoNumero,primerNumero);
        segundoNumero = resultado;
    }else{
    segundoNumero = primerNumero
    }
    secScreen.textContent = segundoNumero + " " + op;
    primerNumero = "";
    mainScreen.textContent = primerNumero;

}

operator = "";

let opButtons = document.querySelectorAll(".op");


opButtons.forEach(button => {

    let op = button.id;

    button.addEventListener("click", () => {


        
        
        
        console.log(op);
        setSeg(op); 
        operator =op;
        
    
    })
});

let resultado;

function operation(op, num1, num2){
    console.log("operacion")
   switch (op){
    case "+" :
        resultado = sum(num1,num2);
        break;
    case "-" :
        resultado = sub(num1,num2);
        break;
    case "x" :
        resultado = multiply(num1,num2);
        break;
    case "/" :
        resultado = divide(num1,num2);
        break;
   }
}


function sum(num1, num2){
    return Number(num1)+Number(num2);
}

function sub(num1, num2){
    return num1-num2;
}

function multiply(num1, num2){
    return num1*num2;
}
function divide(num1,num2){
    if(num2==0){
        return "ERROR"
    }
    return num1/num2;
}


    
let eqButton = document.querySelector("#equal");

eqButton.addEventListener("click", () =>{

    console.log("si + " + operator)
    secScreen.textContent =segundoNumero  + " " + operator + " " + primerNumero ;
    operation(operator,segundoNumero,primerNumero);
    mainScreen.textContent = resultado;
    primerNumero = resultado;
    segundoNumero = "";
    //secScreen.textContent = primerNumero + " " + operator + " " + segundoNumero;



})

function allClear(){
    primerNumero ="";
    segundoNumero="";
    mainScreen.textContent =primerNumero;
    secScreen.textContent =segundoNumero;
    
}

let acButton = document.querySelector('#AC');
acButton.addEventListener("click",() => allClear());










