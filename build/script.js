const menuBtn = document.getElementById('menu_btn');
const nav = document.getElementById('menu');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
}

const closeMenu = (e) => {
    if (!menuBtn.contains(e.target) && !nav.contains(e.target)) {
        menuBtn.classList.toggle('open');
        nav.classList.toggle('flex');
        nav.classList.toggle('hidden');
    }
}

document.addEventListener('click', closeMenu);
document.addEventListener('scroll', closeMenu);

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