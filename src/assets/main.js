let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');

    if (answer.value == "" || attempt.value = ""){
      setHiddenFields();
    }
    if (!validateInput(input.value)){
      return false;
    }

    attempt.value++;

    if(getResults(input.value)){
      setMessage("You Win! :)");
      showAnswer(true);
      showReplay();
    }
    else if (attempt.value >= 10){
      setMessage("You Lose! :(");
      showAnswer(false);
      showReplay();
    }
    else {
      setMessage("Incorrect, try again.");
    }

}

function setHiddenFields(){
  answer.value = Math.floor(Math.random()*10000).toString;
  while (answer.value.length < 4){
    answer.value = "0" + answer.value;
  }
  attempt.value = "0";
}

function setMessage(message){
  document.getElementById("message").innerHTML = message;
}

function validateInput(input){
  if (input.length != 4){
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
  return true;
}

function getResults(userGuess){
  //Check each character to see if it is in the answer string
  let resultDisplay = "<div class="row"><span class="col-md-6">" + userGuess + "</span><div class="col-md-6">";

  //Count how many guesses were entered correctly
  let numberCorrectGuesses = 0;

  for(var i = 0; i < userGuess.length; i++){
    if (userGuess.charat(i) == answer.value.charat(i)){
      resultDisplay += "<span class="glyphicon glyphicon-ok"></span>";
      numberCorrectGuesses ++;
    }
    else if (answer.value.indexOf(userGuess.charat(i))> -1){
      resultDisplay += "<span class="glyphicon glyphicon-transfer"></span>";
    }
    else {
      resultDisplay += "<span class="glyphicon glyphicon-remove"></span>";
    }
  }

  resultDisplay += "</div></div>";
  document.getElementById("results").innerHTML = resultDisplay;

  if (numberCorrectGuesses == 4){
    return true;
  }

  return false;
}

function showAnswer(winner){
let code = document.getElementById("code")
  code.innerHTML = answer.value;

  if (winner){
    code.className += " success";
  }
  else {
    code.className += " failure";
  }
}

function showReplay(){
  document.getElementById("guessing-div").style.display = "none";
  document.getElementById("replay-div").style.display = "block";
}
