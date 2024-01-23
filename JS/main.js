// let $ = jQuery.noConflict();

let userBallance = null;
let userBallanceUpdated = null;

// initial disabling of the cancel buttons
document.getElementById("cancelRentButton").disabled = true;

//disable paying things if the ballance is too low
/*if (userBallanceUpdated< rent, grocer, ...) {
  disable all buttons
}
*/

//Rent
let AmountRent = null;
let rentPaid = false;
//once the grocery price is set do an if

//testing! need to change for user input
AmountRent = 100.00;


//Groceries
let priceGroceries = null;
let groceriesPaid = false;
//once the grocery price is set enable the button, otherwise keep them disabled
function updateGroceryButtons() {
  if (priceGroceries !== null) {
    document.getElementById("cancelGrocer").disabled = false;
    document.getElementById("payGrocer").disabled = false;
  } else {
    document.getElementById("cancelGrocer").disabled = true;
    document.getElementById("payGrocer").disabled = true;
  }
}
updateGroceryButtons();

function setBallance() {
    // making sure the ballance does not stack up when repeatedly clicked
    // getting the value from the input form
    let userInput = document.getElementById("userInputBallance").value;
    let userBallanceDisplay = document.getElementById("ballanceDisplay");
    // updates the text based on the user's input
    userBallanceDisplay.textContent = "Your real ballance is: " + parseFloat(userInput).toFixed(2);
    // updating the real ballance according to the input and creating the fictional ballance base
    userBallance = userInput;
    userBallanceUpdated = userBallance;
    console.log(userBallance);
    console.log(userInput);
    displayFictionalBallance();
    return userBallance, userBallanceUpdated;
  }

function alertSetBallance() {
  alert("Please, input your coin first")
}

function displayFictionalBallance() {
  let fictionalBallanceDisplay = document.getElementById("fictionalBallance");
  if (userBallanceUpdated==null){
    fictionalBallanceDisplay.textContent = ""
  } else{
    fictionalBallanceDisplay.textContent = ""+ parseFloat(userBallanceUpdated).toFixed(2);
    }
  }

// User clicks on Pay rent and the amount is deducted from their ballance
function payRent() {
  if (rentPaid === false & userBallanceUpdated>AmountRent) {
  userBallanceUpdated -= AmountRent;
  rentPaid = true;
  console.log(userBallanceUpdated)
  console.log(rentPaid)
  document.getElementById("cancelRentButton").disabled = false;
  document.getElementById("payRentButton").disabled = true;
  document.getElementById('imageRent').src='/images/castle upgrade.png';
  console.log(rentPaid)
  displayFictionalBallance()
  return userBallanceUpdated, rentPaid;
} else {
  alert("Your ballance is insufficient")
}
  //insert changing updating the user imaginary user ballance
  //insert changing the image - take it out of html
  //disable the pay button! &enable the cancel button
}

function cancelRent() {
  if (rentPaid === true) {
  userBallanceUpdated += AmountRent;
  rentPaid = false;
  console.log(userBallanceUpdated)
  console.log(rentPaid)
  document.getElementById("cancelRentButton").disabled = true;
  document.getElementById("payRentButton").disabled = false;
  document.getElementById('imageRent').src='/images/castle realistic.png';
  displayFictionalBallance()
  return rentPaid, userBallanceUpdated;
  }
}

//how do i make sure the current ballance is updated all the time everywhere??


//debugging
console.log(userBallance);
console.log(userBallanceUpdated);