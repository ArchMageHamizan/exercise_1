let playerChoice;
let computerChoice;
let playerScore=0;
let computerScore=0;
let counter=0;


function getComputerChoice(){
    const choices=['rock','paper','scissors'];
    const computer=Math.floor(Math.random()*choices.length);
    return choices[computer];
}

function game(counter,playerChoice,computerChoice){
    

    
    
    

    const result=playRound(playerChoice,computerChoice);
    
    if(result=="You win!"){playerScore++;}
    else if(result=="You Lose!"){computerScore++;}
    
    document.getElementById("roundResult").textContent=playerScore+"-"+computerScore;
    
    
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

    counter++;
    document.getElementById("roundValue").textContent=counter;
    game(counter,playerChoice,computerChoice);

    if(counter==5 && playerScore>computerScore){
        document.getElementById("finalResult").textContent="You won!";

    }
    if(counter==5 && playerScore<computerChoice){
        document.getElementById("finalResult").textContent="You lose!";

    }

   
    if(counter>5){
        counter=0;
        playerScore=0;
        computerScore=0;
        document.getElementById("finalResult").textContent=" ";

    }
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

