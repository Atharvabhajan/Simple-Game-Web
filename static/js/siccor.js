let userScore=0;
let comScore=0;
let choiceArr=["rock","paper","scissor"];
let result=document.querySelector(".result");
let rock=document.querySelector("#stone img");
let scoreu=document.querySelector(".user-score");
let scorec=document.querySelector(".com-score");
let comci=document.querySelector(".com-choice");
let userci=document.querySelector(".user-choice");
let equips=document.querySelectorAll(".equip");

let rockImgSrc = "/static/rock.jpeg";
let paperImgSrc = "/static/paper.jpeg";
let scissorImgSrc = "/static/scissor.jpeg";



const playgame=(userChoise,comChoice)=>{
    console.log(userChoise);
    if(userChoise==comChoice)
    {
        result.innerText="Match Tie!";
        result.style.backgroundColor="black";
        result.style.color="white";
    }
    else if(userChoise=="paper"&&comChoice=="rock"||userChoise=="rock"&&comChoice=="scissor"||userChoise=="scissor"&&comChoice=="paper")
    {
        result.innerText="You Won!";
        result.style.backgroundColor="green";
        result.style.color="white";
        userScore++;
        scoreu.innerText=`${userScore}`;
    }
    else
    {
        result.innerText="You Lost!";
        result.style.backgroundColor="red";
        result.style.color="white";
        comScore++;
        scorec.innerText=`${comScore}`;
    }
}
const getComchoice=()=>{
    let comInd=Math.floor(Math.random()*3);
    let comop=choiceArr[comInd];
    return comop;
}


function appendimguser(userChoise)
{
    let newimg=document.createElement("img");
    userci=document.querySelector(".user-choice");
    userci.innerHTML="";
    if(userChoise=="rock")
    {
        newimg.src = rockImgSrc;
    }
    else if(userChoise=="paper")
    {
        newimg.src=paperImgSrc;
    }
    else
    {
        newimg.src=scissorImgSrc;
    }
    
    userci.classList.add("new");
    userci.appendChild(newimg);
}
function appendimgcom(comChoice)
{
    comci=document.querySelector(".com-choice");
    let newim=document.createElement("img");
    comci.innerHTML="";
    if(comChoice=="rock")
    {
        newim.src=rockImgSrc;
    }
    else if(comChoice=="paper")
    {
        newim.src=paperImgSrc;
    }
    else
    {
        newim.src=scissorImgSrc;
    }
    comci.classList.add("new");
    comci.appendChild(newim);
}

equips.forEach((equip)=>
{
    equip.addEventListener("click",()=>
    {
        let userChoise=equip.getAttribute("id");
        // console.log("userChoise");
        let comChoice=getComchoice();
        appendimguser(userChoise);
        appendimgcom(comChoice);
        playgame(userChoise,comChoice);
    })
})

let reset=document.querySelector(".reset-but");

reset.addEventListener("click",()=>
{
    scoreu.innerText=`${0}`;
    scorec.innerText=`${0}`;
    result.innerText="Start the Game!";
    result.style.backgroundColor="#DAA520";
    userci.innerHTML="";
    comci.innerHTML="";
})
