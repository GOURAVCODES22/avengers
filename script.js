// ===========================
// SPLASH / INTRO SCREEN
// ===========================

document.documentElement.style.overflow = "hidden";

window.addEventListener("DOMContentLoaded", () => {

    const fill = document.getElementById("splashBarFill");

    // animate the loading bar filling up
    requestAnimationFrame(() => {
        if(fill) fill.style.width = "100%";
    });

});

window.addEventListener("load", () => {

    const splash = document.getElementById("splashScreen");

    // small delay so the fill animation + logo are visible even on fast loads
    setTimeout(() => {

        if(splash){
            splash.classList.add("splash-hidden");
        }

        document.documentElement.style.overflow = "";

    }, 1400);

});

// ===========================
// SCROLL PROGRESS BAR
// ===========================

window.addEventListener("scroll", () => {

    const bar = document.getElementById("progressBar");

    if(!bar) return;

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    bar.style.width = percent + "%";

});

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
    desc: "A legendary warrior and ruler who combines advanced technology, leadership, and exceptional combat skills.",
    powers: ["Vibranium Suit", "Enhanced Strength", "Tactical Genius", "Master Combatant"]
},
   

{
    name: "Iron Man",
    image: "images/IRONMAN.jpg",
    desc: "Tony Stark is a billionaire genius, inventor and the creator of the Iron Man armor. He leads the Avengers with intelligence and technology.",
    powers: ["Powered Armor Suit", "Genius Intellect", "Repulsor Blasts", "Flight"]
},
{
    name: "Captain America",
    image: "images/captain.jpg",
    desc: "Steve Rogers is the first Avenger. A symbol of courage, leadership and justice who always stands for what's right.",
    powers: ["Super Soldier Strength", "Vibranium Shield", "Peak Human Agility", "Leadership"]
},
{
    name: "Thor",
    image: "images/thor.jpg",
    desc: "Thor Odinson is the God of Thunder and protector of Asgard. His legendary hammer Mjolnir grants immense power.",
    powers: ["God of Thunder", "Mjolnir Control", "Storm Manipulation", "Immortal Strength"]
},
{
    name: "Hulk",
    image: "images/hulk.jpg",
    desc: "Bruce Banner transforms into Hulk, a powerful green giant with unmatched strength and unstoppable rage.",
    powers: ["Unlimited Rage Strength", "Regeneration", "Massive Durability", "Ground Shockwaves"]
},
{
    name: "Black Widow",
    image: "images/widow.jpg",
    desc: "Natasha Romanoff is an elite spy and combat expert whose intelligence and skills make her one of the Avengers' deadliest members.",
    powers: ["Master Spy", "Elite Combat Skills", "Strategic Mind", "Stealth Expert"]
},

{
    name: "SPIDER-MAN",
    image: "images/SPIDERMAN.jpg",
    desc: "Agile superhero with spider-like abilities, advanced web technology, and a strong sense of responsibility.",
    powers: ["Spider Agility", "Web-Shooters", "Spider-Sense", "Wall-Crawling"]
},
 {
    name: "DOCTOR STRANGE",
    image: "images/DOCTOR STRANGE.jpg",
    desc: "A powerful sorcerer who protects reality from magical and interdimensional threats.",
    powers: ["Mystic Arts Mastery", "Time Manipulation", "Portal Creation", "Astral Projection"]
},


];

// ===========================
// CHARACTER ELEMENTS
// ===========================

const heroImage = document.getElementById("heroImage");
const heroName = document.getElementById("heroName");
const heroDesc = document.getElementById("heroDesc");
const heroPowers = document.getElementById("heroPowers");

let currentHero = 0;

function renderPowers(powersArr){

    if(!heroPowers || !powersArr) return;

    heroPowers.innerHTML = powersArr
        .map(p => `<span class="power-tag">${p}</span>`)
        .join("");

}

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
            renderPowers(heroes[currentHero].powers);

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

// Render powers for the default hero shown on page load
document.addEventListener("DOMContentLoaded", () => {
    renderPowers(heroes[currentHero].powers);
});

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

// ===========================
// LAUNCH COUNTDOWN TIMER
// ===========================
// Avengers: Doomsday theatrical release: December 18, 2026

const launchDate = new Date("2026-12-18T00:00:00");

function createConfetti(){

    const layer = document.getElementById("confettiLayer");

    if(!layer || layer.dataset.built === "true") return;

    const colors = ["#3dff8a", "#0f9d58", "#d4af37", "#7a0000", "#8fffb0"];

    let piecesHTML = "";

    for(let i = 0; i < 60; i++){

        const left = Math.random() * 100;
        const duration = 2.5 + Math.random() * 2.5;
        const delay = Math.random() * 3;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const rotate = Math.random() > 0.5 ? "0" : "45deg";

        piecesHTML += `<span class="confetti-piece" style="left:${left}%;background:${color};animation-duration:${duration}s;animation-delay:${delay}s;transform:rotate(${rotate})"></span>`;

    }

    layer.innerHTML = piecesHTML;
    layer.dataset.built = "true";

}

