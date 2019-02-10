var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var splits       = document.getElementById("splits");


function printTime() {

}

function printMinutes() {
  setInterval(function(){
  var numMin = chronometer.setMinutes();
  var minutes = chronometer.twoDigitsNumber(numMin);
  console.log(minutes);
  minDec.innerHTML = minutes[0]
  minUni.innerHTML = minutes[1]
  }, 1000);
}

function printSeconds() {
  setInterval(function(){
  var numSec = chronometer.setSeconds();
  var seconds = chronometer.twoDigitsNumber(numSec);
  secDec.innerHTML = seconds[0]
  secUni.innerHTML = seconds[1]
  }, 1000);
}

function printMilliseconds() {

}

function printSplit() {
  
  /*if (splits != document.getElementById("splits")){
  var splits1 = document.createElement("ol");
  splits1.setAttribute("id", "splits");
  var splitCon = document.getElementById("splits-container");
  splitCon.appendChild(splits);

  var numSec = chronometer.setSeconds();
  var seconds = chronometer.twoDigitsNumber(numSec);
  var numMin = chronometer.setMinutes();
  var minutes = chronometer.twoDigitsNumber(numMin);
  var newSplit = document.createElement("li")
  newSplit.innerHTML = minutes + ":" + seconds;
  splits.appendChild(newSplit);
  }
  else{*/
  var numSec = chronometer.setSeconds();
  var seconds = chronometer.twoDigitsNumber(numSec);
  var numMin = chronometer.setMinutes();
  var minutes = chronometer.twoDigitsNumber(numMin);
  var newSplit = document.createElement("li")
  newSplit.innerHTML = minutes + ":" + seconds;
  splits.appendChild(newSplit);
  
}

function clearSplits() {
  var olTag = document.getElementById("splits");
  while (olTag.hasChildNodes()) {
    olTag.removeChild(olTag.firstChild);
  }
  
}

function setStopBtn() {
  btnLeft.setAttribute("class", "btn stop");
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRight.setAttribute("class", "btn split");
  btnRight.innerHTML = "SPLIT"
}

function setStartBtn() {
  btnLeft.setAttribute("class", "btn start");
  btnLeft.innerHTML = "START"
}

function setResetBtn() {
  btnRight.setAttribute("class", "btn reset");
  btnRight.innerHTML = "RESET"
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if(btnLeft.getAttribute("class") === "btn start"){
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
    printMinutes();
    printSeconds();
  }
  else if(btnLeft.getAttribute("class") === "btn stop"){
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }

});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if(btnRight.getAttribute("class") === "btn reset"){
    setResetBtn();
    setStartBtn();
    chronometer.resetClick();
    chronometer.stopClick();
    clearSplits();
  }
  else if(btnRight.getAttribute("class") === "btn split"){
    printSplit();
  }
});
