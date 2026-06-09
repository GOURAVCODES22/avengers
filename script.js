// ===========================
// MOBILE MENU
// ===========================

const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

// ===========================
// HERO DATA
// ===========================

const heroes = [

    {
    name: "BLACK PANTHER",
    image: "images/BLACK PANTHER.jpg",
    desc: "A legendary warrior and ruler who combines advanced technology, leadership, and exceptional combat skills."
},
   

{
    name: "Iron Man",
    image: "images/IRONMAN.jpg",
    desc: "Tony Stark is a billionaire genius, inventor and the creator of the Iron Man armor. He leads the Avengers with intelligence and technology."
},
{
    name: "Captain America",
    image: "images/captain.jpg",
    desc: "Steve Rogers is the first Avenger. A symbol of courage, leadership and justice who always stands for what's right."
},
{
    name: "Thor",
    image: "images/thor.jpg",
    desc: "Thor Odinson is the God of Thunder and protector of Asgard. His legendary hammer Mjolnir grants immense power."
},
{
    name: "Hulk",
    image: "images/hulk.jpg",
    desc: "Bruce Banner transforms into Hulk, a powerful green giant with unmatched strength and unstoppable rage."
},
{
    name: "Black Widow",
    image: "images/widow.jpg",
    desc: "Natasha Romanoff is an elite spy and combat expert whose intelligence and skills make her one of the Avengers' deadliest members."
},

{
    name: "SPIDER-MAN",
    image: "images/SPIDERMAN.jpg",
    desc: "Agile superhero with spider-like abilities, advanced web technology, and a strong sense of responsibility."
},
 {
    name: "DOCTOR STRANGE",
    image: "images/DOCTOR STRANGE.jpg",
    desc: "A powerful sorcerer who protects reality from magical and interdimensional threats."
},


];

// ===========================
// CHARACTER ELEMENTS
// ===========================

const heroImage = document.getElementById("heroImage");
const heroName = document.getElementById("heroName");
const heroDesc = document.getElementById("heroDesc");

let currentHero = 0;

// ===========================
// SHOW HERO
// ===========================

function updateHero() {

    gsap.to(".character-image img", {
        opacity: 0,
        x: -50,
        duration: 0.3
    });

    gsap.to(".character-content", {
        opacity: 0,
        x: 50,
        duration: 0.3,

        onComplete: () => {

            heroImage.src = heroes[currentHero].image;
            heroName.textContent = heroes[currentHero].name;
            heroDesc.textContent = heroes[currentHero].desc;

            gsap.to(".character-image img", {
                opacity: 1,
                x: 0,
                duration: 0.6
            });

            gsap.to(".character-content", {
                opacity: 1,
                x: 0,
                duration: 0.6
            });

        }
    });
}

// ===========================
// NEXT HERO
// ===========================

function nextHero() {

    currentHero++;

    if(currentHero >= heroes.length){
        currentHero = 0;
    }

    updateHero();
}

// ===========================
// PREVIOUS HERO
// ===========================

function prevHero() {

    currentHero--;

    if(currentHero < 0){
        currentHero = heroes.length - 1;
    }

    updateHero();
}

// ===========================
// GSAP PAGE LOAD ANIMATION
// ===========================

window.addEventListener("load", () => {

    gsap.from(".navbar", {
        y: -100,
        opacity: 0,
        duration: 1
    });

    gsap.from(".hero-title", {
        scale: 0.5,
        opacity: 0,
        duration: 1.2
    });

    gsap.from(".hero-subtitle", {
        y: 50,
        opacity: 0,
        delay: 0.4,
        duration: 1
    });

    gsap.from(".hero-content p", {
        y: 50,
        opacity: 0,
        delay: 0.6,
        duration: 1
    });

    gsap.from(".hero-btn", {
        y: 50,
        opacity: 0,
        delay: 0.8,
        duration: 1
    });

});

// ===========================
// SCROLL ANIMATION
// ===========================

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){

            gsap.to(card,{
                opacity:1,
                y:0,
                duration:0.8
            });

        }

    });

});

// ===========================
// INITIAL CARD STATE
// ===========================

gsap.set(".card",{
    opacity:0,
    y:80
});

// ===========================
// CHARACTER SECTION ANIMATION
// ===========================

gsap.from(".character-image",{
    scrollTrigger:{
        trigger:".character-section",
        start:"top 75%"
    },
    x:-100,
    opacity:0,
    duration:1
});

gsap.from(".character-content",{
    scrollTrigger:{
        trigger:".character-section",
        start:"top 75%"
    },
    x:100,
    opacity:0,
    duration:1
});

