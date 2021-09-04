var time = 0;
document.getElementById('showbars').addEventListener('click',showbars);
document.getElementById('start-pause').addEventListener('click',start_pause);
function showbars(){
    let container = document.getElementById('container');
    container.textContent = "";
    for(let i=1;i<=90;i++){
        let bar = document.createElement('div');
        // bar.textContent = i;
        bar.id = i;
        bar.class = 'bars';
        bar.style.backgroundColor = '#b295e9';   
        bar.style.height = `${Math.random()*100}px`;
        bar.style.maxHeight = '100px';
        bar.style.cursor = 'pointer';
        bar.addEventListener('click',shift);
        container.appendChild(bar);
    }
}
function play(){
    
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
var interval;
function start_pause(){
    // console.log(interval,'intervalID');
    if(interval==undefined){
        interval = setInterval(()=>{
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
    else{
        clearInterval(interval)       
        interval = undefined;
    }
    
}
function shift(e){
    time = e.target.id-1;
}