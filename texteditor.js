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

document.addEventListener("keydown", function (event) {
  // Check if Ctrl (Cmd on Mac) and 'F' keys are pressed
  if ((event.ctrlKey || event.metaKey) && event.key === "f") {
    event.preventDefault(); // Prevent the default Ctrl+F (Find) behavior

    // Your custom action when Ctrl+F is pressed
    console.log("Ctrl+F pressed! Your custom action goes here.");
  }
});
