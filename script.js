function openCard(){

    let cover = document.getElementById("cover");
    let card = document.getElementById("card");

    cover.style.top = "-100%";

    setTimeout(() => {
        card.style.opacity = "1";
    }, 800);

    // 🎯 Set Wedding Date (CHANGE THIS DATE)
let weddingDate = new Date("March 11, 2029 9:00:00").getTime();

let countdown = setInterval(function() {

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

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "💍 The Big Day Has Arrived!";
    }

}, 1000);

}
