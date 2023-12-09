var xPosition = 100;
var yPosition = 100;
function moveTheButton() {
  var element = document.getElementById("dummy-button");
  // xPosition += 1;
  // yPosition +=1;
  var evaluatedString = `translate(${xPosition}px,${yPosition}px)`;
  element.style.transform = evaluatedString;
}
function draw() {
  const canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, 50, 50);
  }
}

// function hello(){
//     console.log("Hello");
// }
// setInterval(hello,10);
window.addEventListener("load", draw);
var element = document.getElementById("dummy-button");

element.addEventListener("click", generateTable);
function animate() {
  // Perform your animation or update logic here
  moveTheButton();
  // Call requestAnimationFrame again to schedule the next frame
  requestAnimationFrame(animate);
}

// Start the animation loop
requestAnimationFrame(animate);

function generateTable() {
  // Number of rows and columns in the table
  const numRows = 5;
  const numCols = 4;

  // Get the table element
  var table = document.getElementById("randomTable");

  // Clear existing content
  table.innerHTML = "";

  // Generate table header
  var headerRow = table.insertRow(0);
  for (var j = 0; j < numCols; j++) {
    var headerCell = headerRow.insertCell(j);
    headerCell.innerHTML = "Header " + (j + 1);
  }

  // Generate random data for the table
  for (var i = 1; i <= numRows; i++) {
    var row = table.insertRow(i);
    for (var j = 0; j < numCols; j++) {
      var cell = row.insertCell(j);
      cell.innerHTML = getRandomValue();
    }
  }
}

function getRandomValue() {
  // Generate a random number between 1 and 100 for demonstration purposes
  return Math.floor(Math.random() * 100) + 1;
}

function formatText(command) {
  document.execCommand(command, false, null);
}

function insertLink() {
  var url = prompt("Enter URL:");
  if (url) {
    document.execCommand("createLink", false, url);
  }
}
