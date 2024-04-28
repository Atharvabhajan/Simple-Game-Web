let boxes=document.querySelectorAll(".box");
let turn0=true;
let result=document.querySelector(".result");
let resbut=document.querySelector(".reset");
let newbut=document.querySelector(".new-game");
let count=0;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
let box;
boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
       if(turn0==true)
       {
           box.innerText="O";
           turn0=false;
       }
       else
       {
           box.innerText="X";
           turn0=true;
       }
       box.disabled=true;
       checkwinner();
       count++;
    });
})


function checkwinner()
{
    let val
    for(let pattern of winPattern)
    {
        if(boxes[pattern[0]].innerText=="X" &&boxes[pattern[1]].innerText=="X"&&boxes[pattern[2]].innerText=="X")
        {
            result.innerText="Congratulations the Winner is player X.";
            stopgame();
        }
        else if(boxes[pattern[0]].innerText=="O" &&boxes[pattern[1]].innerText=="O"&&boxes[pattern[2]].innerText=="O")
        {
            result.innerText="Congratulations the Winner is player O.";
            stopgame();
        }
        else if(count==9)
        {
           result.innerText="Winner Not Got try again!!";
        }
    }
}


function stopgame()
{
    turn0=true;
    boxes.forEach((box)=>
    {
        box.disabled=true;
    })
}

resbut.addEventListener("click",()=>
{
    boxes.forEach((box)=>{
        count=0;
        box.disabled=false;
        box.innerText="";
        result.innerText="";
    })
});
newbut.addEventListener("click",()=>
{
    boxes.forEach((box)=>{
        count=0;
        box.disabled=false;
        box.innerText="";
        result.innerText="";
    })
});