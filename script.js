"use strict"
//厳格モード

const startButton = document.getElementById("runbtn");
const resetButton = document.getElementById("resetbtn");
const displayTime = document.getElementById("timer");

let currentTime;
let startTime;
let stopTime;
let timeoutID;

// let audio_correct;
// let audio_failed;

// // window.onload = () => {
// //   audio_correct = new Audio();
// //   audio_correct.src = "../sound/Onoma-Syakiin01-1(Long).mp3";
// //   audio_correct.preload = "auto";
  
// //   audio_failed = new Audio();
// //   audio_failed.src = "../sound/Quiz-Buzzer01-1.mp3";
// //   audio_failed.preload = "auto";
// // }

function displayTimer() {
  currentTime = new Date(Date.now() - startTime);
  const hour = String(currentTime.getHours() - 9).padStart(2, "0");
  const minute = String(currentTime.getMinutes()).padStart(2, "0");
  const second = String(currentTime.getSeconds()).padStart(2, "0");
  const millisecond = String(currentTime.getMilliseconds()).padStart(3, "0");
  displayTime.innerText = `${minute}:${second}:${millisecond}`;

  timeoutID = setTimeout(displayTimer, 10);
}

//スタートボタンを押したときの処理
startButton.addEventListener("click", function() {
  if (startButton.value === "START") {
    startButton.value = "STOP";
    resetButton.disabled = true;
    startTime = Date.now();
    displayTimer();
  } else {
    startButton.disabled = true;
    resetButton.disabled = false;
    clearTimeout(timeoutID);
  }
});

//リセットボタンを押したときの処理
resetButton.addEventListener("click", function() {
  startButton.disabled = false;
  startButton.value = "START";
  displayTime.textContent = '00:00:000';
  stopTime = 0;
});
