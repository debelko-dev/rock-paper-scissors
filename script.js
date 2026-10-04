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

function getHumanChoise(){
    return prompt('Type: rock, paper or scossors', '');
}


let humanScore = 0;
let computerScore = 0;



console.log(getHumanChoise());
console.log(getComputerChoice());