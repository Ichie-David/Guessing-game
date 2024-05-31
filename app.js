function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function guessNumber() {
    const minNum = 1;
    const maxNum = 100;
    const secretNum = getRandomNumber(minNum, maxNum);
    let guess;
    let attempts = 0;
      
    while (true) {
        guess = prompt ('Guess a number between ${minNum} and ${maxNum}:');
        attempts++;

        if (guess === null || isNaN(guess)) {
            alert ('Please enter a valid number');
            continue;
        }
        guess = parseInt(guess);

        if (guess === secretNum) {
            alert (
                'Congrats! You guessed the number ${secretNum} in ${attempts} attempts'
            );
            or
            if (attempts === 3) {
                alert ('Game Over! Number of Tries Exhausted'); 
            }
            break;
        } else if (guess < secretNum) {
            alert ('Too Low!, Try Again');
        } else {
            alert ('Too High!, Try Again');
        }
    }
}

guessNumber();