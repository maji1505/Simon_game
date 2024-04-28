let gameSeq=[];
let userSeq=[];
let btns=["yellow","blue","green","red"];
let started=false;
let level=0;
let para=document.querySelector("h3");
let pLevel=0;
let start=document.querySelector(".start");
let end=document.querySelector(".end");
let key=false;
let h2=document.querySelector("h2");
start.addEventListener("click",function(){
    if(started==false){
        key=true;
        console.log(key);
        console.log("game is started");
        started=true;
        levelUp();
    }
});

function btnFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},500)
}
end.addEventListener("click",function(){
    rset();
    h2.innerHTML="press start to enter the game";
});

function levelUp(){
    userSeq=[];
level++;
h2.innerText=`Level ${level}`;
if(level>pLevel){
    pLevel=level;
para.innerHTML=`<b>best score ${pLevel-1}</b>`;
}

let randIdx=Math.floor(Math.random()*4);
let randColor=btns[randIdx];
let randBtn=document.querySelector(`.${randColor}`);
gameSeq.push(randColor);

btnFlash(randBtn);
}

function checkAns(idx){


if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
    }
}
else{
    h2.innerHTML=`Game Over! your level was= <b>${level}</b>, <br>press start to play again`;
    rset();
}

}

function btnPress(btn){
// let btn=this;
btnFlash(btn);

userColor=btn.getAttribute("id");
console.log(userColor);
userSeq.push(userColor);
checkAns(userSeq.length-1);


}


// if(key){
    let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    
    btn.addEventListener("click",function(){
        console.log(key);
        if(key)
        btnPress(this);
    else{
        h2.innerText="please first start the game";
    }
    });
}
// }


function rset(){
    started=false;
    gameSeq=[];
    level=0;
    userSeq=[];
    key=false;
}