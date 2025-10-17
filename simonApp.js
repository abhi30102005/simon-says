let gameSeq=[];
let userSeq=[];

let started=false;
let h2=document.querySelector("h2");
let level=0;

let btns=["yellow","red","purple","green"];

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);

}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    //select random box to flash
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randBtn);
}

function checkAns(idx){
    
 if (userSeq[idx] !== gameSeq[idx]) {
    h2.innerText = `Game Over!Your score is ${level} Press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";        
    },150)
    reset();
} else if (userSeq.length === gameSeq.length) {
    setTimeout(levelUp, 1000);
}

}
function btnPress(){
    console.log(this);
    let btn=this;
    btnFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
};