var body = document.getElementById("body");
var calc = document.getElementById("calc");
var theme = document.getElementById("theme");
var themespan = document.getElementById("theme-span");
var move = document.getElementById("move");
var slider = document.getElementById("slider")
var ans = document.getElementById("ans");
var main = document.getElementById("main");
var btns = document.getElementsByClassName("btn");
var del = document.getElementById("del");
var reset = document.getElementById("reset");
var equal = document.getElementById("equal");
var i = 2;
move.addEventListener("click",function(){
  if ( i== 1) {
    theme1();
    i++;
  }else 
  if(i==2){
    theme2();
    console.log(1);
    i++;
  }
  else if(i == 3){
    theme3();
    i = 1;
  }
})
function theme1(){
 body.style.backgroundColor = "hsl(222, 26%, 31%)";
 body.style.transition = "background 1s";
 calc.style.color = "white";
 theme.style.color = "white";
 themespan.style.color = "white";
 move.style.backgroundColor = "hsl(223, 31%, 20%)";
 slider.style.backgroundColor = "hsl(6, 63%, 50%)";
 slider.style.transform = "translateX(1px)";
 slider.style.transition = "transform 1s,background 1s";
 ans.style.backgroundColor ="hsl(224, 36%, 15%)";
 ans.style.color = "white";
 main.style.backgroundColor = "hsl(223, 31%, 20%)";
 for(var j = 0;j < 18;j++){
   if(j==3){
     btns[j].style.backgroundColor = "hsl(225, 21%, 49%)";
     btns[j].style.boxShadow = "0 3px 0 hsl(224, 28%, 35%)";
     btns[j].style.color = "rgb(252, 250, 250)";
     continue;
   }
   if(j==16){
     btns[j].style.backgroundColor = "hsl(225, 21%, 49%)";
     btns[j].style.boxShadow = "0 3px 0 hsl(224, 28%, 35%)";
     btns[j].style.color = "rgb(252, 250, 250)";
     continue;
   }
   if(j==17){
     btns[j].style.backgroundColor = "hsl(6, 63%, 50%)";
     btns[j].style.boxShadow = "0 3px 0 hsl(6, 70%, 34%)";
     btns[j].style.color = "rgb(252, 250, 250)";
     continue;
   }
   btns[j].style.backgroundColor = "hsl(30, 25%, 89%)";
   btns[j].style.color = "hsl(221, 14%, 31%)";
   btns[j].style.boxShadow = "0 3px 0 hsl(28, 16%, 65%)";
 };
}

function theme2(){
 body.style.backgroundColor = "hsl(0, 0%, 90%)";
 body.style.transition = "background 1s";
 calc.style.color = "hsl(60, 10%, 19%)";
 theme.style.color = "hsl(60, 10%, 19%)";
 themespan.style.color = "hsl(60, 10%, 19%)";
 move.style.backgroundColor = "hsl(0, 5%, 81%)";
 slider.style.backgroundColor = "hsl(25, 98%, 40%)";
 slider.style.transform = "translateX(20.5px)";
 slider.style.transition = "transform 1s,background 1s";
 ans.style.backgroundColor ="hsl(0, 0%, 93%)";
 ans.style.color = "hsl(60, 10%, 19%)";
 main.style.backgroundColor = "hsl(0, 5%, 81%)";
 for(var j = 0;j < 18;j++){
   if(j==3){
     btns[j].style.backgroundColor = "hsl(185, 42%, 37%)";
     btns[j].style.boxShadow = "0 3px 0 hsl(185, 58%, 25%)";
     btns[j].style.color = "hsl(0, 0, 100%)";
     continue;
   }
   if(j==16){
     btns[j].style.backgroundColor = "hsl(185, 42%, 37%)";
     btns[j].style.boxShadow = "0 3px 0 hsl(185, 58%, 25%)";
     btns[j].style.color = "hsl(0, 0, 100%)";
     continue;
   }
   if(j==17){
     btns[j].style.backgroundColor = "hsl(25, 98%, 40%)";
     btns[j].style.boxShadow = "0 3px 0 hsl(25, 99%, 27%)";
     btns[j].style.color = "hsl(0, 0, 100%)";
     continue;
   }
   btns[j].style.backgroundColor = "hsl(45, 7%, 89%)";
   btns[j].style.color = "hsl(60, 10%, 19%)";
   btns[j].style.boxShadow = "0 3px 0 hsl(35, 11%, 61%)";
 };
}

function theme3(){
 body.style.backgroundColor = "hsl(268, 75%, 9%)";
 body.style.transition = "background 1s";
 calc.style.color = "hsl(52, 100%, 62%)";
 theme.style.color = "hsl(52, 100%, 62%)";
 themespan.style.color = "hsl(52, 100%, 62%)";
 move.style.backgroundColor = "hsl(268, 71%, 12%)";
 slider.style.backgroundColor = "hsl(176, 100%, 44%)";
 slider.style.transform = "translateX(41px)";
 slider.style.transition = "transform 1s,background 1s";
 ans.style.backgroundColor ="hsl(268, 71%, 12%)";
 ans.style.color = "hsl(52, 100%, 62%))";
 main.style.backgroundColor = "hsl(268, 71%, 12%)";
 for(var j = 0;j <= 17;j++){
   if(j==3){
     btns[j].style.backgroundColor = "hsl(281, 89%, 26%)";
     btns[j].style.boxShadow = "0 3px 0 hsl(285, 91%, 52%)";
     btns[j].style.color = "hsl(0, 0, 100%)";
     continue;
   }
   if(j==16){
     btns[j].style.backgroundColor = "hsl(281, 89%, 26%)";
     btns[j].style.boxShadow = "0 3px 0 hsl(285, 91%, 52%)";
     btns[j].style.color = "hsl(0, 0, 100%)";
     continue;
   }
   if(j==17){
     btns[j].style.backgroundColor = "hsl(176, 100%, 44%)";
     btns[j].style.boxShadow = "0 3px 0 hsl(177, 92%, 70%)";
     btns[j].style.color = " hsl(198, 20%, 13%)";
     continue;
   }
   btns[j].style.backgroundColor = "hsl(268, 47%, 21%)";
   btns[j].style.color = "hsl(52, 100%, 62%)";
   btns[j].style.boxShadow = "0 3px 0 hsl(290, 70%, 36%)";
 };
}

function answer(){
  
  ans.innerText = val;

}

// answer();
