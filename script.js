function getComputerChoice(){
    let x = Math.floor((Math.random() * 3));

    if (x === 0){
        return 'rock';
    } else if (x === 1){
        return 'paper';
    } else {
        return 'scissors';
    }

}

function getHumanChoice(){
    return prompt('Type: rock, paper or scissors', '');
}



playGame();

function playGame(){

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === 'rock' && computerChoice === 'scissors' 
            || humanChoice === 'scissors' && computerChoice === 'paper'
            || humanChoice === 'paper' && computerChoice === 'rock'){
                console.log(`You win! ` + humanChoice[0].toUpperCase() + humanChoice.slice(1) + ` beats ` + computerChoice + `!`);
                humanScore++;
        } else if (humanChoice === computerChoice){
            console.log('Draw! Human\'s ' + humanChoice + ` and computer's ` + computerChoice + `.`);
        } else {
            console.log(`You lose! ` + computerChoice[0].toUpperCase() + computerChoice.slice(1) + ` beats ` + humanChoice + `!`);
            computerScore++;
        }


    }

    

    let humanScore = 0;
    let computerScore = 0;

   
    for (i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Human score is ${humanScore}. Computer score is ${computerScore}`);
    }

    if (humanScore > computerScore){
        console.log('Human win!');
    } else if (computerScore > humanScore){
        console.log('Computer win!');
    } else {
        console.log('Draw!');
    }
 
}