export function backgroundGenerator(ctx) {
  const { width, height } = ctx.canvas;
  const centerX = width / 2, centerY = height / 2;
  const tenthW = width * 0.005, tenthH = height * 0.005;
  ctx.clearRect(0, 0, width, height);
  ctx.moveTo(centerX, centerY);
  ctx.beginPath();
  ctx.strokeStyle = 'rgba(255,255,255, 0.1)';
  for (let i = 0; i < width + height; i++) {
    const angle = 0.05 * i;
    const x = centerX + (((tenthW + tenthH) * i / 1000) * angle) * Math.cos(angle);
    const y = centerY + (((tenthW + tenthH) * i / 1000) * angle) * Math.sin(angle);
    ctx.lineWidth = 2.5;
    ctx.lineTo(x, y);
  }
  ctx.stroke();
}