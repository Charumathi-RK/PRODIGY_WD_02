window.onload = function() {
    let min=0;
    let sec=0;
    let tens=0;

    let appendMin=document.querySelector('#min');
    let appendSec=document.querySelector('#sec');
    let appendTens=document.querySelector('#tens');

    let startBtn=document.querySelector('#start');
    let stopBtn=document.querySelector('#stop');
    let resetBtn=document.querySelector('#reset');
    let lapButton=document.querySelector('#lapbtn');
    let Interval;
    const laps =document.getElementsByClassName("lap")[0];
    const startTimer = ()=>{
        tens++;
        if(tens<=9){
            appendTens.innerHTML = '0'+tens;
        }
        if(tens>9){
            appendTens.innerHTML=tens;
        }

        if(tens>99){
            sec++;
            appendSec.innerHTML='0'+sec;
            tens=0;
            appendTens.innerHTML='0'+0;
        }
        if(sec>9){
            appendSec.innerHTML=sec;
        }

        if(sec>59){
            min++;
            appendMin.innerHTML='0'+min;
            sec=0;
            appendSec.innerHTML='0'+0;
        }
        if(min>9){
            appendMin.innerHTML=min;
        }
    }

        startBtn.onclick = ()=>{
            clearInterval(Interval)
            Interval = setInterval(startTimer,10)
        };

        startBtn.onclick = ()=>{
            clearInterval(Interval)
            Interval = setInterval(startTimer,10)
        };

        stopBtn.onclick = ()=>{
            clearInterval(Interval)
        };

        resetBtn.onclick = ()=>{
            clearInterval(Interval)
            tens="00";
            sec="00";
            min="00";
            appendTens.innerHTML=tens;
            appendSec.innerHTML=sec;
            appendMin.innerHTML=min;
        };



}