function showCelebration(){

    const wrapper = document.getElementById("countdownWrapper");
    const liveBadge = document.getElementById("liveBadge");
    const liveMsg = document.getElementById("countdownLive");
    const celebration = document.getElementById("celebrationBox");

    if(wrapper) wrapper.style.display = "none";
    if(liveBadge) liveBadge.style.display = "none";
    if(liveMsg) liveMsg.style.display = "none";

    if(celebration){
        celebration.classList.add("show");
        createConfetti();
    }

}

function updateCountdown(){

    const daysEl = document.getElementById("cdDays");
    const hoursEl = document.getElementById("cdHours");
    const minutesEl = document.getElementById("cdMinutes");
    const secondsEl = document.getElementById("cdSeconds");

    if(!daysEl) return;

    const now = new Date();
    const diff = launchDate - now;

    if(diff <= 0){

        showCelebration();

        clearInterval(countdownTimer);

        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");

}

// start the countdown immediately on page load, keep it live every second
updateCountdown();

const countdownTimer = setInterval(updateCountdown, 1000);

// ===========================
// TRAILER VIDEO CONTROL
// ===========================

function toggleTrailer(){

    const video = document.getElementById("trailerVideo");
    const playBtn = document.getElementById("trailerPlayBtn");

    if(!video) return;

    if(video.paused){
        video.play();
        playBtn.classList.add("hidden");
    }else{
        video.pause();
        playBtn.classList.remove("hidden");
    }
}

window.addEventListener("load", () => {

    const video = document.getElementById("trailerVideo");
    const playBtn = document.getElementById("trailerPlayBtn");

    if(video && playBtn){

        video.addEventListener("click", toggleTrailer);

        video.addEventListener("ended", () => {
            playBtn.classList.remove("hidden");
        });

    }

});

// ===========================
// LATEST PHOTOS GALLERY SLIDER
// ===========================
// Auto-scrolling strip of the newest stills. Drop your own
// images into the /images folder with these filenames
// (or edit the array below to match whatever you add).

const galleryImages = [
    { src: "images/gallery1.jpg",  alt: "Avengers Doomsday still 1" },
    { src: "images/gallery2.jpg",  alt: "Avengers Doomsday still 2" },
    { src: "images/gallery3.jpg",  alt: "Avengers Doomsday still 3" },
    { src: "images/gallery4.jpg",  alt: "Avengers Doomsday still 4" },
    { src: "images/gallery5.jpg",  alt: "Avengers Doomsday still 5" }
];

function buildGallerySlider(){

    const track = document.getElementById("galleryTrack");

    if(!track) return;

    // duplicate the list once so the CSS marquee loop looks seamless
    const doubledList = [...galleryImages, ...galleryImages];

    track.innerHTML = doubledList
        .map(img => `<img src="${img.src}" alt="${img.alt}" loading="lazy">`)
        .join("");

}

document.addEventListener("DOMContentLoaded", buildGallerySlider);

// ===========================
// GOURAV AI - KNOWLEDGE BASE
// ===========================
// Each entry has multiple keyword variants (synonyms, spellings,
// Hinglish) so the bot recognizes a question phrased in different ways.

const knowledgeBase = [

    {
        keywords: ["hi","hello","hey","namaste","yo"],
        reply: "Hey Avenger! 👋 Ask me about any character, their powers, the trailer, or when Avengers: Doomsday releases."
    },
    {
        keywords: ["thank","thanks","dhanyawad","shukriya"],
        reply: "Anytime, Avenger! Earth needs its mightiest fans too. 🛡️"
    },
    {
        keywords: ["who are you","your name","tumhara naam","gourav ai kya ho"," gourav kon hai","gourav","Gourav"],
        reply: "I'm Gourav AI — your guide to the Avengers: Doomsday universe. Ask me about any hero, villain, or the movie itself."
    },
    {
        keywords: ["iron man","tony stark"],
        reply: "Iron Man is Tony Stark — genius inventor, billionaire, and founding Avenger. Powers: powered armor suit, repulsor blasts, flight, and off-the-charts intellect."
    },
    {
        keywords: ["thor","god of thunder","odinson"],
        reply: "Thor Odinson is the God of Thunder and protector of Asgard. His hammer Mjolnir channels storm-level power and near-immortal strength."
    },
    {
        keywords: ["captain america","steve rogers","sam wilson"],
        reply: "Captain America began as Steve Rogers, the First Avenger — super-soldier strength, a vibranium shield, and unmatched leadership. Sam Wilson also carries the shield in the current era."
    },
    {
        keywords: ["black widow","natasha romanoff"],
        reply: "Black Widow is Natasha Romanoff — an elite spy and combat expert whose strategy and stealth make her one of the deadliest Avengers."
    },
    {
        keywords: ["black panther","t'challa","wakanda"],
        reply: "Black Panther is T'Challa, King of Wakanda — vibranium suit, enhanced strength, and one of the sharpest tactical minds in the MCU."
    },
    {
        keywords: ["hulk","bruce banner","green giant"],
        reply: "Hulk is Bruce Banner transformed — unlimited rage-fueled strength, rapid regeneration, and enough force to level a city block."
    },
    {
        keywords: ["doctor strange","dr strange","stephen strange"],
        reply: "Doctor Strange is Stephen Strange, Master of the Mystic Arts — reality-bending magic, time manipulation, and portal creation."
    },
    {
        keywords: ["spider man","spiderman","peter parker"],
        reply: "Spider-Man is Peter Parker — spider-agility, web-shooters, wall-crawling, and a spider-sense that keeps him a step ahead of danger."
    },
    {
        keywords: ["avengers team","avengers kaun","who are the avengers"],
        reply: "The Avengers are Earth's Mightiest Heroes — a team of extraordinary individuals who unite whenever a threat is too big for any one hero to handle."
    },
    {
        keywords: ["doctor doom","dr doom","victor von doom","villain"],
        reply: "The villain of this film is Doctor Doom, played by Robert Downey Jr. — Victor von Doom, ruler of Latveria and one of Marvel's most iconic antagonists."
    },
    {
        keywords: ["director","russo brothers","who directed"],
        reply: "Avengers: Doomsday is directed by Anthony and Joe Russo — the duo behind Captain America: Civil War, Infinity War, and Endgame."
    },
    {
        keywords: ["release date","kab release","when release","releasing"],
        reply: "Avengers: Doomsday releases in theaters on December 18, 2026. Check the live countdown timer above for the exact time left!"
    },
    {
        keywords: ["trailer","teaser"],
        reply: "You can watch the official trailer right on this page — scroll up to the Trailer section and hit play."
    },
    {
        keywords: ["cast","actors","who is in the movie"],
        reply: "The film brings together heroes from the Avengers, X-Men, Fantastic Four, and Thunderbolts — one of the biggest ensemble casts in MCU history."
    },
    {
        keywords: ["plot","story","what is it about"],
        reply: "Heroes from three distinct universes are set on a collision course, forced to unite against an existential threat unlike anything they've faced before."
    },
    {
        keywords: ["panju don"],
        reply: "duniya me ek hi don hai vo hai panju don."
    },
    {
        keywords: ["tinku veer"],
        reply: "tinku veer hai sb ka lala inhe lala ji kehte hai aur ye panju don ka right hand hai."
    },

];

// ===========================
// GOURAV AI - REPLY ENGINE
// ===========================

function findBestReply(rawMessage){

    const msg = rawMessage.toLowerCase().trim();

    for(const entry of knowledgeBase){

        const matched = entry.keywords.some(keyword => msg.includes(keyword));

        if(matched) return entry.reply;

    }

    return "I currently know about the Avengers characters, Doctor Doom, the cast, trailer and release date. Try asking about one of those!";

}

// ===========================
// GOURAV AI - BACKEND CONFIG
// ===========================
// Paste your deployed Cloudflare Worker URL here after setup.
// Leave it as-is and the bot will just use the local knowledge
// base below (still works fine, just not "real" AI).

const AI_ENDPOINT = "https://gourav-ai-backend.ts7254240.workers.dev";

async function getAIReply(userText){

    // no backend configured yet -> use local knowledge base
    if(!AI_ENDPOINT || AI_ENDPOINT === "PASTE_YOUR_WORKER_URL_HERE"){
        return findBestReply(userText);
    }

    try{

        const res = await fetch(AI_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userText })
        });

        if(!res.ok) throw new Error("Bad response from AI backend");

        const data = await res.json();

        return data.reply || findBestReply(userText);

    }catch(err){

        // backend unreachable / rate-limited -> fall back to local answers
        return findBestReply(userText);

    }

}

