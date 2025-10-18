const timeElement = document.getElementById("current-time");

function updateTime() {
  timeElement.textContent = Date.now();
}

// Initial render
updateTime();

// Optional live update every second
setInterval(updateTime, 1000);
