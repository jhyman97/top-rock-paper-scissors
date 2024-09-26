let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const choice = Math.floor(Math.random() * 3);
    
    switch(choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
};

const getHumanChoice = () => {
    const choice = prompt('Your turn! Type rock, paper or scissors!');
    return choice;
};

const playRound = (humanChoice, computerChoice) => {
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === "rock") {
        if(computerChoice === "paper") {
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        } else if(computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        } else {
            console.log("Tie, both players chose Rock!");
        }
    } else if(humanChoice === "paper") {
        if(computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper.");
            computerScore++;
        } else if(computerChoice === "rock") {
            console.log("You win! Paper beats Scissors.");
            humanScore++;
        } else {
            console.log("Tie, both players chose Paper!");
        }
    } else {
        if(computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
        } else if(computerChoice === "paper") {
            console.log("You win! Scissors beats Paper.")
            humanScore++;
        } else {
            console.log("Tie, both players chose Scissors.")
        }
    }
};

const playGame = () => {
    while(humanScore !== 5 && computerScore !== 5) {
        console.log(`Human ${humanScore} - ${computerScore} Computer`);

        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();

        playRound(humanChoice, computerChoice);
    }
    
    if(humanScore === 5) {
        console.log("Congrats, you won against the computer!");
    } else {
        console.log("Sorry, you lost again the computer!")
    }
}

playGame();
