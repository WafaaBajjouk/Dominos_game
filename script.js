let player1=document.querySelector("#player1");
let score1=document.querySelector("#score1");
let som1=document.querySelector("#som1");

let player2=document.querySelector("#player2");
let score2=document.querySelector("#score2");
let som2=document.querySelector("#som2");

let domino=document.getElementById("domino");
let lance=document.querySelector("#lance");
let passe=document.querySelector("#passe");
let nv=document.querySelector("#nv");

let role=1;
player1.style.background='#D8D8D8';
let max=100;

nv.onclick=()=>{
    newgame();
}

newgame=(nv)=>{
if(nv){
    score1.innerHTML=score2.innerHTML=0;
    som1.innerHTML=som2.innerHTML=0;
    domino.src="domino1.png"
}  som1.innerHTML=som2.innerHTML=0;
}

passe.onclick=()=>{
    if(role==1){
       role=2;
    }else{
        role=1;
    }
     console.log(role);
    player1.style.background='white';
    player2.style.background='white';
    if(role==1){
        player1.style.background='#D8D8D8';
    }else{
        player2.style.background='#D8D8D8';
    }
}

lance.onclick=()=>{
    let n=Math.floor((Math.random()*6)+1);
    // console.log(n);
    document.getElementById("img").src = `domino${n}.png`;
    // domino.src=`domino${n}.png`;
    if(n!=1){
        if(role==1){
            let s=parseInt(som1.innerHTML);
            // console.log(s+n);
            som1.innerHTML=s+n;
            if(s>=max){
                score1.innerHTML= parseInt(score1.innerHTML)+1;
                newgame(false);
        }}
        else{
            let s=parseInt(som2.innerHTML);
            som2.innerHTML=s+n;
            if(s>=max){
                score2.innerHTML= parseInt(score2.innerHTML)+1;
                newgame(false);

        }
    }
    }else{
        if(role==1)
            som1.innerHTML=0;
        else
            som2.innerHTML=0;
    }
}


 