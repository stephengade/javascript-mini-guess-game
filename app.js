// Making a guessing game using Math.random function

function gameGuess() {
    //STEP1: Set the Random Number
    let randomNum = Math.floor(Math.random() * 21);

    //STEP 2: Give users ability to guess

    let userGuess;
    let userName = prompt("Hey, my name is Stephen. What is your name?");
    let welcomeMessage = alert(`You're welcome ${userName}, \n you can continue the game, are you ready? 😁`);


    do {
        userGuess = prompt(`Now ${userName}, Guess a number between 1 - 20 😉`);
        console.log(userGuess, randomNum); // To know the generated random number in console tab

        if (userGuess > randomNum ) {
             alert(`Oh oh... ${userName}, your number is way too high. 🤦‍♀️ `);
        } 
        else if (userGuess < randomNum) {
             alert(`This time 🤔, your number is way below. Try again ${userName}`)
        }
        
    }

    while ( userGuess != randomNum );
    alert(`Wow! ${userName}, ${userGuess} is correct! You guessed right, you WON. Take this 💕`);
}

gameGuess();
