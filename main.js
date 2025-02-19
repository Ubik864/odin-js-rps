const choices = ["rock", "paper", "scissors"];

function game() {
    for (let i = 1; i <= 5; i++);
    playRound();
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
}

function playerChoice() {
    let input = prompt("Type Rock Paper or Scissors");
    while (input == null) {
        ("Type Rock Paper or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt("Type Rock, Paper, or Scissors. Spelling should be exact, but capitalize if you want to")
        input = input.toLowerCase();
        check = validateInput(input);
    }

 return input;
}

function validateInput(choice) {
    if(choices.includes(choice)) {
        return true;
    } else {
        return false;
    }
}

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)]

}

game();