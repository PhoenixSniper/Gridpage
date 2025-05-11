// Update clock
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    // Format hours and minutes to always show two digits
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    document.getElementById('clock').textContent = hours + ':' + minutes;

    // Update day of week
    const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    document.getElementById('weekday').textContent = days[now.getDay()];
}

// Update the clock immediately
updateClock();

// Then update it every second
setInterval(updateClock, 1000);

// Automatically set the current date
function updateDate() {
    const dateElement = document.getElementById("date");
    const today = new Date();
    const options = { month: "long", day: "numeric" };
    dateElement.textContent = today.toLocaleDateString("en-US", options);
}

// Run on page load
//document.addEventListener("DOMContentLoaded", updateDate);

updateDate();

setInterval(updateDate, 1000 * 60); 