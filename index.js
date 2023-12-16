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

function OnStart() {
  EnableSection("finance", false);
  EnableSection("sql", false);
  EnableSection("python", false);
  EnableSection("present", false);
}
// On Start application
window.addEventListener("load", OnStart);

var startButton = document.getElementById("dummy-button");
startButton.addEventListener("click", () => EnableSection("finance", true));

var finance_section = document.getElementById("finance-section");
var sql_section = document.getElementById("sql-section");
var python_section = document.getElementById("python-section");
var present_section = document.getElementById("present-section");
// Result of each section
var finance_result = document.getElementById("finance-result");
var sql_result = document.getElementById("sql-result");
var python_result = document.getElementById("python-result");
// Input section
var finance_input = document.getElementById("finance-input");
var sql_input = document.getElementById("sql-input");
var python_input = document.getElementById("python-input");

function EnableSection(section, enable = true) {
  switch (section) {
    case "finance":
      finance_section.style.display = enable ? "block" : "none";
      finance_result.style.display = "none";
      break;
    case "sql":
      sql_section.style.display = enable ? "block" : "none";
      sql_result.style.display = "none";
      break;
    case "python":
      python_section.style.display = enable ? "block" : "none";
      python_result.style.display = "none";
      break;
    case "present":
      present_section.style.display = enable ? "block" : "none";
      break;
  }
}

function EnableSectionResult(section) {
  switch (section) {
    case "finance":
      finance_input.style.display = "none";
      finance_result.style.display = "block";
      break;
    case "sql":
      sql_input.style.display = "none";
      sql_result.style.display = "block";
      break;
    case "python":
      python_input.style.display = "none";
      python_result.style.display = "block";
      break;
  }
}

// function animate() {
//   // Perform your animation or update logic here
//   moveTheButton();
//   // Call requestAnimationFrame again to schedule the next frame
//   requestAnimationFrame(animate);
// }

// // Start the animation loop
// requestAnimationFrame(animate);

function generateTable() {
  // Number of rows and columns in the table
  const numRows = 500;
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
  }
}

function getRandomValue() {
  // Generate a random number between 1 and 100 for demonstration purposes
  return Math.floor(Math.random() * 100) + 1;
}

function openModal(
  message = "Congratulation you got the right answer, please move on"
) {
  var overlay = document.getElementById("overlay");
  document.getElementById("overlay-content").textContent = message;
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
