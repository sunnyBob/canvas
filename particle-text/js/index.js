var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var dots = [];

fillText('HELLO');
drawTextShape();

function drawTextShape() {
  var imgData = context.getImageData(0, 0, 500, 500);
  var row = imgData.width;
  var col = imgData.height;

  for(var i = 1; i < row; i+=4) {
    for(var j = 1; j < col; j+=4) {
      var pos = (j - 1) * row + (i -1);
      if (imgData.data[pos * 4] > 0) {
        dots.push({
          x: i,
          y: j,
          r: 1,
        });
      }
    }
  }

  draw();
}

function fillText(text) {
  setFontSize(100);
  context.textAlign='center';
  context.fillStyle='red';

  context.fillText(text, 250, 250);
}

function setFontSize(fontSize) {
  context.font= fontSize + 'px sans-serif';
}

function draw() {
  context.clearRect(0, 0, 500, 500);
  dots.forEach(function (dot) {
    context.fillRect(dot.x, dot.y, dot.r, dot.r);
  });
}
