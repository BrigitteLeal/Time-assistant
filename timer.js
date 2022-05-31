// let secondsInput = document.querySelector("#secondsInput");
// let minutesInput = document.querySelector("#minutesInput");
// let secondsInputValue = secondsInput.value;
// let minutesInputValue = minutesInput.value;
let secondsSpan = document.querySelector("#seconds");
let minutesSpan = document.querySelector("#minutes");
let secondsValue = secondsSpan.value;
let minutesValue = minutesSpan.value;


let currentInterval;
let currentButtonTimer;

function startTimer() {
    event.preventDefault();
    const minutes = parseInt(event.target.minutes.value);
    const seconds = parseInt(event.target.seconds.value);
    minutesSpan.textContent = minutes;
    secondsSpan.textContent = seconds;
    secondsValue = seconds;
    minutesValue = minutes;
    currentButtonTimer = event.target;
    currentButtonTimer.disabled = true;
    currentInterval = setInterval(() => {
        secondsValue -= 1;
        if (secondsValue === -1) {
            secondsValue = 59;
            minutesValue -= 1;
        }
        if (minutesValue === 0 && secondsValue === 0) {
            const container = document.querySelector(".hero--time");
            const title = document.createElement("h2");
            title.textContent = "El timer ha terminado";
            container.appendChild(title);
            clearInterval(currentInterval);
        }
        minutesSpan.textContent = (minutesValue);
        secondsSpan.textContent = (secondsValue);
    }, 100
    
    
    
    
    
    
    
    
    );
}
function stopTimer(){
    if (currentButtonTimer){
        currentButtonTimer.disabled = false;
    }
    clearInterval(currentInterval);  
}
// function resetTimer(){
//     stopTimer();
//     secondsValue = 0;
//     secondsSpan.textContent = "00";
//     minutesValue = 0;
//     minutesSpan.textContent = "00";
//     hoursValue = 0;
//     hoursSpan.textContent = "00";
// }


//1. 