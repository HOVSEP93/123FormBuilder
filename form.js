function calculateResult() {
  var amount = parseFloat(document.getElementById(111863965).value);
  var term = parseInt(document.getElementById(111480652).value);

  if (isNaN(amount) || isNaN(term) || term <= 0) {
    // If either amount or term is not a number or term is less than or equal to 0, exit
    return;
  }

  var result = amount / (term * 26);
  var roundedResult = Math.ceil(result * 100) / 100; // Rounding up to two decimal places

  document.getElementById(111480518).value = roundedResult.toFixed(2); // Displaying rounded result with two decimal places
}

// Call the calculateResult function whenever there is a change in Field A or Field B
document.getElementById(111863965).addEventListener("input", calculateResult);
document.getElementById(111480652).addEventListener("input", calculateResult);

// Initial calculation when the page loads
calculateResult();
