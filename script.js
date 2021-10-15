const startButton = document.getElementById("start");
const gridContainer = document.querySelector("#container");

let theStartButton = document.getElementById("start")

 startButton.addEventListener("click", function () {
  let size = prompt("Pick a number ranging fom 0-64");
  if (size < 1 || size > 64 || Number.isNaN(size)) {
    createGrid();
    createCell();
    return alert("Please pick a valid grid size");
  }
clearGrid();
createGrid(size);
createCell(size);
});


function createCell (gridRows) {
  for (i =  0; i < gridRows * gridRows ; i++) {
   let div = document.createElement("div");
   document.getElementById("container").appendChild(div);
    div.addEventListener("mouseenter", defaultColor);
   }      
}

function createGrid (grid) {
  gridContainer.style.setProperty('--gridRows', grid); 
  gridContainer.style.setProperty('--gridCols', grid);
}



function clearGrid  ()  {
  const gridArray = Array.from(gridContainer.childNodes);
  gridArray.forEach((element) => {
    gridContainer.removeChild(element);
  });
}  

//picks colours
function defaultColor () {
  this.style.backgroundColor = "black";
}
