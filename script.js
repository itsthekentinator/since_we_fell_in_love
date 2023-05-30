// Calculate the time difference
const startDate = new Date('April 12, 2023 21:00:00').getTime();
let currentDate, timeDifference, days, hours, minutes, seconds;

function updateTimer() {
  // Calculate the time difference
  currentDate = new Date().getTime();
  timeDifference = currentDate - startDate;

  // Calculate days, hours, minutes, and seconds
  days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Update the timer display
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

// Update the timer every second
setInterval(updateTimer, 1000);
