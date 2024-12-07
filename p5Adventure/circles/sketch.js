// global variables
const fw = 600;
const fh = 600;
const cw = fw / 2;
const ch = fh / 2;

function backgroundSet() {
  background(255, 255, 255);
}

function clearCanvas() {
  backgroundSet();
}

function DrawCircle( x,  y, r)
{
      const  PI = 3.1415926535;
      let i, angle, x1, y1;

      for(i = 0; i < 360; i += 0.1)
      {
            angle = i;
            x1 = r * cos(angle * PI / 180);
            y1 = r * sin(angle * PI / 180);
        stroke(0, 0,0);
        strokeWeight(i/ 64);
            line(x + x1, y + y1,x + x1, y + y1);
      }
}
let z = 0;

function setup() {
  createCanvas(fw, fh);
  backgroundSet();
  window.document.getElementById("clearCanvas").addEventListener("click", () => {
    clearCanvas()
  });
  window.document.getElementById("saveCanvas").addEventListener("click", () => {
    saveCanvas("circles")
  });
}

function draw() {
	// background(255);
  // frameRate(10);
  
    DrawCircle(150, 150, (10 + z*10));
  if (z > 1000) {
    z = 0;
    return
    console.log("wtf")
  } else {
    z = z + 1;
  }
}
