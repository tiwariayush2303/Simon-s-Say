let gameSeq = [];
let userSeq=[];
let started =  false ;
let level = 0;
let btns=["red","yellow","blue","purple"]
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if (started==false){
        console.log("game is started..");
        started = true;

        levelup();
    }
});
function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
}function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userSeq =[];
level++;
h2.innerText = `Level ${level}`;
// for random number...
let randIdx = Math.floor(Math.random()*3);
let randColor = btns[randIdx];
let randBtn = document.querySelector(`.${randColor}`);
gameSeq.push(randColor);
console.log(gameSeq);
gameflash(randBtn);
}
function checkAns(idx){
   // console.log("curr level :",level);
   if(userSeq[idx] === gameSeq[idx]){
   if(userSeq.length == gameSeq.length){
    setTimeout(levelup, 1000);
   }
    console.log("same value");
 }else{
    h2.innerText= `Game Over ! Press any key   
                        High Score - ${level} `;
    reset();
 }
}
function btnPress(){
    let btn = this;
    userflash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for( btn of allBtns){
    btn.addEventListener("click",btnPress);
}function reset(){
 started = false;
  gameSeq = [];
 userSeq=[];
 level = 0;

}