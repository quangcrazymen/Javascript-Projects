var xPosition = 100;
var yPosition = 100;
function moveTheButton() {
  var element = document.getElementById("dummy-button");
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

window.addEventListener("load", draw);
var element = document.getElementById("dummy-button");
element.addEventListener("click", generateTable);
var finance_section = document.getElementById("finance-section");
finance_section.addEventListener("input", compareWithRightValue);
var sql_section = document.getElementById("sql-section");

function compareWithRightValue() {
  console.log("Hello");
  if (finance_section.value === "123") {
    openModal();
  }
  if (finance_section.value === "terminate") {
    sql_section.style.display = "none";
  }
}

function terminateSQLSection() {}

function moveElement2() {
  element2.style.transform = `translate(${xPosition}px,${yPosition}px)`;
}
function animate() {
  // Perform your animation or update logic here
  moveTheButton();
  // Call requestAnimationFrame again to schedule the next frame
  requestAnimationFrame(animate);
}

// Start the animation loop
requestAnimationFrame(animate);

function generateTable() {
  console.log(getRandomName());
  // Number of rows and columns in the table
  const numRows = 50;
  const numCols = 6;

  // Get the table element
  var table = document.getElementById("randomTable");

  // Clear existing content
  table.innerHTML = "";

  var headerName = ["Id", "Name", "Gender", "Age", "Interest", "Hobbies"];
  // Generate table header
  var headerRow = table.insertRow(0);
  for (var j = 0; j < numCols; j++) {
    var headerCell = headerRow.insertCell(j);
    headerCell.innerHTML = headerName[j];
  }

  // Generate random data for the table
  for (var i = 1; i <= numRows; i++) {
    var row = table.insertRow(i);
    // for (var j = 0; j < numCols; j++) {
    var id = row.insertCell(0);
    id.innerHTML = getRandomInteger(0, 999999);
    var name = row.insertCell(1);
    name.innerHTML = getRandomName();
    var gender = row.insertCell(2);
    gender.innerHTML = genders[getRandomInteger(0, 1)];
    var age = row.insertCell(3);
    age.innerHTML = getRandomInteger(0, 60);
    var interest = row.insertCell(4);
    interest.innerHTML = getRandomHobbies();
    var hobbies = row.insertCell(5);
    hobbies.innerHTML = getRandomHobbies();
    // }
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

function openModal() {
  var overlay = document.getElementById("overlay");
  overlay.style.display = "flex";
}

function closeModal() {
  var overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomName() {
  return (
    listOfName[getRandomInteger(0, 220)] +
    " " +
    listOfName[getRandomInteger(0, 220)]
  );
}

function getRandomHobbies() {
  return (
    listOfHobbies[getRandomInteger(0, 31)] +
    ", " +
    listOfHobbies[getRandomInteger(0, 31)] +
    ", " +
    listOfHobbies[getRandomInteger(0, 31)]
  );
}
