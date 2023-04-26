let playerChoice;
let computerChoice;


function getComputerChoice(){
    const choices=['rock','paper','scissors'];
    const computer=Math.floor(Math.random()*choices.length);
    return choices[computer];
}
function getSelectValue(){
    var playerSelection = document.getElementById("dropdown");
    var playerOption= playerSelection.value;
    var output = document.getElementById("player");

    output.textContent=playerOption;
    document.getElementById("p").textContent = playerOption;
    playerChoice=playerOption;

    computerChoice=getComputerChoice();
    document.getElementById("c").innerHTML=computerChoice;
    document.getElementById("computer").innerHTML=computerChoice;

    var result=playRound(playerChoice,computerChoice);
    document.getElementById("result").textContent=result;

    return playerOption;
    
    
}
function playRound(player,computer){
    player=playerChoice.toLowerCase();
    computer=computerChoice.toLowerCase();
    
    
    
    if(player===computer){
        return "Its a tie";
    }
    else if (player==='rock' && computer==='scissors' ||
        player==='paper' && computer==='rock' || 
        player==='scissors' && computer==='paper'){
        return "You win!";
    }
    else
        return "You Lose!";
    
}
