const btn = document.getElementById('openBtn');
const msg = document.getElementById('messageBox');
const envelope = document.getElementById('envelope');

btn.addEventListener('click', () => {
    envelope.style.opacity = '0';
    envelope.style.transform = 'scale(0.8)';
    setTimeout(() => {
        envelope.style.display = 'none';
        msg.classList.add('show');
        startConfetti();
    }, 600);
    btn.style.display = 'none';
});

// 🎊 Confetti effect
const canvas = document.querySelector('.confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let confetti = [];

for(let i=0; i<150; i++) {
    confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: Math.random() * 6 + 2,
        d: Math.random() * 10 + 5,
        color: `hsl(${Math.random()*360}, 100%, 70%)`
    });
}

function drawConfetti() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    confetti.forEach(c => {
        ctx.beginPath();
        ctx.fillStyle = c.color;
        ctx.fillRect(c.x, c.y, c.r, c.r);
        ctx.closePath();
    });
    updateConfetti();
}

function updateConfetti() {
    confetti.forEach(c => {
        c.y += Math.cos(c.d) + 1 + c.r/2;
        if(c.y > canvas.height) {
            c.y = -10;
            c.x = Math.random() * canvas.width;
        }
    });
}

function startConfetti() {
    setInterval(drawConfetti, 20);
}
