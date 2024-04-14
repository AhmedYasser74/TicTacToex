let Counter=0,draw;
let Value,done=0;


function Game(id){

    Value="";
    draw=0;
    let Square=document.getElementById(id).firstElementChild;
    if(Square.textContent==""&&done!=1){
    if(Counter%2==0){
    Value="X";
    document.getElementById(id).firstElementChild.style.color="white";
    document.getElementById(id).style.backgroundColor="red";
    document.getElementById("turn").style.color="darkblue";
    document.getElementById("turn").textContent="O's Turn"
    
    }
else{
Value="O";
document.getElementById(id).firstElementChild.style.color="white";
    document.getElementById(id).style.backgroundColor="darkblue";
    document.getElementById("turn").textContent="X's Turn";
    document.getElementById("turn").style.color="red";
}
Counter++;

Square.textContent=Value;
let arr=[];
for(let j=0;j<9;j++){
    arr.push(document.getElementById(j).firstElementChild.textContent)
}


done=CheckGame(arr);

    }
   
if(done==1){
    document.getElementById("turn").style.color="green";
    document.getElementById("turn").textContent="Game End";
}
}

function CheckGame(...array){
   a=array.flat();
let result;
for(let i=0;i<=6;i=i+3){
    if(a[i]==a[i+1]&&a[i]==a[i+2] && a[i]!=''){
    result=document.getElementById("result");
    result.textContent=a[i]+" Wins";
    if(a[i]=='X'){
        result.style.color="red";

    }
    else
    result.style.color="darkblue";
    return 1;
    }
}

for(let i=0;i<=2;i++){
    if(a[i]==a[i+3]&&a[i]==a[i+6] && a[i]!='')
    {result=document.getElementById("result");
    result.textContent=a[i]+" Wins";
    if(a[i]=='X'){
        result.style.color="red";

    }
    else
    result.style.color="darkblue";
    return 1;}
}




if(a[0]==a[4]&&a[0]==a[8] &&a[0]!=''){
    result=document.getElementById("result");
    result.textContent=a[0]+" Wins";
    if(a[0]=='X'){
        result.style.color="red";

    }
    else
    result.style.color="darkblue";
return 1;
}
else if(a[2]==a[4]&&a[2]==a[6]&&a[2]!=''){
    result=document.getElementById("result");
    result.textContent=a[2]+" Wins";
    if(a[2]=='X'){
        result.style.color="red";

    }
    else
    result.style.color="darkblue";
    return 1;
}

for(let i=0;i<9;i++){
    if(a[i]!='')
    draw=1;
else{
    draw=0;
    break;
}
}

if(draw==1){
    result=document.getElementById("result");
    result.textContent="Draw!!Press Play Again";
    result.style.fontSize="30px"
    result.style.color="black"
   
   
}




    
}


function clearBoard(){
    Counter=0;
    draw=0;
    done=0;
    document.getElementById("turn").textContent="";
    document.getElementById("result").textContent=""
    for(let i=0;i<9;i++){
        document.getElementById(i).firstElementChild.textContent="";
        document.getElementById(i).style.backgroundColor="white"
    }
}