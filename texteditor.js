var textarea = document.getElementById("editor");

textarea.addEventListener("keydown", function (event) {
  if (event.key === "Tab") {
    event.preventDefault();

    // Insert a tab character at the current cursor position
    var start = this.selectionStart;
    var end = this.selectionEnd;

    // Set the new value
    this.value =
      this.value.substring(0, start) + "        " + this.value.substring(end);

    // Move the cursor to the position after the inserted tab
    this.selectionStart = this.selectionEnd = start + 1;
  }
});

// ############ FINANCE SECTION #################
document.getElementById("submit-finance").addEventListener("click", () => {
  let input = document.getElementById("finance-answer");
  if (input.value === "0.1712") {
    openModal("Congratulation you've passed finance section");
    EnableSection("python", true);
    EnableSectionResult("finance");
  }
});

// ############ PYTHON SECTION ################
document.getElementById("submit-python").addEventListener("click", () => {
  let score = countWordOccurrences(textarea.value, [
    "for",
    "in",
    "numbers",
    "sum",
  ]);
  if (score > 3) {
    openModal("Congratulation you've passed the Python section");
    EnableSection("sql", true);
    EnableSectionResult("python");
    generateTable();
  }
});

var sqlInput = document.getElementById("input-sql");

// ############ SQL SECTION ################
document.getElementById("submit-sql").addEventListener("click", () => {
  let score = countWordOccurrences(sqlInput.value, [
    "select",
    "from",
    "people",
    "171202",
  ]);
  if (score > 3) {
    openModal(
      "Wow glad to know that you've made it this far, behold.........."
    );
    ShowResultForSqlSection();
    EnableSectionResult("sql");
    // EnableSection("finance", false);
    // EnableSection("sql", false);
    // EnableSection("python", false);
  }
});

function CleanUpAllSection() {
  var title = document.getElementById("Big-title");
  title.innerText = "Voila, tada";
  EnableSection("finance", false);
  EnableSection("sql", false);
  EnableSection("python", false);
}

// Anti cheat
document.addEventListener("keydown", function (event) {
  // Check if Ctrl (Cmd on Mac) and 'F' keys are pressed
  if ((event.ctrlKey || event.metaKey) && event.key === "f") {
    event.preventDefault(); // Prevent the default Ctrl+F (Find) behavior

    // Your custom action when Ctrl+F is pressed
    console.log("Ctrl+F pressed! Your custom action goes here.");

    openModal("You try to cheat huh, not gonna happen, nice try :))");
  }
});
