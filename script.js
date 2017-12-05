var guessInput = document.querySelector('.guess-input');
var submitButton = document.querySelector('.guess-button');
var lastGuess = document.querySelector('.last-guess');
var randomNumber = Math.floor(Math.random()* 100);
var feedback = document.querySelector('.feedback');
var clearButton = document.querySelector('.clear-button');


submitButton.addEventListener('click', displayRecentGuess);
submitButton.addEventListener('click', answerFeedback);
guessInput.addEventListener('keyup', enableClearButton);

function displayRecentGuess(event) {
  event.preventDefault();
  lastGuess.innerHTML = guessInput.value;
}

function answerFeedback() {
  console.log(randomNumber);
  var minNumber = 0;
  var maxNumber = 100;
  if (parseInt(guessInput.value) < minNumber) {
    feedback.innerHTML = 'This is below the minimum'
  } else if (parseInt(guessInput.value) < randomNumber) {
    feedback.innerHTML = 'That is too low';
  } else if (parseInt(guessInput.value) > maxNumber) {
    feedback.innerHTML = 'This is above the maximum'
  } else if (parseInt(guessInput.value) > randomNumber) {
    feedback.innerHTML = 'That is too high';
  } else if (parseInt(guessInput.value) == randomNumber) {
    feedback.innerHTML = 'Boom';
  } else {
    feedback.innerHTML = 'That\'s out of the range'
  }
}


function enableClearButton() {
  if (guessInput.value.length === 0) {
    clearButton.disabled = true;
  } else {
    clearButton.disabled = false;
  }   
}

// function clearInput() {
//   // clearButton to clear the guess input
// }

// function resetGame() {
//   // reset button to reset the entire page
// }