function toggleChat(){

    const chat = document.getElementById("gouravAI");

    if(chat.style.display === "block"){

        chat.style.display = "none";

    }else{

        chat.style.display = "block";

        chat.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }
}

function sendMessage(){

    const input = document.getElementById("userInput");
    const userText = input.value.trim();

    if(!userText) return;

    const chat = document.getElementById("chatBox");

    chat.innerHTML += `<div class="user-msg">${userText}</div>`;
    input.value = "";
    chat.scrollTop = chat.scrollHeight;

    // show a brief "typing" indicator while we wait for a reply,
    // so it feels like the bot is actually thinking
    const typingId = "typing-" + Date.now();

    chat.innerHTML += `<div class="bot-msg typing-indicator" id="${typingId}"><span></span><span></span><span></span></div>`;
    chat.scrollTop = chat.scrollHeight;

    getAIReply(userText).then(reply => {

        const typingEl = document.getElementById(typingId);
        if(typingEl) typingEl.remove();

        chat.innerHTML += `<div class="bot-msg">${reply}</div>`;
        chat.scrollTop = chat.scrollHeight;

    });

}

window.addEventListener("load", () => {

    const userInput = document.getElementById("userInput");

    if(userInput){

        userInput.addEventListener("keypress", function(e){

            if(e.key === "Enter"){
                sendMessage();
            }

        });

    }

});
window.addEventListener("load", () => {

    const chat = document.getElementById("gouravAI");

    if(chat){
        chat.style.display = "none";
    }

});