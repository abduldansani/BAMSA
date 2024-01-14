import { exco } from "./exco.js";

// Toggle Menu
const menuBtn = document.getElementById('menu_btn');
const nav = document.getElementById('menu');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
}

const closeMenu = (e) => {
    if (nav.classList.contains('flex')) {
        if (!menuBtn.contains(e.target) && !nav.contains(e.target)) {
            menuBtn.classList.toggle('open');
            nav.classList.toggle('flex');
            nav.classList.toggle('hidden');
        }
    }
}

document.addEventListener('click', closeMenu);
document.addEventListener('scroll', closeMenu);


// Greetings
const customGreetings = [
    { greeting: "Good morning!", startTime: 5, endTime: 11 },
    { greeting: "Good afternoon!", startTime: 12, endTime: 16 },
    { greeting: "Good evening!", startTime: 17, endTime: 23 }
];

function getGreeting() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const selectedGreeting = customGreetings.find(g => currentHour >= g.startTime && currentHour <= g.endTime);
    if (!selectedGreeting && currentHour >= 0 && currentHour < 5) {
        return "Up late, huh?";
    }
    return selectedGreeting ? selectedGreeting.greeting : "Hello!";
}

document.getElementById('greeting').innerHTML = getGreeting();


// Exco Cards
const excoCardDiv = document.getElementById('exco_card');
for(let i = 0; i < exco.length; i++){
    let member = exco[i];
    let card =
    `<div
    class="flex flex-col mb-4 p-6 w-full rounded-2xl mx-auto bg-slate-800 shadow-lg space-y-4 sm:flex-row md:flex-col lg:flex-row md:w-full"
    >
    <img
        class="block mx-auto w-32 h-32 rounded-full mb-8 sm:mb-0 md:mb-8 lg:mb-0 sm:mx-0 sm:mr-4 md:mx-auto lg:mx-0 lg:mr-4 sm:shrink-0 bg-white"
        src=${member.src}
        alt=${member.firstName}, ${member.surName}
    />
    <div
        class="space-y-3 text-center sm:text-left md:text-center lg:text-left"
    >
        <p class="text-xl font-semibold">
        ${member.surName}, ${member.firstName}
        </p>
        <p class="text-slate-500">${member.level} ${member.course} ${member.school}</p>
        <p class="font-medium">${member.rank}</p>
    </div>`;

    excoCardDiv.innerHTML += card;
}
