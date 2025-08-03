const textWrapper = document.querySelector(".test-wrapper");
const testArea= document.querySelector("#test-area");
const originText = document.querySelector("#origin-text").innerText;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

timer = [0,0,0,0];

var interval;
var timerRunning = false;



function leadingZero(time)
{
if ( time <=9)
{
time = "0" + time;
}
return time;
}

function runTimer()
{
    let currentTime = leadingZero(timer [0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
theTimer.innerHTML= currentTime;
timer[3]++;

timer[0] = Math.floor((timer[3]/100)/60);
timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0]*6000));


}


function spellCheck() {
let textEntered = testArea.value.replace(/\s+/g, ' ').trim();
let originalNormalized = originText.replace(/\s+/g, ' ').trim();
let originTextMatch = originalNormalized.substring(0, textEntered.length);

if (textEntered === originalNormalized) {
    clearInterval(interval);
    textWrapper.style.borderColor = "#429890";
} else if (textEntered === originTextMatch) {
    textWrapper.style.borderColor = "#ea00ff";
} else {
    textWrapper.style.borderColor = "#E95D0F";
}
}

function start()
{
let textEnteredLength = testArea.value.length;
if(textEnteredLength === 0 && !timerRunning)
{
timerRunning=true;
interval = setInterval(runTimer,10);
}
console.log(textEnteredLength);
}



function reset()
{
clearInterval(interval);
interval = null ; 
timer = [0,0,0,0];
timerRunning=false;

testArea.value="";
theTimer.innerHTML="00:00:00";
textWrapper.style.borderColor="grey";

}

testArea.addEventListener("keydown", start, false);
testArea.addEventListener("keyup",spellCheck,false);
resetButton.addEventListener("click",reset,false);
