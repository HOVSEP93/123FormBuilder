function roundResult() {
  const result1 = loader.engine.document
    .getElementById(113552407)
    .getProperty("value.value");
  const roundedValue1 = +(Math.round(result1 * 100) / 100).toFixed(2);
  loader.engine.document
    .getElementById(113552407)
    .setValue({ value: roundedValue1 });

  loader.engine.document
    .getElementById(113552405)
    .addEventListener("click", roundResult);
}

window.onclick = roundResult;
