const play = document.querySelector(".play");
const reset = document.querySelector(".reset");
const container = document.querySelector(".container");
let manois = new Audio("sounds/pallaso.mpeg");
let minutes = 0;
let seconds = 0;
let hours = 0;

var leadingSeconds = 0;
var leadingMinutes = 0;
var leadingHours = 0;

timerStatus = "stopped";
timerInterval = null;
function stopwatch() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }
  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }
  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }
  if (hours < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }
  let displayTimer = (document.querySelector(".timer").innerHTML =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds);
}
// setInterval(stopwatch, 1000);
play.addEventListener("click", function () {
  if (timerStatus == "stopped") {
    timeInterval = setInterval(stopwatch, 1000);
    container.classList.add("animation");
    play.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;

    manois.play();
    manois.setAttribute("loop", "true");
    timerStatus = "started";
  } else {
    clearInterval(timeInterval);
    container.classList.remove("animation");
    play.innerHTML = `<i class="fa-solid fa-play" ></i>`;
    manois.pause();
    timerStatus = "stopped";
  }
});
reset.addEventListener("click", function () {
  clearInterval(timeInterval);
  container.classList.remove("animation");
  manois.currentTime = 0;
  minutes = 0;
  seconds = 0;
  hours = 0;
  document.querySelector(".timer").innerHTML = " 00:00:00 ";
});
