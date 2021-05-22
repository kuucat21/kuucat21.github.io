let display = document.getElementById("display");
let startStop = document.getElementById("startStop");
let reset = document.getElementById("reset");

let hours = 0;
let minutes = 0;
let seconds = 0;


let newhours = 0;
let newminutes = 0;
let newseconds = 0; 


let status = stop;
let interval;

function stopWatch(){
    seconds++;
if(seconds / 60 == 1){
    minutes++;
    seconds = 0;
    if(minutes /60 == 1){
        hours++;
        minutes = 0;
    }
}


if(seconds < 10){
    newseconds= "0" + seconds;
}else{
    newseconds = seconds;
}

if(minutes < 10){
    newminutes= "0" + minutes;
}else{
    newminutes = minutes;
}

if(hours < 10){
    newhours= "0" + hours;
}else{
    newhours = hours;
}
    display.innerHTML = newhours + ":" +newminutes+ ":" + newseconds ;
}

startStop.addEventListener("click",function(){
    if(status == "stop"){
         interval = setInterval(stopWatch, 1000);
         startStop.innerHTML = "STOP";
         status = "start";
    }else{
        clearInterval(interval);
        startStop.innerHTML = "START";
        status = "stop";
    }
   
    
});

reset.addEventListener("click",function(){
    clearInterval(interval);
    startStop.innerHTML = "START";
    status = "stop";
    display.innerHTML = "00:00:00";
    hours = 0;
    minutes = 0;
    seconds  = 0;

});