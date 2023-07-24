// initial color to use on the pad
let color = "black";

/* creating a boolean variable that
will allow us to click on a color and change 
the color of the drawing pad
*/
let click = true;

/*
creating a function that will allow me  to create 
 a drawing pad using a 16 x16 grid and filling that grid
 with a bunch of small div

*/

function createPad() {
  let pad = document.querySelector(".pad");
 
  // creating 16 columns and each column will occupy 1/16th of the grid
  pad.style.gridTemplateColumns = "repeat(16, 1fr)"; 
  
  // creating 16 rows and each row will occupy 1/16th of the grid
  pad.style.gridTemplateRows = "repeat(16, 1fr)";

 /*
 using a for loop to create (16x16 = 256) divs and storing 
 them in the already created div pad
 */
  for (let i = 0; i < 256; i++) {
    let squaredDivs = document.createElement("div");
    squaredDivs.addEventListener("mouseover", divColor);
    squaredDivs.style.backgroundColor = "white";
    pad.insertAdjacentElement("beforeend", squaredDivs);
  }
}

// calling the createPad function we just created
createPad();


/*

function to click on a color of choice
to draw on the drawing pad

*/

function divColor() {
  if (click) {
    
      this.style.backgroundColor = color;
    
  }
}

function changeColor(choice) {
  color = choice;
}

/*
function to reset the drawing pad 
to its initial look

*/

function reset() {
  let pad = document.querySelector(".pad");
  let squares = pad.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}
