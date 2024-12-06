// global variables
const fw = 600;
const fh = 600;
const cw = fw / 2;
const ch = fh / 2;

function backgroundSet() {
  background(210, 40, 0);
}

function Circlepop(x, y, d, px, py, r, g, b) {
  // x,y of base(shadow) layer
  // d diameter
  // px,py gap between base and top layer
  fill(0, 0, 0);
  circle(x, y, d);
  fill(r, g, b);
  circle((x - px), (y - py), d);
}

const democircle = (x, y, d) => Circlepop(x, y, d, 11, 11, 255, 255, 255);

function multiCircleRandomPop(howmany) {
  for (let i = 0; i < howmany; i++) {
    democircle(random(fw), random(fh), 40);
  }
}

function multiCircleLinPop(gap) {
  for (let x = 0; x < fw + 40;) {
    for (let y = 0; y < fh + 40;) {
      democircle(x, y, 40);
      y = y + gap;
    }
    x = x + gap;
  }
}

function clearCanvas() {
  backgroundSet();
}

function setup() {
  createCanvas(fw, fh);
  backgroundSet();
  window.document.getElementById("randregen").addEventListener("click", () => {
    multiCircleRandomPop(50);
  });
  window.document.getElementById("gridregen").addEventListener("click", () => {
    multiCircleLinPop(50);
  });
  window.document.getElementById("clearCanvas").addEventListener("click", () => {
    clearCanvas()
  });
  window.document.getElementById("saveCanvas").addEventListener("click", () => {
    saveCanvas("circlepop")
  });
}
