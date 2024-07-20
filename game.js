let btns = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let newgame = document.querySelector(".newgame");
let maincontainer = document.querySelector(".maincontainer");

let turnX = true;
let count = 0 ;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

btns.forEach((box)=>{
    box.addEventListener("click", () =>{
        if (turnX === true){ // Player 1
            box.innerText = "X";
            box.style.color = "red";
            turnX = false;
        }else{              // Player 2
            box.innerText =  "O";
            box.style.color = "black";
            turnX = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();


        if (count === 9 && !isWinner){
            gameDraw();
        };
    });
});


const gameDraw = () => {
    msg.innerText = "Game was draw";
    msgContainer.classList.remove("hide");
    disableBtns();
    maincontainer.classList.add("hide");
}

const disableBtns = () => {
    for (let btn of btns) {
        btn.disabled = true;
    }
};

const enableBtns = () => {
    for ( let btn of btns){
        btn.disabled = false;
        btn.innerText = "";
    }
};

const showWinner = (winner) =>{
        msg.innerText = `Congratulation! Winner is ${winner}`;
        maincontainer.classList.add("hide");
        msgContainer.classList.remove("hide");
        disableBtns();
}

const checkWinner = () =>{
    for ( let pattern of winPatterns){
        let pos1val = btns[pattern[0]].innerText;
        let pos2val = btns[pattern[1]].innerText;
        let pos3val = btns[pattern[2]].innerText;

        if ( pos1val != "" && pos2val != "" && pos3val != ""){
            if (pos1val === pos2val && pos2val === pos3val){
                console.log("Winner" , pos1val);
                showWinner(pos1val);
                return true;
            }
        }
    }
}; 

const resetGame = () =>{
    turnX = true;
    count = 0;
    enableBtns();
    msgContainer.classList.add("hide");
    maincontainer.classList.remove("hide");
};


reset.addEventListener ("click" , resetGame);
newgame.addEventListener ("click" , resetGame);
