const millisecondsSpan = document.querySelector("#milliseconds");
const secondsSpan = document.querySelector("#seconds");
const minutesSpan = document.querySelector("#minutes");
const hoursSpan = document.querySelector("#hours");
let millisecondsValue = 0;
let secondsValue = 0;
let minutesValue = 0;
let hoursValue = 0;
let currentChronometer;
let currentButton;
let printLap = [];
let printLap1 = [];
let printLapFinal = [];
let lap = document.getElementById("result");
let foo = [];

function startChronometer () {
    
    currentButton = event.target;
    currentButton.disabled = true;
    currentChronometer = setInterval(() => {
        secondsValue += 1;
        if(secondsValue === 60){
            secondsValue = 0;
            minutesValue += 1;
            if (minutesValue === 60){
                minutesValue = 0;
                hoursValue += 1;
                hoursSpan.textContent = ("0" + hoursValue).slice(-2)
            }
            minutesSpan.textContent = ("0" + minutesValue).slice(-2)
        }
        secondsSpan.textContent = ("0" + secondsValue).slice(-2);
    }, 1000);
    
}
function stopChronometer(){
    if (currentButton){
        currentButton.disabled = false;
    }
    clearInterval(currentChronometer);  
}
function lapChronometer(){
    foo.splice(0, foo.length);
    console.log(foo);
    const laps = Array.from([hoursValue, minutesValue, secondsValue]);
    laps.forEach(lap => { 
        const lap1 = parseInt(lap);
        const lap2 = ("0" + lap1).slice(-2);
        printLap.push(lap2);
    });
    const lap3 = printLap.join(":");
    const lap4 = lap3.slice(-8);
    printLap1.push(lap4);
    console.log(foo);
    foo = printLap1.map((lapTest, i)=>{
        console.log(printLap1);
        console.log(lapTest)
        return `<span class="lap">Vuelta ${i+1}: </span><span class="timer">${lapTest}</span><br>`;
    })
    console.log(foo)
    result.innerHTML = foo.join('')
}
console.log(foo);
function resetChronometer(){
    stopChronometer();
    secondsValue = 0;
    secondsSpan.textContent = "00";
    minutesValue = 0;
    minutesSpan.textContent = "00";
    hoursValue = 0;
    hoursSpan.textContent = "00";
    result.innerHTML = '';
    foo.splice(0, foo.length);
    printLap1.splice(0, printLap1.length);
}

// Agregar milisengundos
