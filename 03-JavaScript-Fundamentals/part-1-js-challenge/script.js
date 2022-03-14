function calculateYearsUntilRetirement(event) {
  const currentAge = event.target.value;
  let yearsToRetirement = 65 - currentAge;

  // start your code here
  alert(yearsToRetirement)
}


// translate hello and goodbye into french for users
// if it is neither then alert "not recongnised"
function getGreetingInFrench(event) {
  const greeting = event.target.value;

  if (greeting == "hello") {      // Remember the double == is equal to
    alert("bonjour");
  }
  else if (greeting == "goodbye") {  // can use either "" or '' 
    alert("au revior");
  }

  else {
    alert("not recognised");
  }
}


// minutes per second - Rounded to Nearest minute
function getCalcMinsToSeconds(event) {
  const minsWhole = event.target.value;

  if (minsWhole > 0) {
    alert(Math.round(minsWhole / 60));
  }

  else {
    alert("Please enter in seconds in whole number value only");
  }

}