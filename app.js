let sec = document.querySelector('.sec');
let min = document.querySelector('.min');
let hr = document.querySelector('.hr');

setInterval(() => {
  let time = new Date();
  let currentHour = (time.getHours() - 3) * 30;
  let currentMin = (time.getMinutes() - 15) * 6;
  let currentSec = time.getSeconds() * 6;
  hr.style.transform = `rotate(${currentHour}deg)`;
  min.style.transform = `rotate(${currentMin}deg)`;
  sec.style.transform = `rotate(${currentSec}deg)`;
}, 1000);
