function openCard(){
    document.getElementById("cover").style.display = "none";
    document.getElementById("card").style.display = "flex";

    document.getElementById("music").play();
}

// Countdown
const weddingDate = new Date("July 4, 2026 11:00:00").getTime();

const x = setInterval(function() {

    let now = new Date().getTime();
    let distance = weddingDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);
