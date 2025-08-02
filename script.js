const TextWrapper = document.querySelector(".test-wrapper");
const testArea= document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

timer = [0,0,0,0];


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


function spellCheck()
{
let textEntered = testArea.value;
let originTextMatch = originText.substring(0, textEntered.length);
if ( textEntered == originText) {
TextWrapper.style.borderColor="#429890";
} else {
if (textEntered == originTextMatch) {
    TextWrapper.style.borderColor="#65CCf3";
} else { 
    TextWrapper.style.borderColor="#E95D0F";
}
}

console.log(textEntered);
}

function start()
{
let textEnteredLength = testArea.value.length;
if(textEnteredLength === 0)
{
setInterval(runTimer,10);
}
console.log(textEnteredLength);
}


function reset()
{
console.log("Reset button was pressed");
}

testArea.addEventListener("keypress", start,false);
testArea.addEventListener("keyup",spellCheck,false);
resetButton.addEventListener("click",reset,false);