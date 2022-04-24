/*global $ */
$(document).ready(function(){
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');
  let timeElement = document.getElementById('time');

  let time=0;
  let intervalId=null;
  
  function formatTime(time){
    let min=Math.floor(time/60000);
    let tsec=(Math.floor(time/10000))%60;
    let sec=Math.floor((time%10000)/1000);
    let msec=Math.floor((time%1000)/100);
  
    return min+":"+tsec+":"+sec+":"+msec;
  }
  
  $("#start").mousedown(function(){
  if(intervalId !== null){return;}
  intervalId=setInterval(()=>{
    time += 100;
    timeElement.innerHTML=formatTime(time);
  },100);
  $("#start").prop("disabled", false);
  $("#stop").prop("disabled", true);
  $("#reset").prop("disabled", true);
  });
  
  $("#stop").mousedown(function(){
  clearInterval(intervalId);
  intervalId=null;
  $("#start").prop("disabled", false);
  $("#stop").prop("disabled",true);
  $("#reset").prop("disabled",false);
  });
  
  $("#reset").mousedown(function() {
  time=0;
  timeElement.innerHTML="0:0:0:0";
  $("#start").prop("disabled", false);
  $("#stop").prop("disabled",false);
  $("#reset").prop("disabled",true);
  })

});
