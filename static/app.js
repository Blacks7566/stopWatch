// btn

const startStopBtn = document.querySelector('#startStopBtn')
const resetBtn = document.querySelector('#resetBtn')

// variable for time valule

let seconds = 0;
let minutes = 0;
let hours = 0;

// variable for leading zero

let lea_seconds = 0;
let lea_minutes = 0;
let lea_hours = 0;

// timer interval vaialble

let timerInterval = null;
let timerStatus = 'stopped';




// stopWathch fun

function stoptWatch(){

    seconds++

    if(seconds/60 === 1){
        seconds=0
        minutes++
        
        if(minutes/60 === 1){
            minutes=0
            hours++
        }
    }

    if(seconds < 10 ){
        lea_seconds = "0"+seconds.toString()
    }
    else{
        
        lea_seconds = seconds
    }
    if(minutes < 10 ){
        lea_minutes = "0"+minutes.toString()
    }
    else{
        
        lea_minutes = minutes
    }
    if(hours < 10 ){
        lea_hours = "0"+hours.toString()
    }
    else{
        
        lea_hours = hours
    }
    let timer = document.getElementById('timer')
    timer.innerText = lea_hours + ":" + lea_minutes + ":" +lea_seconds;
}

// window.setInterval(stoptWatch,1000)


startStopBtn.addEventListener('click',function(){

    if(timerStatus ==='stopped'){
        timerInterval = window.setInterval(stoptWatch,1000)
        document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>'
        timerStatus='started';
    }
    else{
        window.clearInterval(timerInterval)
        document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-play" id="play"></i>'
        timerStatus='stopped';
    }

})


resetBtn.addEventListener('click',function(){

    window.clearInterval(timerInterval)

    document.getElementById('timer').innerText = "00:00:00"
    seconds=0
    minutes=0
    hours=0


})