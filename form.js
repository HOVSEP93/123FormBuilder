function roundResult() {
  // Retrieve the value of the field
  var result1 = parseFloat(loader.engine.document.getElementById('111480518').getProperty("value.value"));

  // Round the value to two decimal places
  var roundedValue1 = +(Math.round(result1 * 100) / 100).toFixed(2);

  // Set the rounded value back to the field
  loader.engine.document.getElementById('111480518').setValue({ value: roundedValue1 });
}

// Attach the roundResult function to the onchange event of the field
loader.engine.document.getElementById('111480518').onchange = roundResult;
