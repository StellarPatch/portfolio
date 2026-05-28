const body = document.body;

const barre1 = document.getElementById("un");
const barre2 = document.getElementById("deux");
const barre3 = document.getElementById("trois");
const barre4 = document.getElementById("quatre");

const sun = document.getElementById("index0");
const compass = document.querySelector(".start");
const core = document.getElementById("CoreCompass");
const titre = document.getElementById("titre");
const main = document.getElementById("main");

var story = 0;

sun.classList.toggle("animation")

body.addEventListener("click", start);

function start() {
    let barres = [barre2, barre4, barre1, barre3]
    let timer = 0;

    if (story == 0) {

        sun.classList.toggle("animation");
        setTimeout(() => sun.classList.toggle("inactive"),10 )

        barres.forEach(element => {
            timer += 250;
            setTimeout(() => { element.classList.toggle("active") }, timer)
        });

        setTimeout(() => { compass.classList.toggle("active") }, 1750);
        setTimeout(() => { core.classList.toggle("animation") }, 3500);

        setTimeout(() => {titre.classList.toggle("active")} , 3500)

        story += 1
    }
    else {
        if (story == 1) {
            timer = 0;
            barres.forEach(element => {
                timer += 250;
                setTimeout(() => { element.classList.toggle("active") }, timer)
            });
            setTimeout(() => { core.classList.toggle("animation") }, 1750);
            setTimeout(() => { compass.classList.toggle("active") }, 1750);

            setTimeout(() => {main.classList.add("active")},2000);
            setTimeout(() => {main.classList.add("transition")},2000)

            setTimeout(() => {titre.classList.toggle("active")} , 1500)
            story += 1
        }
    }
}

function displayBtn(){
    let x=["start","option","exit"];
}