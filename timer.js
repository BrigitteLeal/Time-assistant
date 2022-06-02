//TIMER
let secondsSpan = document.querySelector("#seconds"); // trayendo el valor de 00 por defecto
let minutesSpan = document.querySelector("#minutes");
let secondsValue = secondsSpan.value;
let minutesValue = minutesSpan.value;
let currentInterval;
let currentButtonTimer;

function startTimer() {
    //  event.preventDefault(); // método cancela el evento si es cancelable, lo que significa que la acción predeterminada que pertenece al evento no ocurrirá.
    let secondsInput = document.querySelector("#secondsInput");
    let minutesInput = document.querySelector("#minutesInput");
    let secondsInputValue = secondsInput.value;
    let minutesInputValue = minutesInput.value;
    const minutes = parseInt(minutesInputValue); //se llama al input con el atributo name junto a su valor al hacer click en el objetivo (buton). Como el valor introducido en el input es un string se parsea a numero     
    const seconds = parseInt(secondsInputValue);
    console.log(minutes, seconds);
    minutesSpan.textContent = minutes; //establecer textContent en un nodo elimina todos sus hijos y los reemplaza con un solo nodo de texto con el valor dado.
    secondsSpan.textContent = seconds; //cambia numero 00 por defecto del timer a el numero colocado en el input
    secondsValue = seconds; // el valor de input se igual al timer
    minutesValue = minutes;
    currentButtonTimer = event.target; 
    currentButtonTimer.disabled = true; //.disabled es un valor booleano que indica si el control está desactivado. Si está deshabilitado, no acepta clics.
    currentInterval = setInterval(() => {
        secondsValue -= 1;
        if (secondsValue === -1) {
            secondsValue = 59;
            minutesValue -= 1;
        }
        if (minutesValue === 0 && secondsValue === 0) {
            // const container = document.querySelector(".hero--time");
            // const title = document.createElement("h2");
            // title.textContent = "El timer ha terminado";
            // container.appendChild(title);
            clearInterval(currentInterval);
            setTimeout(() => {
                alert("Terminado");
            }, 500);   
        }
        minutesSpan.textContent = ("0" + minutesValue).slice(-2);
        secondsSpan.textContent = ("0" + secondsValue).slice(-2);
    }, 10);
}
// function stopTimer(){
//     if (currentButtonTimer){
//         currentButtonTimer.disabled = false;
//     }
//     clearInterval(currentInterval);  
// }
function resetTimer(){
    clearInterval(currentInterval); 
    secondsValue = 0;
    secondsSpan.innerHTML = "00";
    minutesValue = 0;
    minutesSpan.innerHTML = "00";
    console.log(minutesValue, minutesSpan)
    // hoursValue = 0;
    // hoursSpan.textContent = "00";
}




//transformar en 00 a casilla vacia
//alert cuando input este vacio
//horas