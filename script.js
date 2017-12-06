var guessInput = document.querySelector('.guess-input');
var submitButton = document.querySelector('.guess-button');
var lastGuess = document.querySelector('.last-guess');
var randomNumber = Math.floor(Math.random()* 100);
var feedback = document.querySelector('.feedback');
var clearButton = document.querySelector('.clear-button');
var resetButton = document.querySelector('.reset-button');
var userGuess = document.querySelector('.user-guess');


submitButton.addEventListener('click', displayRecentGuess);
submitButton.addEventListener('click', answerFeedback);
guessInput.addEventListener('keyup', enableClearButton);
clearButton.addEventListener('click', clearInput);
guessInput.addEventListener('keyup', enableResetButton);
resetButton.addEventListener('click', resetPage);

function displayRecentGuess(event) {
  event.preventDefault();
  lastGuess.innerHTML = guessInput.value;
  console.log('guessing');
}

function answerFeedback() {
  console.log(randomNumber);
  var minNumber = 0;
  var maxNumber = 100;
  if (parseInt(guessInput.value) < minNumber) {
    feedback.innerHTML = 'Your guess is below the minimum number of 0'
  } else if (parseInt(guessInput.value) < randomNumber) {
    feedback.innerHTML = 'That is too low';
  } else if (parseInt(guessInput.value) > maxNumber) {
    feedback.innerHTML = 'Your guess is above the maximum number of 100'
  } else if (parseInt(guessInput.value) > randomNumber) {
    feedback.innerHTML = 'That is too high';
  } else if (parseInt(guessInput.value) == randomNumber) {
    feedback.innerHTML = 'Boom';
  } else {
    feedback.innerHTML = 'That\'s not a number'
  }
}

function enableClearButton() {
  if (guessInput.value.length === 0) {
    clearButton.disabled = true;
  } else {
    clearButton.disabled = false;
  }   
}

function clearInput(event) {
  event.preventDefault();
  guessInput.value = ('');
}

function enableResetButton() {
  if (guessInput.value.length === 0) {
    resetButton.disabled = true;
  } else {
    resetButton.disabled = false;
  }   
}

function resetPage (event) {
  event.preventDefault();
  guessInput.value = ('');
  lastGuess.innerText = ('');
  feedback.innerText =('');
}

// user max input and min input should replace the set 
// 
