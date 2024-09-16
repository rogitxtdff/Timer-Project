let setTimePage = document.querySelector("#SetTimer");
let btnStart = document.querySelector("#btnStart");
let inputMinutesElem = document.querySelector("#inputMinutes");
let inputSecondsElem = document.querySelector("#inputSeconds");
let resultMinutesElem = document.querySelector('#resultMinutes')
let resultSecondsElem = document.querySelector('#resultSeconds')


window.addEventListener("load", function () {
  setTimePage.style = "transform: translateY(0%);";
});

btnStart.addEventListener("click", function () {
  let minutes = inputMinutesElem.value;
  let seconds = inputSecondsElem.value;

  if ((minutes == 0 && seconds == 0) || seconds > 60) {
    alert("Erorr : Please enter the correct time :)");
  } else if (isNaN(minutes) || isNaN(seconds)) {
    alert("Erorr : Please enter a number :)");
  } else {
    setTimePage.style = "transform: translateY(-100%);";
    prosesTime(minutes,seconds)
  }
});

function prosesTime(minutes,seconds) {
    if(minutes == ''){
        minutes = 0
    }
    
    resultMinutesElem.textContent = minutes
    resultSecondsElem.textContent = seconds

    let interval = setInterval(function name() {

        if (resultSecondsElem.textContent == 0 && resultMinutesElem.textContent == 0) {
            clearInterval(interval)
            alert('End For Timer')
        }


        if (resultSecondsElem.textContent == 0) {
            resultMinutesElem.textContent -=1
            resultSecondsElem.textContent = 60
        }
        

        resultSecondsElem.textContent -= 1
    },1000)
}