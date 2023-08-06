// For the Rock Paper Scissors Game
let rpsComputerScore = 0;
let rpsPlayerScore = 0;

const rpsFightButton = document.getElementById("rps-fight-button");
rpsFightButton.addEventListener('click', rpsFight);

function updateScore(winner) {
    (winner === "Computer") ?
        rpsComputerScore++ :
        rpsPlayerScore++;
    document.getElementById("rps_score").innerHTML = `Score: ${rpsPlayerScore} to ${rpsComputerScore}`
}

function selectComputerWeapon() {
    choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function rpsFight() {
    playerWeapon = document.getElementById("rps_weapon").value;
    computerWeapon = selectComputerWeapon();
    
    if (playerWeapon === computerWeapon) {
        document.getElementById("rps_winner").innerHTML = `The computer chose ${computerWeapon} as well, so it's a stalemate.`
        return
    }

    switch (playerWeapon + " vs " + computerWeapon){
        case "Rock vs Scissors":
            document.getElementById("rps_winner").innerHTML = `The computer chose ${computerWeapon}, so you have won!`;
            updateScore("")
            break;
        case "Scissors vs Paper":
            document.getElementById("rps_winner").innerHTML = `The computer chose ${computerWeapon}, so you have won!`;
            updateScore("")
            break;
        case "Paper vs Rock":
            document.getElementById("rps_winner").innerHTML = `The computer chose ${computerWeapon}, so you have won!`;
            updateScore("")
            break;
        default:
            document.getElementById("rps_winner").innerHTML = `The computer chose ${computerWeapon}, so you have lost.`;
            updateScore("Computer")
    }
    
}

// For the Etsch A Sketch