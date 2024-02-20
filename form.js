function roundResult() {
  var result1 = loader.engine.document
    .getElementById(111480518)
    .getProperty("value.value");
  var roundedValue1 = +(Math.round(result1 * 100) / 100).toFixed(2);
  loader.engine.document
    .getElementById(111480518)
    .setValue({ value: roundedValue1 });
}

window.onclick = roundResult;
