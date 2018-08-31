let temp = 26;
window.onload = function() {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  const r = 150;
  drawWraperLine(context, r);
  drawArea(context, r);
  drawWraperLine(context, r-40, 'black');
  drawArea(context, r-15);
  drawText(context, temp);
  drawTemperature(context);
}

function drawWraperLine(context, r, color) {
  const _i = 155 + Math.floor(temp / (48 / 232));
  for (let i = 155;i <= 387; i += 3) {
    context.beginPath();
    context.strokeStyle=color || '#17c017';
    if (i > _i) {
      context.strokeStyle='#000';
    }
    context.moveTo(200,200);
    const deg = Math.PI / 180 * i;
    context.lineTo(200 + r * Math.cos(deg), 200 + r * Math.sin(deg));
    context.lineWidth=1;
    context.stroke();
    context.closePath();
  }
}

function drawArea(context, r) {
  context.beginPath();
  context.arc(200, 200, r-30, Math.PI / 180 * 0, Math.PI / 180 * 360);
  context.fillStyle='#fff';
  context.fill();
  context.closePath();
}

function drawText(context, text) {
  context.font='50px sans-serif';
  context.fillStyle='black';
  context.fillText(text + '°', 170, 210);
}

function drawTemperature(context) {
  context.font='16px sans-serif';
  context.fillStyle='black';
  context.fillText(0, 110, 250);
  context.fillText(24, 190, 110);
  context.fillText(48, 270, 250);
  context.fillText('中风', 185, 240);
}
