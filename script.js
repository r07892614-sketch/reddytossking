let timeLeft = 60;
const timer = document.getElementById("timer");

const countdown = setInterval(() => {
    timeLeft--;
    timer.textContent = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(countdown);
        // timer.textContent = "0";
        // document.getElementById("joinBtn").innerText = "Time Over!";
        // document.getElementById("joinBtn").disabled = true;
    }
}, 1000);
