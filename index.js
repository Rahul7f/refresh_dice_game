function randomnumber0()
{
    var n = Math.random();
n = n*6;
n = Math.floor(n)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+n+".png");
return n;
}

function randomnumber1()
{
    var n = Math.random();
n = n*6;
n = Math.floor(n)+1;
document.querySelector(".img2").setAttribute("src","images/dice"+n+".png");
return n;
}

var player1 = randomnumber0();
var player2 =  randomnumber1();
if(player1>player2)
{
    
    document.getElementById("tittle").innerHTML = "player 1 win"
}
else if(player2>player1)
{
    document.getElementById("tittle").innerHTML = "player 2 win"
}
else
{
    document.getElementById("tittle").innerHTML = "draw"
}




