// Get the value from the field with ID 111480518
var fieldValue = parseFloat(document.getElementById("111997141").textContent);

// Round the field value to two decimal places using Math.round()
var roundedValue = Math.round(fieldValue * 100) / 100;

// Display the rounded value
console.log("Original Value: " + fieldValue);
console.log("Rounded Value: " + roundedValue);
