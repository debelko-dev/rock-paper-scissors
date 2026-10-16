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

    const btn = document.querySelectorAll('button');

    btn.forEach(element => {
        element.addEventListener('click', playRound);
    });
    
    

    let humanScore = 0;
    let computerScore = 0;

   
 
}