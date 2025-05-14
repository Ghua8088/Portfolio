const toggleButton = document.getElementById('darkModeToggle');
const leetCard = document.querySelector('#leetcode img');   
const sun= document.getElementById('sun');
const moon= document.getElementById('moon');
moon.style.visibility='hidden';
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')){
        sun.style.visibility='hidden';
        moon.style.visibility='visible';
        setMoonPhase(moon);
    }else{   
        sun.style.visibility='visible';
        moon.style.visibility='hidden';
    }
    updateLeetCardTheme(); 
});
function magnettoheader(){
    window.location.hash = '#header';
    setTimeout(() => {
        window.location.hash = '';
    }, 50);
}
function setMoonPhase(moon, date = new Date()) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    let r = year % 100;
    r %= 19;
    if (r > 9) r -= 19;
    let phase = ((r * 11) % 30 + month + day) % 30;
    if (phase < 0) phase += 30;
    const phaseNormalized = phase / 29;
    let offset = (phaseNormalized <= 0.5) 
        ? 50 + 50 * phaseNormalized * 1.4 
        : 100 - 50 * (phaseNormalized - 0.5) * 1.4;
    const gradient = `radial-gradient(circle at ${offset}% 50%, transparent 40%, black 100%)`;
    moon.style.webkitMaskImage = gradient;
    moon.style.maskImage = gradient;
}
function autoDarkMode() {
    const currentHour = new Date().getHours();
    if (currentHour >= 20 || currentHour <= 6) {
        document.body.classList.add('dark-mode');
        setMoonPhase(moon);
        sun.style.visibility='hidden';
        moon.style.visibility='visible';
        toggleButton.top = currentHour;
        updateLeetCardTheme();
        let hour = currentHour >= 20 ? currentHour : currentHour + 24;
        let nightProgress = (hour - 20) / 10;
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const radius = screenHeight / 4;
        const angle = nightProgress * Math.PI;
        const centerX = screenWidth / 2;
        const centerY = screenHeight / 2;
        const moonX = centerX + radius * Math.cos(angle - Math.PI);
        const moonY = centerY + radius * Math.sin(angle - Math.PI);
        toggleButton.style.left = `${moonX}px`;
        toggleButton.style.top = `${moonY}px`;
    }else{
        dayProgress = (currentHour - 6) / 14;
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const radius = screenHeight / 4;
        const angle = dayProgress * Math.PI;
        const centerX = screenWidth / 2;
        const centerY = screenHeight / 2;
        const sunX = centerX + radius * Math.cos(angle - Math.PI);
        const sunY = centerY + radius * Math.sin(angle - Math.PI);
        toggleButton.style.left = `${sunX}px`;
        toggleButton.style.top = `${sunY}px`;
    }
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        magnettoheader()
    }
});
function swishEffect() {
    const swishElements = document.querySelectorAll('.swish');
    swishElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        if (elementPosition < viewportHeight - 100) {
            element.classList.add('active');
        }else{
            element.classList.remove('active');
        }
    });
}
window.addEventListener('scroll', swishEffect);
swishEffect();
document.addEventListener('DOMContentLoaded', function() {
    magnettoheader();
    const starContainer = document.querySelector('.stars');
    const starcolors = ['#ffffff', '#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', '#fff59d', '#fff176', '#ffeb3b'];
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.width = Math.random() * 5 + 2 + 'px'; 
        star.style.height = star.style.width; 
        star.style.backgroundColor =  starcolors[Math.floor(Math.random() * starcolors.length)];
        starContainer.appendChild(star);
    }
    const cloudContainer = document.querySelector('.clouds');
    const cloudColor = ['#ffffff', '#f2f2f2', '#e6e6e6'];
    const cloudarr=['cloud1.png','cloud2.png','cloud3.png'];
    for (let i = 0; i < 10; i++) {
        const cloud = document.createElement('img');
        const size = Math.random() * 100 +100; 
        cloud.src = cloudarr[Math.floor(Math.random() * cloudarr.length)];
        cloud.className = 'cloud';
        cloud.style.left = Math.random() *100  + 'vw';
        cloud.style.top = Math.random() * 50+ 'vh';
        cloud.style.width = size + 'px'; 
        cloud.style.height = size * 0.6 + 'px'; 
        cloudContainer.appendChild(cloud);
    }
    setInterval(randomcloud, 20000);
    autoDarkMode();
    updateLeetCardTheme(); 
});
function randomcloud(){
    clouds=document.getElementsByClassName("cloud");
    for (let i=0;i<clouds.length;i++){
        clouds[i].style.left=Math.random() * 100 + 'vw';
        clouds[i].style.top = Math.random() * 100 + 'vh';
    }
}
function updateLeetCardTheme() {
    const darkModeActive = document.body.classList.contains('dark-mode'); 
    const theme = darkModeActive ? 'dark' : 'light';
    const username = 'Ghua8088';
    const url = `https://leetcard.jacoblin.cool/${username}?theme=${theme}&font=Roboto&ext=heatmap`;
    leetCard.src = url; 
}