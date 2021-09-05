var time = 0; //time lapsed is 0, initially
// document.getElementById('showbars').addEventListener('click',showbars);
var start_pause_button = document.getElementById('start-pause');
start_pause_button.addEventListener('click',start_pause);
function showbars(){ //this fuctions adds bars to the display
    let container = document.getElementById('container');
    container.textContent = "";
    for(let i=1;i<=90;i++){
        // let bar = document.createElement('div');
        // // bar.textContent = i;
        // bar.id = i;
        // bar.class = 'bars';
        // bar.style.backgroundColor = '#b295e9';
        // bar.style.minHeight = '30px';   
        // bar.style.height = `${Math.random()*100}px`;
        // bar.style.maxHeight = '100px';
        // bar.style.cursor = 'pointer';
        // bar.addEventListener('click',shift);
        // container.appendChild(bar);
        let canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = '#FF0000';
        ctx.fillRect(10,10,10,100);
        container.appendChild(canvas);
//         <canvas id="myCanvas" width="10" height="100" style="border:1px solid #000000;">
// Your browser does not support the HTML canvas tag.
// </canvas>


    }
}
showbars(); 
function play(){ //this function colorises the bars according to time lapsed
    
    // console.log('play function');
    let bars = document.querySelectorAll('#container div');
    // console.log(bars);
    // console.log(bars);
    // console.log('play again');
    for(let i=0;i<bars.length;i++){
        if(bars[i].id <= time){
            bars[i].style.backgroundColor = '#443068';
        }else{
            bars[i].style.backgroundColor = '#b295e9';
        }
    }
}
var intervalID;
function start_pause(){
    // console.log(interval,'intervalID');
    if(intervalID==undefined){ //if intervalID is undefined, we shall set a new interval
        start_pause_button.innerHTML = `<i class="fa fa-pause" style="font-size:36px;"></i>` //changing start/pause icon
        intervalID = setInterval(()=>{
            time++;
            // console.log(time);
            if(time>90){
                clearInterval(interval);
            }else{
                document.getElementById('time').textContent = `${Math.floor(time/60)}mins ${time%60}secs`
                play();
            }
        },1000)    
    }
    else{ //if the interval is already set, then we clear it and set IntervalID as undefined
        clearInterval(intervalID)       
        intervalID = undefined;
        start_pause_button.innerHTML = `<i  class="fa fa-play" style="font-size:36px;"></i>` //changing start pause icon
    }
    
}
function shift(e){
    time = e.target.id-1; //on click over the bars, the value of time lapsed is changed
}