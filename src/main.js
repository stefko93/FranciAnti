let countDownDate = new Date('September 23, 2023 16:00:00').getTime();

let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "nap " + hours + "óra "
        + minutes + "perc " + seconds + "másodperc ";
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "IT'S TIME!!!";
    }
}, 1000);