const btn = document.getElementById('openBtn');
const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');

// Quando clicar no botão “Abrir 💌”
btn.addEventListener('click', () => {
    // Adiciona a classe que abre o envelope
    envelope.classList.add('open');

    // Esconde o botão depois de clicar
    btn.style.display = 'none';

    // Mostra a carta com atraso (após a aba abrir)
    setTimeout(() => {
        letter.style.opacity = '1';
        letter.style.transform = 'translateY(0)';
        startConfetti();
    }, 800);
});


// 🎊 EFEITO DE CONFETE (mantido do seu código)
const canvas = document.querySelector('.confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let confetti = [];

for (let i = 0; i < 150; i++) {
    confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: Math.random() * 6 + 2,
        d: Math.random() * 10 + 5,
        color: `hsl(${Math.random() * 360}, 100%, 70%)`
    });
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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
        c.y += Math.cos(c.d) + 1 + c.r / 2;
        if (c.y > canvas.height) {
            c.y = -10;
            c.x = Math.random() * canvas.width;
        }
    });
}

function startConfetti() {
    setInterval(drawConfetti, 20);
}

// Ajusta o canvas se a janela mudar de tamanho
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
