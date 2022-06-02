let secondsSpan = document.querySelector("#seconds");
let minutesSpan = document.querySelector("#minutes");

let secondsSpan1 = document.querySelector("#seconds1");
let minutesSpan1 = document.querySelector("#minutes1");

let secondsSpan2 = document.querySelector("#seconds2");
let minutesSpan2 = document.querySelector("#minutes2");

const hero = document.querySelector("#principal");

let secondsValue = 0;
let minutesValue = 25;
let secondsValue1 = 0;
let minutesValue1 = 5;
let secondsValue2 = 0;
let minutesValue2 = 15;
let intervalPomodoro;
let intervalShort;
let intervalLong;
let buttonPomodoro;
let buttonShort;
let buttonLong;
let confirmation;

let startButtonPomodoro = false;
let startButtonShortBreak = false;
let startButtonLongBreak = false;


const startPomodoro = () => {
    startButtonPomodoro = true;
    buttonPomodoro = event.target;
    buttonPomodoro.disabled = true;
    intervalPomodoro = setInterval(() => {
        secondsValue -= 1;
        if (secondsValue === -1) {
            secondsValue = 59;
            minutesValue -= 1;
        }
        if (minutesValue === 00 && secondsValue === 00) {
            clearInterval(intervalPomodoro)
            setTimeout(() => {
                alert("Terminado"); 
                startButtonPomodoro = false 
                secondsValue = 0;
                minutesValue = 25;
                buttonPomodoro.disabled = false;
            }, 500);
        }
        minutesSpan.textContent = ("0" + minutesValue).slice(-2);
        secondsSpan.textContent = ("0" + secondsValue).slice(-2);
    }, 1);
}
const stopPomodoro = () => {
    if (buttonPomodoro){
        buttonPomodoro.disabled = false;
    }
    clearInterval(intervalPomodoro);  
}
const showPomodoro = () => {
    hero.innerHTML = `
        <section class="section-container  pomodoro-container">
            <div class="hero--time">
                <p id="time"><span id="minutes">25</span>:<span id="seconds">00</span></p>
            </div>
            <div class="hero--buttons">
                <button class="buttons" id="buttonStartPomodoro" type="button" onclick="startPomodoro()">Start</button>
            </div>
            <div>
                <button class="button button-hero" onclick="stopPomodoro()">Stop</button>
            </div>
        </section>
    `;
    secondsSpan = document.querySelector("#seconds");
    minutesSpan = document.querySelector("#minutes");
    clearInterval(intervalShort);
    clearInterval(intervalLong); 
}
const executePomodoro = () => {
    if (startButtonShortBreak || startButtonLongBreak ) {
        confirmation = confirm("¿Esta seguro que quiere cambiar de opción?");
        if (confirmation){
            startButtonShortBreak = false;
            startButtonLongBreak = false;
            secondsValue1 = 0;
            minutesValue1 = 5;
            secondsValue2 = 0;
            minutesValue2 = 15;
            showPomodoro();
        }else{
            return false;
        }
    }else{
        showPomodoro();
    }
} 
const startShortBreak = () => {
    startButtonShortBreak = true;
    buttonShort = event.target;
    buttonShort.disabled = true;
    intervalShort = setInterval(() => {
        secondsValue1 -= 1;
        if (secondsValue1 === -1) {
            secondsValue1 = 59;
            minutesValue1 -= 1;
        }
        if (minutesValue1 === 0 && secondsValue1 === 0) {
            clearInterval(intervalShort);
            setTimeout(() => {
                alert("Terminado");  
                startButtonShortBreak = false 
                secondsValue1 = 0;
                minutesValue1 = 5;
                buttonShort.disabled = false;
            }, 500);
        }
        minutesSpan1.textContent = ("0" + minutesValue1).slice(-2);
        secondsSpan1.textContent = ("0" + secondsValue1).slice(-2);
    }, 1);
}
const stopShortBreak = () => {
    if (buttonShort){
        buttonShort.disabled = false;
    }
    clearInterval(intervalShort); 
}
const executeShortBreak = () => {
    if(startButtonPomodoro || startButtonLongBreak ){
        confirmation = confirm("¿Esta seguro que quiere cambiar de opción?");
        if (confirmation){
            startButtonPomodoro = false;
            startButtonLongBreak = false;
            secondsValue = 0;
            minutesValue = 25;
            secondsValue2 = 0;
            minutesValue2 = 15;
            showShortBreak();
        }else{
            return false;
        }
    }else{
        showShortBreak();   
    }
}
const showShortBreak = () => {
    hero.innerHTML = `
        <section class="section-container short-break-container">
            <div class="hero--time">
                <p id="time"><span id="minutes1">5</span>:<span id="seconds1">00</span></p>
            </div>
            <div class="hero--buttons">
                <button class="buttons" id="buttonStartShort" type="button" onclick="startShortBreak()">Start</button>
            </div>
            <div>
                <button class="button button-hero" onclick="stopShortBreak()">Stop</button>
            </div>
        </section>
    `
    secondsSpan1 = document.querySelector("#seconds1");
    minutesSpan1 = document.querySelector("#minutes1");
    clearInterval(intervalPomodoro);
    clearInterval(intervalLong);  
    
}
const startLongBreak = () => {
    startButtonLongBreak = true;
    buttonLong = event.target;
    buttonLong.disabled = true;
    intervalLong = setInterval(() => {
        secondsValue2 -= 1;
        if (secondsValue2 === -1) {
            secondsValue2 = 59;
            minutesValue2 -= 1;
        }
        if (minutesValue2 === 0 && secondsValue2 === 0) {
            clearInterval(intervalLong);
            setTimeout(() => {
                alert("Terminado");
                startButtonLongBreak = false 
                secondsValue2 = 0;
                minutesValue2 = 15;
                buttonLong.disabled = false; 
            }, 500);
        }
        minutesSpan2.textContent = ("0" + minutesValue2).slice(-2);
        secondsSpan2.textContent = ("0" + secondsValue2).slice(-2);
    }, 1);
}
const stopLongBreak = () => {
    if (buttonLong){
        buttonLong.disabled = false;
    }
    clearInterval(intervalLong);  

}
const executeLongBreak = () => {
    if(startButtonPomodoro || startButtonShortBreak){
        confirmation = confirm("¿Esta seguro que quiere cambiar de opción?");
        if (confirmation){
            startButtonShortBreak = false;
            startButtonPomodoro = false;
            secondsValue1 = 0;
            minutesValue1 = 5;
            secondsValue = 0;
            minutesValue = 25;
            showLongBreak();
        }else{
            return false;
        }
    }else{
        showLongBreak();   
    }
}

const showLongBreak = () => {
    hero.innerHTML = `
        <section class="section-container  long-break-container">
            <div class="hero--time">
                <p id="time"><span id="minutes2">15</span>:<span id="seconds2">00</span></p>
            </div>
            <div class="hero--buttons">
                <button class="buttons" id="buttonStartLong" type="button" onclick="startLongBreak()">Start</button>
            </div>
            <div>
                <button class="button button-hero" onclick="stopLongBreak()">Stop</button>
            </div>
        </section>
    `
    secondsSpan2 = document.querySelector("#seconds2");
    minutesSpan2 = document.querySelector("#minutes2");
    clearInterval(intervalPomodoro);
    clearInterval(intervalShort); 
}


//4. alerts cuando usuario cambie boton (para sumar vuelta)
//5. sumar vueltas
//6. imprimir vueltas


//Bugs
//Al usar boton de stop y retornar a start se reinicia timer (pomodoro/short/long)
//Después de concluir un timer, al darle click a otra opción, arroja alert (ocurre despúes de haber hecho el primer cambio de opción antes de que el timer acabe, NO ocurre si desde el inicio el timer llega a 00:00)
