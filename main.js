/*global $ */
$(document).ready(function(){
  let start = document.getElementById('start');
  let stop = document.getElementById('stop');
  let reset = document.getElementById('reset');
  let timeElement = document.getElementById('time');

  let time = 0;
  let intervalId = null;
  
  function formatTime(time){
    let hour = Math.floor(time / 3600000);
    let min = Math.floor(time / 60000);
    let sec = (Math.floor(time / 1000))%60;
    let msec = (Math.floor(time / 10))%100;
    
    let strhour = zeropadding(hour);
    let strmin = zeropadding(min);
    let strsec = zeropadding(sec);
    let strmsec = zeropadding(msec);
  
    return strhour + ":" + strmin + ":" + strsec + ":" + strmsec;
  } 
  
  function zeropadding(value) {
    if (value < 10) {
      return "0" + value;
    } else {
      return value;
    }
  } 
  
  $("#start").click(function(){
  if(intervalId !== null){return;}
  intervalId = setInterval(() => {
    time += 10;
    timeElement.innerHTML = formatTime(time);
  },10);
   $("#start").prop("disabled", true);
   $("#stop").prop("disabled",false);
   $("#reset").prop("disabled",true);
  });
  
  $("#stop").click(function(){
  clearInterval(intervalId);
  intervalId = null;
   $("#start").prop("disabled", false);
   $("#stop").prop("disabled",true);
   $("#reset").prop("disabled",false);
  });
  
  $("#reset").click(function() {
  time = 0;
  timeElement.innerHTML = "00:00:00:00";
   $("#start").prop("disabled", false);
   $("#stop").prop("disabled",true);
   $("#reset").prop("disabled",true);
  });

});
