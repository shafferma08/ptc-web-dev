// Binary Rain Animation
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = '01';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }).fill(1);

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#0F0';
  ctx.font = fontSize + 'px monospace';

  drops.forEach((y, x) => {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, x * fontSize, y * fontSize);
    if (y * fontSize > canvas.height && Math.random() > 0.975) drops[x] = 0;
    drops[x]++;
  });
}

setInterval(drawMatrix, 35);