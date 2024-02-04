document.addEventListener("DOMContentLoaded", function () {
    // Get the calculator form and display input field
    var calculatorForm = document.forms.calculator;
    var displayField = calculatorForm.display;
  
    // Get all the buttons
    var buttons = calculatorForm.querySelectorAll(".button");
  
    // Add click event listeners to the buttons
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
          // Handle button click based on button value
          handleButtonClick(button.value);
      });
    });
  
    // Function to handle button click
    function handleButtonClick(value) {
      // Check for the type of button and update the display accordingly
      switch (value) {
        case "AC":
          displayField.value = "";
          break;
        case "=":
          displayField.value = eval(displayField.value);
          break;
        default:
          displayField.value += value;
          break;
      }
    }
  });
  