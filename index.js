document.querySelectorAll(".btn")[5].addEventListener("click",onClick);
var k=document.querySelectorAll(".btn").length;
for(var i=0;i<6;i++)
{
  document.querySelectorAll(".btn")[i].addEventListener("click",onClick);
}


function onClick()
{
 var n= this.innerHTML;
  playSound(n);
}

document.querySelectorAll("keypress",keyPressed);
function keyPressed()
{
  playSound(event.key);
}

function playSound(n)
{
  var audio=new Audio("sounds/tom-1.mp3");
  switch(n)
  {  
      case 'w' : 
        audio=new Audio("sounds/tom-1.mp3");
        break;
      case 'a' : 
        audio=new Audio("sounds/tom-2.mp3");
        break;
      case 's' : 
        audio=new Audio("sounds/tom-3.mp3");
        break;    
      case 'd' : 
        audio=new Audio("sounds/tom-4.mp3");
        break;      
      case 'j' : 
        audio=new Audio("sounds/snare.mp3");
        break;
      case 'k' : 
        audio=new Audio("sounds/crash.mp3");
        break;    
      case 'l' : 
        audio=new Audio("sounds/kick-bass.mp3");
        break;
      default:
        console.log("default ");
  }
}
