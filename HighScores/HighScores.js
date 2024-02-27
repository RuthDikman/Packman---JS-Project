let arrScores= localStorage.getItem("scores");
arrScores=JSON.parse(arrScores) || [];
let div1,div2,p;
div1=document.createElement("div");
div1.setAttribute("class","allPlayers");
for(let i=0;i<arrScores.length&&i<4;i++){
  div2=document.createElement("div");
  div2.setAttribute("class","player_i");
  p=document.createElement("p");
  p.innerHTML=arrScores[i].playerName;
  p.setAttribute("class","playerName name_points")
  div2.appendChild(p);
  p=document.createElement("p");
  p.innerHTML=arrScores[i].playerPoints;
  p.setAttribute("class","playerPoints name_points")
  div2.appendChild(p);
  div1.appendChild(div2);
}
document.getElementById("highScores").appendChild(div1);
