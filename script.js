document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('openBtn');
  const envelope = document.getElementById('envelope');

  if (!btn || !envelope) {
    console.error("❌ Elementos não encontrados no DOM.");
    return;
  }

  btn.addEventListener('click', () => {
    // Adiciona classe que ativa a animação
    envelope.classList.add('open');

    // Esconde o botão depois de abrir
    btn.style.display = 'none';

    // Inicia os confetes após a animação do envelope
    setTimeout(() => startConfetti(), 1200);
  });

  // 🎊 EFEITO DE CONFETE
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

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});
