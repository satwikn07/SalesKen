var time = 0;
var start_pause_button = document.getElementById('start-pause');
start_pause_button.addEventListener('click',start_pause);
function showbars(){ //this fuctions adds bars to the display
    let container = document.getElementById('container');
    container.textContent = "";
    for(let i=1;i<=130;i++){
        let canvas = document.createElement('canvas');
        canvas.id = i;
        canvas.style.height = `200px`;
        canvas.style.width = `10px`;
        canvas.style.cursor = 'pointer';
        canvas.addEventListener('click',shift);
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = `rgb(221, 221, 221)`;
        if(i%10==1){
            ctx.fillRect(0,50,200,100-Math.round(i/10)*2)
        }else{
            ctx.fillRect(0,Math.round(i%5+3)*6,200,80+Math.round(i/10)*2)
        }
       
        container.appendChild(canvas);

    }
}
showbars(); 
function play(){ //this function colorises the bars according to time lapsed
    let bars = document.querySelectorAll('#container canvas');
    bars.forEach(bar=>{
        var context = bar.getContext("2d");
        context.clearRect(0,0,bar.width,bar.height);
        if(bar.id<=time){
            context.fillStyle=`rgb(226, 24, 102)`;
        }else{
            context.fillStyle=`rgb(221, 221, 221)`;
        }
        if(bar.id%10==1){
            context.fillRect(0,50,200,100-Math.round(bar.id/10)*2)
        }else{
            context.fillRect(0,Math.round(bar.id%5+3)*6,200,80+Math.round(bar.id/10)*2)
        }
    })
  
}
var intervalID;
function start_pause(){
    if(intervalID==undefined){ //if intervalID is undefined, we shall set a new interval
        play_music();
        start_pause_button.innerHTML = `<i class="fa fa-pause" style="font-size:42px;color:rgb(64, 192, 231)"></i>` //changing start/pause icon
        intervalID = setInterval(()=>{
            time = Math.round(document.getElementById('audio').currentTime)            
            if(time>130){
                clearInterval(intervalID);
                pause_music();
                start_pause_button.innerHTML = `<i  class="fa fa-play" style="font-size:42px;color:rgb(64, 192, 231)"></i>`
            }else{
                document.getElementById('time').textContent = `${Math.floor(time/60)}mins: ${time%60}secs`
                play();
            }
        },1000)    
    }
    else{ //if the interval is already set, then we clear it and set IntervalID as undefined
        clearInterval(intervalID)
        pause_music();       
        intervalID = undefined;
        start_pause_button.innerHTML = `<i  class="fa fa-play" style="font-size:42px;color:rgb(64, 192, 231)"></i>` //changing start pause icon
    }
    
}
function shift(e){
    time = e.target.id;
    document.getElementById('audio').currentTime = time; //on click over the bars, the value of time lapsed is changed
}
//audio codes
function play_music(){
    document.getElementById('audio').play();
    document.getElementById('audio').muted = false;
}
function pause_music(){
    document.getElementById('audio').pause();
}
//Banner 1
var canvas = document.getElementById("banner1");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(100, 80, 4, 0, 2 * Math.PI);
ctx.moveTo(100, 80);
ctx.lineTo(100, 40);
ctx.fillStyle = 'rgb(81, 232, 51)';
ctx.fill();
ctx.fillRect(50, 10, 100, 30); //first fill then stroke
ctx.strokeStyle = 'rgb(81, 232, 51)';
ctx.stroke();
ctx.fillStyle = 'white';
ctx.font = "12px Arial";
ctx.fillText("Introduction", 67, 28);
//Banner 2
var canvas = document.getElementById("banner2");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(100, 140, 4, 0, 2 * Math.PI);
ctx.moveTo(100, 140);
ctx.lineTo(100, 40);
ctx.fillStyle = 'rgb(98, 219, 161)';
ctx.fill();
ctx.fillRect(50, 10, 100, 30); //first fill then stroke
ctx.strokeStyle = 'rgb(98, 219, 161)';
ctx.stroke();
ctx.fillStyle = 'white';
ctx.font = "12px Arial";
ctx.fillText("one_six", 77, 28);
//Banner 3
var canvas = document.getElementById("banner3");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(100, 80, 4, 0, 2 * Math.PI);
ctx.moveTo(100, 80);
ctx.lineTo(100, 40);
ctx.fillStyle = 'rgb(24, 64, 186)';
ctx.fill();
ctx.fillRect(60, 10, 80, 30); //first fill then stroke
ctx.strokeStyle = 'rgb(24, 64, 186)';
ctx.stroke();
ctx.fillStyle = 'white';
ctx.font = "12px Arial";
ctx.fillText("Polite", 85, 29);
//banner 4
var canvas = document.getElementById("banner4");
var ctx = canvas.getContext("2d");
ctx.strokeStyle = 'rgb(127, 181, 106)';
ctx.fillStyle = 'rgb(127, 181, 106)';
ctx.beginPath();
ctx.arc(190, 190, 4, 0, 2 * Math.PI);
ctx.moveTo(190, 190);
ctx.lineTo(190, 30);
ctx.fillRect(10, 10, 181, 30);
ctx.stroke();
ctx.fill();
ctx.fillStyle = 'white';
ctx.font = "12px Arial";
ctx.fillText("Rapport Building - Energy", 28, 28);
//banner 5
var canvas = document.getElementById("banner5");
var ctx = canvas.getContext("2d");
ctx.strokeStyle = 'rgb(155, 122, 101)';
ctx.fillStyle = 'rgb(155, 122, 101)';
ctx.beginPath();
ctx.arc(190, 140, 4, 0, 2 * Math.PI);
ctx.moveTo(190, 140);
ctx.lineTo(190, 30);
ctx.fillRect(10, 10, 181, 30);
ctx.stroke();
ctx.fill();
ctx.fillStyle = 'white';
ctx.font = "12px Arial";
ctx.fillText("Rapport Building - Empathy", 28, 28);

