// const playertext = document.querySelector("#player");
// const computertext = document.querySelector("#computer");
// const resulttext = document.querySelector("#result");

// const buttons = document.querySelectorAll(".btns")

// let player;
// let computer;
// let result;

// buttons.forEach(btn => btn.addEventListener("click",()=>{
// player = btn.textContent;
// computerturn();
// playertext.textContent=`Player: ${player}`;
// computertext.textContent=`Computer: ${computer}`;
// resulttext.textContent=updateresult();

// }))

// function computerturn(){
//     const random = Math.floor(Math.random()*3)+1;

//     switch(random){
//         case 1 :
//             computer = "ROCK";
//             break;
//             case 2 :
//                 computer = "PAPER";
//                 break;
//                 case 3 :
//                     computer = "SCISSOR";
//                     break;
                    
//     }
// }
// function updateresult(){
//     if(player == computer)
//     {
//         return "DRAW!"
//     }
//     else if(computer == "ROCK")
//     {
//         return player == "SCISSOR" ? "YOU LOSE!" : "YOU WIN.." 
//     }
//     else if(computer == "SCISSOR")
//     {
//         return player == "PAPER" ? "YOU LOSE!" : "YOU WIN.." 
//     }
//     else if(computer == "PAPER")
//     {
//         return player =="ROCK" ? "YOU LOSE!" : "YOU WIN.." 
//     }
// }

const playertext = document.querySelector("#player");
const computertext = document.querySelector("#computer");
const resulttext = document.querySelector("#result");

const buttons = document.querySelectorAll(".btns")

let player;
let computer;
let result;

buttons.forEach(btn => btn.addEventListener("click",()=>{
    player = btn.textContent;
   computerturn();
    playertext.textContent =`Player:${player}`;
    computertext.textContent = `Computer:${computer}`;
    resulttext.textContent=checkwinner();
}))


function computerturn(){
    const random = Math.floor(Math.random()*3+1)

    switch(random){
        case 1:
            computer = "ROCK"
            break;
            case 2:
            computer = "PAPER"
            break;
            case 3:
            computer = "SCISSOR"
            break;

    }
}

function checkwinner(){
    if(player == computer){
        return "DRAW BUDDY!"
    }
    else if (player == "ROCK"){
        return computer == "PAPER" ? "YOU WIN BUDDY :)" : "YOU LOSE :("
    }
    else if (player == "PAPER" ){
        return computer == "SCISSOR" ? "YOU WIN BUDDY :)" : "YOU LOSE :("
    }
    else if (player == "SCISSOR"){
        return computer == "ROCK" ? "YOU WIN BUDDY :)" : "YOU LOSE :("
    }
}