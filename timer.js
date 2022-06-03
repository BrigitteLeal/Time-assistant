//TIMER
let secondsSpan = document.querySelector("#seconds"); // trayendo el valor de 00 por defecto
let minutesSpan = document.querySelector("#minutes");
let hoursSpan = document.querySelector("#hours");
let secondsValue = secondsSpan.value;
let minutesValue = minutesSpan.value;
let hoursValue = hoursSpan.value;
let currentInterval;
let currentButtonTimer;
let secondsInput;
let minutesInput;
let hoursInput;
let secondsInputValue;
let minutesInputValue;
let hoursInputValue;
let minutes;
let seconds;
let hours;

const startTimer = () => {
    event.preventDefault(); // método cancela el evento si es cancelable, lo que significa que la acción predeterminada que pertenece al evento no ocurrirá.
    secondsInput = document.querySelector("#secondsInput");
    minutesInput = document.querySelector("#minutesInput");
    hoursInput = document.querySelector("#hoursInput");
    secondsInputValue = secondsInput.value;
    minutesInputValue = minutesInput.value;
    hoursInputValue = hoursInput.value;
    seconds = parseInt(secondsInputValue);
    minutes = parseInt(minutesInputValue); //se llama al input con el atributo name junto a su valor al hacer click en el objetivo (buton). Como el valor introducido en el input es un string se parsea a numero     
    hours = parseInt(hoursInputValue);
    validateNumber()
    if(hours < 1 && minutes < 1 && seconds < 1){
        alert('Debe agregar al menos un valor en los campos')
    }else{
        console.log(hours, minutes, seconds);
        secondsSpan.textContent = seconds;//establecer textContent en un nodo elimina todos sus hijos y los reemplaza con un solo nodo de texto con el valor dado.
        minutesSpan.textContent = minutes; //cambia numero 00 por defecto del timer a el numero colocado en el input
        hoursSpan.textContent = hours; 
        secondsValue = seconds; // el valor de input se igual al timer
        minutesValue = minutes;
        hoursValue = hours;
        currentButtonTimer = event.target; 
        currentButtonTimer.disabled = true; //.disabled es un valor booleano que indica si el control está desactivado. Si está deshabilitado, no acepta clics.
        
        currentInterval = setInterval(() => { // -1 59:59
            secondsValue -= 1;
            if (secondsValue === -1) {
                secondsValue = 59;
                minutesValue -= 1;
                if (minutesValue === -1) {
                    minutesValue = 59;
                    hoursValue -= 1;
                } 
            }
            if (hoursValue === 00 &&  minutesValue === 00 && secondsValue === 00) {
                console.log(hoursValue, minutesValue, secondsValue);
                clearInterval(currentInterval);
                setTimeout(() => {
                    alert("Terminado");
                }, 500);   
            }
            hoursSpan.textContent = ("0" + hoursValue).slice(-2);
            minutesSpan.textContent = ("0" + minutesValue).slice(-2);
            secondsSpan.textContent = ("0" + secondsValue).slice(-2);
        }, 1000);
    }
   
}
const resetTimer = () => {
    clearInterval(currentInterval); 
    secondsValue = 0;
    secondsSpan.innerHTML = "00";
    minutesValue = 0;
    minutesSpan.innerHTML = "00";
    hoursValue = 0;
    hoursSpan.innerHTML = "00";
    console.log(minutesValue, minutesSpan);
}

const validateNumber = () => {
    if (Number.isNaN(seconds)){
        seconds = 0;
    }
    if (Number.isNaN(minutes)){
        minutes = 0;
    }
    if (Number.isNaN(hours)){
        hours = 0;
    }
}