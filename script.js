const toggleButton = document.getElementById('darkModeToggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleButton.innerText = document.body.classList.contains('dark-mode') ? '🌙' : '☀️';
});
function magnettoheader(){
    window.location.hash = '#header';
    setTimeout(() => {
        window.location.hash = '';
    }, 50);
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        magnettoheader()
    }
});
document.addEventListener('DOMContentLoaded', function() {
    magnettoheader();
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
document.addEventListener('DOMContentLoaded', function() {
    const cloudContainer = document.querySelector('.clouds');
    const cloudColor = ['#ffffff', '#e0e0e0', '#f0f0f0'];
    for (let i = 0; i < 10; i++) {
        const cloud = document.createElement('img');
        const size = Math.random() * 100 + 20; 
        cloud.src = 'cloud.svg';
        cloud.className = 'cloud';
        cloud.style.left = Math.random() * 100 + 'vw';
        cloud.style.top = Math.random() * 100 + 'vh';
        cloud.style.width = size + 'px'; 
        cloud.style.height = size * 0.6 + 'px'; 
        cloudContainer.appendChild(cloud);
       
    }
    setInterval(randomcloud, 20000);
});
function randomcloud(){
    clouds=document.getElementsByClassName("cloud");
    for (let i=0;i<clouds.length;i++){
        clouds[i].style.left=Math.random() * 100 + 'vw';
        clouds[i].style.top = Math.random() * 100 + 'vh';
    }
}
function checkSystemDarkMode() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

