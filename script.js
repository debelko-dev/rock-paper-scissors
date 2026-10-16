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


playGame();


function playGame(){

    function playRound(e){

        humanChoice = e.target.textContent.toLowerCase();
        computerChoice = getComputerChoice();
        let log;
        if (humanChoice === 'rock' && computerChoice === 'scissors' 
            || humanChoice === 'scissors' && computerChoice === 'paper'
            || humanChoice === 'paper' && computerChoice === 'rock'){
                humanScore++;
                log = `You win! ` + humanChoice[0].toUpperCase() + humanChoice.slice(1) + ` beats ` + computerChoice + `!`;
                result.textContent = `Your score: ${humanScore}. Computer score: ${computerScore}. `;
                logInDiv.textContent = log;
        } else if (humanChoice === computerChoice){
            log = 'Draw! Human\'s ' + humanChoice + ` and computer's ` + computerChoice + `.`;
            logInDiv.textContent = log;
        } else {
            log = `You lose! ` + computerChoice[0].toUpperCase() + computerChoice.slice(1) + ` beats ` + humanChoice + `!`;
            computerScore++;
            result.textContent = `Your score: ${humanScore}. Computer score: ${computerScore}. `;
            logInDiv.textContent = log;
        }
        
        if (humanScore === 5){
            humanScore = 0;
            computerScore = 0;
            result.textContent = `Your score: ${humanScore}. Computer score: ${computerScore}. `;
            logInDiv.textContent = 'YOU WIN 5 ROUNDS!';
        }
        if(computerScore === 5){
            humanScore = 0;
            computerScore = 0;
            result.textContent = `Your score: ${humanScore}. Computer score: ${computerScore}. `;
            logInDiv.textContent = 'COMPUTER WIN 5 ROUNDS!';
        }

    }

    let humanScore = 0;
    let computerScore = 0;
    const btn = document.querySelectorAll('button');

    btn.forEach(element => {
        element.addEventListener('click', playRound);
    });

    const result = document.querySelector('#result');
    const mainChat = document.querySelector('#main');
    const logInDiv = document.querySelector('#log');
    



   
 
}