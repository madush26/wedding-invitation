function openCard(){
    document.getElementById("cover").style.display = "none";
    document.getElementById("card").style.display = "flex";
}

// Countdown
const weddingDate = new Date("July 4, 2026 11:00:00").getTime();

setInterval(() => {
    let now = new Date().getTime();
    let distance = weddingDate - now;

    document.getElementById("days").innerText = Math.floor(distance / (1000*60*60*24));
    document.getElementById("hours").innerText = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    document.getElementById("minutes").innerText = Math.floor((distance % (1000*60*60)) / (1000*60));
    document.getElementById("seconds").innerText = Math.floor((distance % (1000*60)) / 1000);

}, 1000);
