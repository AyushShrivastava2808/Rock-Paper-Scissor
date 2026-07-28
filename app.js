let userScore = 0;
let compScore = 0;
let tieScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("game was draw");
    tieScore++;
    document.querySelector("#tie-score").innerText = tieScore;
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
}

const showWinner = (userWin) => {
    if(userWin){
        console.log("You won");
        msg.innerText = "You won";
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
        userScore++;
        document.querySelector("#user-score").innerText = userScore;
    }
    else{
        console.log("Computer won");
        msg.innerText = "Computer won";
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
        compScore++;
        document.querySelector("#computer-score").innerText = compScore;
    }
}


const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);

    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;

        if(userChoice === "rock"){
            compChoice === "paper" ? userWin = false : userWin = true;
        }
        else if(userChoice === "paper"){
            compChoice === "scissor" ? userWin = false : userWin = true;
        }
        else if(userChoice === "scissor"){
            compChoice === "rock" ? userWin = false : userWin = true;
        }

        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

