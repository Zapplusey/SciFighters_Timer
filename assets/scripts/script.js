const countDownDate = new Date("Sep 10, 2022 15:59:16").getTime();

const counterInterval = setInterval(() => {

    const now = new Date().getTime();

    let distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Creating the countdown-string: removing unnecessary zeroes.
    let countDownString = "";
    if(hours > 0 || days < 0) {
        if(hours < 10 && days > 0) {
            countDownString += "0";
        }
        countDownString += hours + ":";
    }
    if(minutes > 0 || days < 0 || hours < 0) {
        if(minutes < 10 && hours > 0) {
            countDownString += "0";
        }
        countDownString += minutes + ":";
    }
    if(seconds >= 0 || days < 0 || hours < 0 || minutes < 0) {
        if(seconds < 10) { 
            countDownString += "0"; }
        countDownString += seconds + "";
    }

    let countDownElement = document.getElementById("CountDownTimer");
    countDownElement.innerHTML = countDownString;
    
    if (distance <= 1000) {
        clearInterval(counterInterval);
        countDownElement.innerHTML = "THE KICKOFF IS NOW LIVE!!";
    }
}, 1000);