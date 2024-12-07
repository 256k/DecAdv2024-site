// global variables
const fw = 600;
const fh = 600;
const cw = fw / 2;
const ch = fh / 2;

function backgroundSet() {
  background(210, 40, 0);
}

function clearCanvas() {
  backgroundSet();
}

function setup() {
  createCanvas(fw, fh);
  backgroundSet();

  window.document.getElementById("clearCanvas").addEventListener("click", () => {
    clearCanvas()
  });
  window.document.getElementById("saveCanvas").addEventListener("click", () => {
    saveCanvas("circlepop")
  });
}
