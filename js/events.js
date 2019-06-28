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
    image.addClass()
  });
}

});
