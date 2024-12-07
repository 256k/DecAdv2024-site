// global variables
const fw = 600;
const fh = 600;
const cw = fw / 2;
const ch = fh / 2;

let mousesize = 22;
let letter='a';

function backgroundSet() {
  background(255, 255, 255);
}

function clearCanvas() {
  backgroundSet();
}

function mouseClicked(event) {
    console.log(event.x, event.y)
    textSize(mousesize);
    translate(-mousesize,-mousesize);
  text(letter, event.x,event.y);
  console.log("letter", letter)
}

function keyPressed(event) {
  // Code to run that uses the event.
  console.log(event.key, mousesize);
  letter = event.key
}

function setup() {
  let cvx = createCanvas(fw, fh);
  cvx.mouseWheel(
    (event) => {
      console.log(event.deltaY);
      if (mousesize === 0) return 0;
      if (event.deltaY < 0) {
        mousesize = mousesize - 1;
      } else if (event.deltaY > 0) {
        mousesize = mousesize + 1;
      }
    }
    

  )
  backgroundSet();
  circle(10,10,10,10);
  window.document.getElementById("clearCanvas").addEventListener("click", () => {
    clearCanvas()
  });
  window.document.getElementById("saveCanvas").addEventListener("click", () => {
    saveCanvas("circlepop")
  });

  //...
  textSize(mousesize);
  
  text(letter, cw,ch);

  
  

}

function draw() {
  
}