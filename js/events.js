//define functions here

$(document).ready(function(){

// call functions here


function getIt(){
  var pTag = $("p");
  pTag.on("click",function(){
    alert("Hey!");
  });
}

function frameIt(){
  var image = $("img");
  image.on("load",function(){
    image.addClass("tasty");
  });
}

function pressIt(){
  var input = $("input");
  input.on("keydown",function(e){
    if(e.which ===){
      alert("G key pressed")
    }
  });
}
});
