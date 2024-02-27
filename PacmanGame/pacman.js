
let timerDot,sizeDot=true,newImagevar,points=0,userLives=2,tBlue,tPink,tRed,tOrange,highScores=1,parent,audio,flag=0,isExist=0;
let transformFirstValue = 0, transformSecondValue = 0;
let arrScores=[];
let idsArr = ["red","orange","pink","blue"];
const mat = [
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
[0, 4, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 4, 0],
[0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
[0, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
[0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
[0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
[0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
[2, 2, 2, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 2, 2, 2],
[0, 0, 0, 0, 1, 0, 1, 0, 0, 10, 0, 0, 1, 0, 1, 0, 0, 0, 0],
[2, 2, 2, 2, 1, 1, 1, 0, 11,12, 13, 0, 1, 1, 1, 2, 2, 2,2],
[0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
[2, 2, 2, 0, 1, 0, 1, 1, 1, 8, 1, 1, 1, 0, 1, 0, 2, 2, 2],
[0, 0, 0, 0, 1, 0, 4, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
[0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
[0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
[0, 4, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 4, 0],
[0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
[0, 1, 1, 4, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
[0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 4, 0, 0, 0, 0, 0, 0, 1, 0],
[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
generateMatrix();
var user = document.getElementById("user");
var  userX = 9, userY =12;
let arrBigDot=document.querySelectorAll(".bigDot");
timerDot=setInterval("moveDot()", 200);
let playGameImg=document.createElement("img");
playGameImg.setAttribute("src","img/s.gif");
playGameImg.setAttribute("class","playGameImg");
document.body.appendChild(playGameImg);
playGameImg.addEventListener("click", beginPlay);
function generateMatrix() {  //פונקציה להדפסת הלוח על המסך ע''י מטריצה
  let row ,box,image
  for (let i = 0; i < mat.length; i++) {
   row= document.createElement("div");
   row.setAttribute("id","row");
    for (let j = 0; j < mat[i].length; j++) {
       box=document.createElement("div");
       box.setAttribute("class","box");
       if(mat[i][j]==0)
     {
        box.style.backgroundColor="#08039e";
    }
     else{
      box.style.backgroundColor="black";
    }
      if(mat[i][j]==1){
         image= document.createElement("img");
         image.setAttribute("src","img/dot.png");
         image.setAttribute("class","dot dot_" + i + "_" + j);
         box.appendChild(image);
    }
    if(mat[i][j]==4){
      image= document.createElement("img");
      image.setAttribute("src","img/dot.png");
      image.setAttribute("class","bigDot bigDot_" + i + "_" + j);
      box.appendChild(image);
   }
   if(mat[i][j]>9){
    image= document.createElement("img");
    if(mat[i][j]==10){
      image.setAttribute("src","img/man/orange.gif");
      image.setAttribute("class","a orange-man");
      image.setAttribute("id","orange-man");
      image.setAttribute("alt","man_" + i + "_" + j);
      image.setAttribute("transform_x",0);
      image.setAttribute("transform_y",0);
      image.setAttribute("prev_rand",-1);
      image.setAttribute("style","z-index: 101;");
      //box.style.borderTop="white 2px solid";
      
    }
    if(mat[i][j]==11){
        image.setAttribute("src","img/man/blue.png");
        image.setAttribute("class","a blue-man");
        image.setAttribute("id","blue-man");
        image.setAttribute("alt","man_" + i + "_" + j);
        image.setAttribute("transform_x",0);
        image.setAttribute("transform_y",0);
        image.setAttribute("prev_rand",-1);
        image.setAttribute("alt","man_" + i + "_" + j);
        image.setAttribute("style","z-index: 101;");
    }
    if(mat[i][j]==12){
        image.setAttribute("src","img/man/red.gif");
        image.setAttribute("class","a red-man");
        image.setAttribute("id","red-man");
        image.setAttribute("alt","man_" + i + "_" + j);
        image.setAttribute("transform_x",0);
        image.setAttribute("transform_y",0);
        image.setAttribute("prev_rand",-1);
        image.setAttribute("style","z-index: 101;");
    }
    if(mat[i][j]==13){
        image.setAttribute("src","img/man/pink.gif");
        image.setAttribute("class","a pink-man");
        image.setAttribute("id","pink-man");
        image.setAttribute("alt","man_" + i + "_" + j);
        image.setAttribute("transform_x",0);
        image.setAttribute("transform_y",0);
        image.setAttribute("prev_rand",-1);
        image.setAttribute("style","z-index: 101;");
    }
    box.appendChild(image);
   }
   if(mat[i][j]==8){
      image= document.createElement("img");
      image.setAttribute("src","img/user/uLeft.png");
      image.setAttribute("id","user");
      image.setAttribute("style","z-index: 100;translate(" + transformFirstValue +"px, " + transformSecondValue +"px)");
      box.appendChild(image);
   }
       row.appendChild(box);
    }
   document.getElementById("matrix").appendChild(row);
  }
 let score= document.createElement("div");
 score.setAttribute("id","score");
 let txt=document.createElement("p");
 txt.innerHTML="score:";
 score.appendChild(txt);
 let point=document.createElement("p");
 point.setAttribute("class","points");
 point.innerHTML="0";
 score.appendChild(point);
 let divimageLevel=document.createElement("div");
 divimageLevel.setAttribute("class","divimageLevel");
 let lives=document.createElement("p");
 lives.innerHTML="lives:";
 divimageLevel.appendChild(lives);
for(let i=0;i<3;i++){
  let imageLevel= document.createElement("img");
  imageLevel.setAttribute("src","img/user/uRight.png");
  imageLevel.setAttribute("class","userLevel");
  imageLevel.setAttribute("id","level"+i);
  divimageLevel.appendChild(imageLevel);
}
score.appendChild(divimageLevel);
 document.body.appendChild(score);
}

function beginPlay(){ //פונקציה להקפאת המסך לפני תחילת המשחק למספר שניות, ושולחת לתחילת המשחק
  playGameImg.remove();
  audio = new Audio();
  audio.src = 'audio/start.mp3';
  audio.play();
  let startImg=document.createElement("img");
  startImg.setAttribute("src","img/starting.gif");
  startImg.setAttribute("id","startImg");
  document.getElementById("matrix").appendChild(startImg);
  setTimeout(() =>{
    setTimeout(() => {
      startMoveMan();
      document.addEventListener('keydown', onKeyDown);
      },1000);
  },4000);

};

function startMoveMan(){//פונקציה ראשית להזזת האנשים, ע''י שלחיתם לפונקציות הבאות
  document.getElementById("startImg").remove();
  tOrange= setInterval("moveMan('orange-man')", 200);
    setTimeout(() => {
      if(flag==0){
        moveByStart("red-man");
        tRed= setInterval("moveMan('red-man')", 200);
      }
      
    },2000);

    setTimeout(() => {
      if(flag==0){
        moveByStart("blue-man");
        tBlue= setInterval("moveMan('blue-man')", 200);
      }
    
    },6000);

    setTimeout(() => {
      if(flag==0){
        moveByStart("pink-man");
        tPink= setInterval("moveMan('pink-man')", 200);
      }
    }, 9000);
  }
function moveDot(){
   if(sizeDot==true){
      for(i=0; i<arrBigDot.length; i++){
         arrBigDot[i].style.transform ="scale(0.5)";
         arrBigDot[i].style.transition="all 0.3s";
      }
   }
   else{
      for(i=0; i<arrBigDot.length; i++){
         arrBigDot[i].style.transform ="scale(1)";
         arrBigDot[i].style.transition="all 0.3s";
      }
   }
   sizeDot=!sizeDot;
}

function moveMan(idMan){
  var man = document.getElementById(idMan);
  if(man == null){
    return;
  }
  checkGameOver(idMan);
  let location = {data_i:0,data_j:0};
  getMatrixLocation(man,location);
  let transform_x = parseInt(man.getAttribute("transform_x"));
  let transform_y = parseInt(man.getAttribute("transform_y"));
  let prev_rand = parseInt(man.getAttribute("prev_rand"));
  var changeFlag = false;
  var trans = "";
  var rand = -1;
  if(prev_rand != -1){
    rand = prev_rand;
  }
  else{
    rand = Math.floor(Math.random() * 4) + 1;
  }
  while(!changeFlag){
    switch(rand){
      case 1:
        if(mat[location.data_i-1][location.data_j] == 1){//top
          trans = 'translate(' + transform_x + 'px, ' + (transform_y - 30 )+ 'px)';
          man.setAttribute("alt","man_" + (location.data_i-1) + "_" + (location.data_j));
          man.setAttribute("transform_y",transform_y - 30);
          changeFlag = true;
        }
        break;
      case 2:
        if(mat[location.data_i][location.data_j+1] == 1||mat[location.data_i][location.data_j+1] == 8){//right
          trans = 'translate(' + (transform_x + 30 )+ 'px, ' + transform_y + 'px)';
          man.setAttribute("alt","man_" + (location.data_i) + "_" + (location.data_j + 1));
          man.setAttribute("transform_x",transform_x + 30);
          changeFlag = true;
        }
        break;
        case 3:
        if(mat[location.data_i+1][location.data_j] == 1){//bottom
          trans = 'translate(' + transform_x + 'px, ' + (transform_y + 30) + 'px)';
          man.setAttribute("alt","man_" + (location.data_i+1) + "_" + (location.data_j));
          man.setAttribute("transform_y",transform_y + 30);
          changeFlag = true;
        }
        break;
        case 4:
        if(mat[location.data_i][location.data_j-1] == 1||mat[location.data_i][location.data_j+1] == 8){//left
          trans = 'translate(' + (transform_x - 30) + 'px, ' + transform_y + 'px)';
          man.setAttribute("alt","man_" + (location.data_i) + "_" + (location.data_j-1));
          man.setAttribute("transform_x",transform_x - 30);
          changeFlag = true;
        }
        break;
    }
    if(!changeFlag){
      rand = Math.floor(Math.random() * 4) + 1;
    }
  }
  man.setAttribute("prev_rand",rand);
  man.style.transform = trans;
  man.style.transition="all 0.3s";
}

function moveByStart(idMan){
    var man = document.getElementById(idMan);
    let location = {data_i:0,data_j:0};
    getMatrixLocation(man,location);
    if(idMan == "red-man" && location.data_i == 10 && location.data_j == 9){
      man.style.transform = "translate(0px, -30px);";
      man.setAttribute("transform_y",-30);
      man.setAttribute("alt","man_" + (location.data_i-1) + "_" + (location.data_j));
      man.style.transition="all 0.3s";
    }
    else if(idMan == "blue-man" && location.data_i == 10 && location.data_j == 8){
      man.style.transform = "translate(30px, 0px);";
      man.style.transform = "translate(30px, -30px);";
      man.setAttribute("transform_y",-30);
      man.setAttribute("transform_x",30);
      man.setAttribute("alt","man_" + (location.data_i-1) + "_" + (location.data_j+1));
      man.style.transition="all 0.3s";
    }
    else if(idMan == "pink-man" && location.data_i == 10 && location.data_j == 10){
      man.style.transform = "translate(-30px, 0px);";
      man.style.transform = "translate(-30px, -30px);";
      man.setAttribute("transform_y",-30);
      man.setAttribute("transform_x",-30);
      man.setAttribute("alt","man_" + (location.data_i-1) + "_" + (location.data_j-1));
      man.style.transition="all 0.3s";
    }  
  }

function resetGame(){
  //reset mans
  idsArr.forEach(id=>{
    let man = document.getElementById(id + "-man");
    man.style.transform = "translate(0px, 0px);";
    man.setAttribute("transform_x",0);
    man.setAttribute("transform_y",0);
    man.setAttribute("prev_rand",-1);
    switch(id){
      case "red":
        man.setAttribute("alt","man_10_9");
        break;
        case "orange":
          man.setAttribute("alt","man_9_9");
          break;
          case "pink":
            man.setAttribute("alt","man_10_10");
            break;
            case "blue":
              man.setAttribute("alt","man_10_8");
              break;
    }
  });
  //reset user
  let user = document.getElementById("user");
  user.setAttribute("src","img/user/uRight.png");
  user.style.transform = "translate(0px, 0px)";
  user.style.transition="all 0.3s";
  transformFirstValue = transformSecondValue = 0;
  userX = 9;
  userY =12;
  //start first moves
  moveByStart("red-man");
  moveByStart("blue-man");
  moveByStart("pink-man"); 
}

function checkGameOver(id){
  let manElem = document.getElementById(id);
  if(manElem == null){
    return;
  }
  let location = {data_i:0,data_j:0};
  getMatrixLocation(manElem,location);
  if(userY == location.data_i && userX == location.data_j){
    document.getElementById("level"+userLives).style.opacity="0%";
    userLives--;
    if(userLives==-1){
      audio = new Audio();
      audio.src = 'audio/end.mp3';
      audio.play();
      endGame();
    }
    else{
      audio = new Audio();
      audio.src = 'audio/die.mp3';
      audio.play();
      resetGame();
      
    }
  }
}
function onKeyDown(){
 var keyCode=event.code;
  if (keyCode == "ArrowLeft") { // Left arrow
   if (mat[userY][userX - 1] != 0&&userX - 1 >-1) {
     userX -= 1; 
     transformFirstValue -= 30;
     transformSecondValue += 0;
     document.getElementById("user").src="img/user/uLeft.png";
   }
 } else if (keyCode == "ArrowUp") { // Up arrow
   if (mat[userY - 1][userX] != 0) {
     userY -= 1;
     transformFirstValue += 0;
     transformSecondValue -= 30;
     document.getElementById("user").src="img/user/uUp.png";
   }
 } else if (keyCode =="ArrowRight") { // Right arrow
   if ( mat[userY][userX + 1] != 0&&userX + 1 <19) {
     userX += 1;
     transformFirstValue += 30;
     transformSecondValue += 0;
     document.getElementById("user").src="img/user/uRight.png";
}
 } else if (keyCode == "ArrowDown") { // Down arrow
   if (mat[userY + 1][userX] != 0) {
     userY += 1;
     transformFirstValue += 0;
     transformSecondValue += 30;
     document.getElementById("user").src="img/user/uDown.png";
   }
 }
  user.style.transform = 'translate(' + transformFirstValue + 'px, ' + transformSecondValue + 'px)';
  user.style.transition="all 0.3s";
  var dots = document.querySelector(".dot_" + userY + "_" + userX);
  points=Number(document.querySelector(".points").innerHTML);
  if(dots != null){
    parent = dots.parentElement;
    parent.removeChild(dots);

    points+=10;
    document.querySelector(".points").innerHTML=points;
    audio = new Audio();
    audio.src = 'audio/eating.short.mp3';
    audio.play();
  }
  var bigdots = document.querySelector(".bigDot_" + userY + "_" + userX);
  if(bigdots != null){
    parent = bigdots.parentElement;
    parent.removeChild(bigdots);
    points+=20;
    document.querySelector(".points").innerHTML=points;
    audio = new Audio();
    audio.src = 'audio/eatghost.mp3';
    audio.play();
     let bonus=document.createElement("img");
     bonus.setAttribute("src","img/bonus.gif");
     bonus.setAttribute("class","bonus");
     document.body.appendChild(bonus);
     setTimeout(() => {
      bonus.remove();
    },900);
  }
  if(points==1900){
    audio = new Audio();
    audio.src = 'audio/end.mp3';
    audio.play();
    endGame();
  }
};

function endGame(){
  flag=1;
clearInterval(tBlue);
 clearInterval(tPink);
 clearInterval(tRed);
 clearInterval(tOrange);
 document.removeEventListener('keydown',onKeyDown);
 let gamer=document.createElement("img");
 if(points==1900){
  gamer.setAttribute("src","img/win.gif");
  gamer.setAttribute("class","winner");
 }
 
 else{
  gamer.setAttribute("src","img/gamer.gif");
  gamer.setAttribute("class","gamer");
 }
 document.body.appendChild(gamer);
 setTimeout(() => {
  gamer.remove();
  document.getElementById("matrix").remove();
 document.getElementById("score").remove();
 let div=document.createElement("div");
 div.setAttribute("id","winDiv");
let logIn=document.createElement("p");
logIn.setAttribute("class","logIn");
logIn.innerHTML="LOG IN:";
div.appendChild(logIn);
let saveName=document.createElement("input");
 saveName.setAttribute("class","saveName");
 div.appendChild(saveName);
 let set_back_div=document.createElement("div");
 set_back_div.setAttribute("class","set_back_div");
 let back=document.createElement("a");
back.setAttribute("class","back");
back.setAttribute("href","../HomePage Pacman/homePagePacman.html");
back.innerHTML="back";
set_back_div.appendChild(back);
 let set=document.createElement("p");
 set.setAttribute("class","set");
 set.innerHTML="set";
 set.addEventListener("click",setDetails);
set_back_div.appendChild(set);
div.appendChild(set_back_div);
let logInImg=document.createElement("img");
logInImg.setAttribute("src","img/eating.gif");
logInImg.setAttribute("class","logInImg");
div.appendChild(logInImg);
document.body.appendChild(div);
}, 2400);

}

function setDetails(){
  saveName=document.querySelector(".saveName").value;
  if(saveName=="")
  document.querySelector(".saveName").style.border="red 5px solid";
  else{
   arrScores= localStorage.getItem("scores");
   arrScores=JSON.parse(arrScores) || [];
   console.log(arrScores);
   for(let i=0;i<arrScores.length;i++){
    if(arrScores[i].playerName===saveName){
      if(arrScores[i].playerPoints<points){
        arrScores[i].playerPoints=points
        arrScores.sort((a,b)=>b.playerPoints-a.playerPoints);
      }
      
       isExist=1;
      break;
    }
   }
  if(isExist==0){
     arrScores.push({playerName:saveName,playerPoints:points});
     arrScores.sort((a,b)=>b.playerPoints-a.playerPoints);
  }
    let newArr=JSON.stringify(arrScores);
    localStorage.setItem("scores",newArr);
    set=document.querySelector(".set");
    set.style.color="grey"
    document.querySelector(".saveName").style.border="none";
    set.removeEventListener("click",setDetails);
  }
  
}

function getMatrixLocation(manElem,location){
  let data = manElem.getAttribute("alt");
  let arr = data.split("_");
  location.data_i = parseInt(arr[1]);
  location.data_j = parseInt(arr[2]);
}