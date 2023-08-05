let rps_computer_score = 0
let rps_player_score = 0

function updateScore(winner) {
    (winner === "Computer") ?
        rps_computer_score++ :
        rps_player_score++;
    document.getElementById("rps_score").innerHTML = `Score: ${rps_player_score} to ${rps_computer_score}`
}

function selectComputerWeapon() {
    choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function rpsFight() {
    player_weapon = document.getElementById("rps_weapon").value;
    computer_weapon = selectComputerWeapon();
    
    if (player_weapon === computer_weapon) {
        document.getElementById("rps_winner").innerHTML = `The computer chose ${computer_weapon} as well, so it's a stalemate.`
        return
    }

    switch (player_weapon + " vs " + computer_weapon){
        case "Rock vs Scissors":
            document.getElementById("rps_winner").innerHTML = `The computer chose ${computer_weapon}, so you have won!`;
            updateScore("")
            break;
        case "Scissors vs Paper":
            document.getElementById("rps_winner").innerHTML = `The computer chose ${computer_weapon}, so you have won!`;
            updateScore("")
            break;
        case "Paper vs Rock":
            document.getElementById("rps_winner").innerHTML = `The computer chose ${computer_weapon}, so you have won!`;
            updateScore("")
            break;
        default:
            document.getElementById("rps_winner").innerHTML = `The computer chose ${computer_weapon}, so you have lost.`;
            updateScore("Computer")
    }
    
}