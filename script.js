var guessInput = document.querySelector('.guess-input');
var submitButton = document.querySelector('.guess-button');
var lastGuess = document.querySelector('.last-guess');
var feedback = document.querySelector('.feedback');
var clearButton = document.querySelector('.clear-button');
var resetButton = document.querySelector('.reset-button');
var userGuess = document.querySelector('.user-guess');
var randomNumber = Math.floor(Math.random()* 100);
var userMinimum = document.querySelector('.user-min');
var userMaximum = document.querySelector('.user-max');
var newAdventureButton = document.querySelector('.new-adventure-button');
var minNumber = 0;
var maxNumber = 100;

guessInput.addEventListener('keyup', enableButtons);
submitButton.addEventListener('click', displayRecentGuess);
submitButton.addEventListener('click', answerFeedback);
clearButton.addEventListener('click', clearInput);
resetButton.addEventListener('click', resetPage);
newAdventureButton.addEventListener('click', createNewAdventure);
userMinimum.addEventListener('keyup', enableNewAdventure);

function displayRecentGuess(event) {
  event.preventDefault();
  lastGuess.innerHTML = guessInput.value; 
}

function answerFeedback() {
  console.log(randomNumber);
  if (parseInt(guessInput.value) < minNumber) {
    feedback.innerHTML = 'Your guess is below the minimum number of 0'
  } else if (parseInt(guessInput.value) < randomNumber) {
    feedback.innerHTML = 'That is too low';
  } else if (parseInt(guessInput.value) > maxNumber) {
    feedback.innerHTML = 'Your guess is above the maximum number of 100'
  } else if (parseInt(guessInput.value) > randomNumber) {
    feedback.innerHTML = 'That is too high';
  } else if (parseInt(guessInput.value) == randomNumber) {
    feedback.innerHTML = 'BOOM';
  } else {
    feedback.innerHTML = 'That\'s not a number'
  }
}

function enableButtons() {
  if (guessInput.value.length === 0) {
    clearButton.disabled = true;
    submitButton.disabled = true;
    resetButton.disabled = true;
  } else {
    clearButton.disabled = false;
    submitButton.disabled = false;
    resetButton.disabled = false;
  }  
}

function clearInput(event) {
  event.preventDefault();
  guessInput.value = ('');
  userMinimum.value = ('');
  userMaximum.value = ('');
}

function resetPage (event) {
  event.preventDefault();
  guessInput.value = ('');
  lastGuess.innerText = ('');
  feedback.innerText =('');
  userMinimum.value = ('');
  userMaximum.value = ('');
  // randomNumber();
}

function enableNewAdventure() {
if (userMinimum.value.length === 0) {
  newAdventureButton.disabled = true;
} else {
  newAdventureButton.disabled = false;
  }

}
function createNewAdventure() {
  min = parseInt(userMinimum.value);
  max =  parseInt(userMaximum.value);
  randomNumber = Math.floor(Math.random() * (max - min)) + min;
  lastGuess.innerHTML = guessInput.value;
  console.log(randomNumber);
}

// Reset the random number when the reset button is clicked.
// make the number be random between 0 and 100 again  when the
 // reset button is clicked because the new adventure is over.
 // 