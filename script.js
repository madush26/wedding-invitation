function openCard(){

    document.getElementById("cover").style.top = "-100%";

    setTimeout(() => {
        document.getElementById("card").style.opacity = "1";
    }, 800);

    // Countdown
    let weddingDate = new Date("July 04, 2026 11:00:00").getTime();

    setInterval(function(){

        let now = new Date().getTime();
        let distance = weddingDate - now;

        let days = Math.floor(distance / (1000*60*60*24));
        let hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
        let minutes = Math.floor((distance%(1000*60*60))/(1000*60));
        let seconds = Math.floor((distance%(1000*60))/1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        if(distance < 0){
            document.getElementById("timer").innerHTML = "💍 The Big Day Has Arrived!";
        }

    },1000);
}
