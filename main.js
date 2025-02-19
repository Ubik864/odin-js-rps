const choices = ["rock", "paper", "scissors"];

function game() {
    for (let i = 1; i <= 5; i++);
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
}

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)]

}