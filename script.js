
let isStop = true;
let s = 0;
let min = 0;
let hr = 0;
let timer;
function Start()
{
    if(isStop==true){
        isStop = false;
        Timer();
    }
}

function Timer()
{    s = parseInt(s);
    min = parseInt(min);
    hr = parseInt(hr);
    if(isStop==false){
        s++;
        if(s==60){
            s=0;
            min++;
        }
        if(min==60){
            min=0;
            hr++;
        }
        if(s<10){
            s = "0" + s;
        }
        if(min<10){
            min = "0" + min;
        }
        if(hr<10){
            hr = "0" + hr;
        }
    }
    stopwatch.innerHTML = hr + " : " + min + " : " + s;
    timer = setTimeout("Timer()",1000);
}

function Stop(){
        isStop = true;
        clearTimeout(timer);
        // if(s<10){
        //     s = "0" + s;
        // }
        // if(min<10){
        //     min = "0" + min;
        // }
        // if(hr<10){
        //     hr = "0" + hr;
        // }

        // stopwatch.innerHTML = hr + " : " + min + " : " + s;

}

function Reset(){
    Stop();
    isStop = true;
    s =  0;
    min = 0;
    hr =  0;
    stopwatch.innerHTML = "00" + " : " + "00" + " : " + "00";
}
