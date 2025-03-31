let you=0;
let Computers=0;

let user=document.querySelector("#user");
let comp=document.querySelector("#Computer");

let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let scissors=document.querySelector("#scissors");
let choices=document.querySelectorAll(".choice");
const message=document.querySelector("#msg");

const compchoice=()=>{
    const opt=["rock","paper","scissors"];
    const index=Math.floor(Math.random()*3);
    return opt[index];
};

const drawGame=()=>{
    message.innerText="Game was draw";
};

const showWinner=(userWin)=>{
    if(userWin){
        message.innerText="You win";
        you++;
        user.innerText=`${you}`;
    }
    else{
        message.innerText="You lose";
        Computers++;
        comp.innerText=`${Computers}`;
    }
};

const playgame=(userchoice)=>{
    const compChoices=compchoice();
    if(userchoice===compChoices){
        drawGame();
    }
    else{
        let userWin=true;
        if(userchoice==="rock"){
            userWin=compChoices==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userWin=compChoices==="scissors"?false:true;
        }
        else{
            userWin=compChoices==="rock"?false:true;
        }
        showWinner(userWin);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});

let button=document.querySelector(".resetbutton");
button.addEventListener("click",()=>{
    you=0;
    user.innerText=`${you}`;
    Computers=0;
    comp.innerText=`${Computers}`;
    message.innerText="Play your move";
});