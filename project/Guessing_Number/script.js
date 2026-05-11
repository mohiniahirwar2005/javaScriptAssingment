// Random number between 1 to 10
let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {

    let userGuess = Number(document.getElementById("guessInput").value);

    let message = document.getElementById("message");

    if(userGuess > randomNumber){

        message.innerHTML = "OOPS! SORRY!!! TRY A SMALLER NUMBER.";

    }
    else if(userGuess < randomNumber){

        message.innerHTML = "OOPS! SORRY!!! TRY A LARGER NUMBER.";

    }
    else if(userGuess === randomNumber){

        message.innerHTML = " Congratulations! You guessed the correct number.";

    }
    else{

        message.innerHTML = "Please enter a valid number.";

    }
}