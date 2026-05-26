function openCard(){

    let cover = document.getElementById("cover");
    let card = document.getElementById("card");

    cover.style.top = "-100%";

    setTimeout(() => {
        card.style.opacity = "1";
    }, 800);

}
