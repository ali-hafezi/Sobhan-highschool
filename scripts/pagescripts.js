// JavaScript Document
/// first segment controling whole site ///////
var controller=1;
var thisid="";
var thisid1="";
function over(e1,e2)
{
 var Id=$("#b"+e1);
 if("boxover"+e1!=thisid1){	 
  if(e2){
	  if(controller)
   Id.fadeIn(20);
   Id.animate({top:"-7px"},100); 
   Id.animate({top:"0px"},100);  
  }else{	
   Id.animate({top:"7px"},100); 
   Id.animate({top:"-7px"},100); 
   Id.animate({top:"3px"},100); 
   Id.animate({top:"0px"},100); 
    if(controller)
   Id.fadeOut(300);
  }}
}

$(document).ready(function(){
  $(".boxover").mouseenter(function(){
 if(this!=thisid)
  $(this).animate({top:'0px',left:'0px'},"fast");	     
  });
});
$(document).ready(function(){
  $(".boxover").mouseleave(function(){
  $(this).animate({top:'-238px',left:'-233px'},"fast");
 });
});
$(window).load(function(){
 for(var i=1;i<7;i++){
  $("#box"+i).fadeIn(500*i);}
});

function clician(e)
{
	document.getElementById("page7").innerHTML="";
	if(controller){
	document.getElementById("main").style.width="1097px";
	document.getElementById("picmenubar").style.width="273px";
	document.getElementById("picmenubar").style.height="670px";
	document.getElementById("picmenubar").style.paddingTop="50px";
	document.getElementById("content").style.width="700px";
	$("h3").fadeIn(30); 
	controller=0;
	}
  if("boxover"+e!=thisid1){
       $("#picmenubar").animate({opacity:'0'},20);
	   if(e!=7)
	document.getElementById("picmenubar").style.backgroundImage="url('images/pic"+e+".png')";
	for(var i=1;i<8;i++)
		document.getElementById("page"+i).style.display="none";
		$("#page"+e).fadeIn(1500);
	//document.getElementById("page"+e).style.display="block";
    $("#picmenubar").animate({opacity:'1'},700); 
   }
  thisid1="boxover"+e;
}


$(document).ready(function(){
  $(".boxover").click(function(){
 var number = 200 + Math.floor(Math.random() * 201);
  if(this!=thisid)  
   for(var i=1;i<7;i++)
    {
     $("#box"+i).animate({left:'700px'},number+i*50);
     $("#box"+i).animate({left:'0px'},number+i*50);
    }
thisid=this;
  }); 
});

function resetsite()
{
	document.getElementById("page7").innerHTML="";
 if(!controller){
	 $("body").fadeOut(50);
     controller=1;
     thisid="";
     thisid1="";
	 	for(var i=1;i<8;i++)
		document.getElementById("page"+i).style.display="none";
		
	document.getElementById("main").style.width="784px";
	document.getElementById("picmenubar").style.width="330px";
	document.getElementById("picmenubar").style.height="620px";
	document.getElementById("picmenubar").style.paddingTop="100px";
	document.getElementById("content").style.width="330px";
	$("h3").fadeOut(30); 
	document.getElementById("picmenubar").style.backgroundImage="url('')";
	$("body").fadeIn(2000);
	}
}
/////////end of first segment/////////
///////second segment /////////
////slider part/////
var x=0;
var number=3;
var textstript= new Array('نفرات برتر سبحان','این بهار بر شما مبارک','سال نو مبارک');
function C(e)
{
	e=e*(number-2)+1;
	x=((x+(e*600))%(number*600));
  $("#slider-rail").animate({left:'-'+x+'px'},"slow");
  var count=x/600;	
  document.getElementById("text-strip").innerHTML="<a>"+textstript[count]+"</a>";
}
$(document).ready(function(){
  $("#slider").mouseenter(function(){
  $("#btnright").fadeIn(100);
  $("#btnleft").fadeIn(100);	
    $("#text-strip").fadeIn(100);  
  });  
  });

$(document).ready(function(){
  $("#slider").mouseleave(function(){
  $("#btnright").fadeOut(100);
  $("#btnleft").fadeOut(100);
      $("#text-strip").fadeOut(100);
 });
});
function btnover(e1,e2)
{
	document.getElementById(e1).style.backgroundPosition=e2;
}
/////end of slider/////


var move=0;
var move1=0;
var move2=0;
var move3=0;
var move4=0;
function btnover(e1,e2)
{
	document.getElementById(e1).style.backgroundPosition=e2;
}

$(document).ready(function(){
  $("#latestnews-btnbottom").click(function(){
	  if(move<1){
		   move++;
   $("#latestnews-rail").animate({top:'-'+move*300+'px'},"slow");	
   }    
  });
});
$(document).ready(function(){
  $("#latestnews-btntop").click(function(){
	  if(move>0){
		   move--;
   $("#latestnews-rail").animate({top:move*300+'px'},"slow");
	  }
  });
});
$(document).ready(function(){
  $("#various-btnbottom").click(function(){
	  if(move1<1){
		   move1++;
   $("#various-rail").animate({top:'-'+move1*300+'px'},"slow");	
   }    
  });
});
$(document).ready(function(){
  $("#various-btntop").click(function(){
	  if(move1>0){
		   move1--;
   $("#various-rail").animate({top:move1*300+'px'},"slow");
	  }
  });
});

$(document).ready(function(){
  $("#assay-btnbottom").click(function(){
	  if(move2<1){
		   move2++;
   $("#assay-rail").animate({top:'-'+move2*300+'px'},"slow");	
   }    
  });
});
$(document).ready(function(){
  $("#assay-btntop").click(function(){
	  if(move2>0){
		   move2--;
   $("#assay-rail").animate({top:move2*300+'px'},"slow");
	  }
  });
});

$(document).ready(function(){
  $("#comic-btnbottom").click(function(){
	  if(move3<1){
		   move3++;
   $("#comic-rail").animate({top:'-'+move3*300+'px'},"slow");	
   }    
  });
});
$(document).ready(function(){
  $("#comic-btntop").click(function(){
	  if(move3>0){
		   move3--;
   $("#comic-rail").animate({top:move3*300+'px'},"slow");
	  }
  });
});

$(document).ready(function(){
  $("#othersite-btnbottom").click(function(){
	  if(move4<1){
		   move4++;
   $("#othersite-rail").animate({top:'-'+move4*300+'px'},"slow");	
   }    
  });
});
$(document).ready(function(){
  $("#othersite-btntop").click(function(){
	  if(move4>0){
		   move4--;
   $("#othersite-rail").animate({top:move4*300+'px'},"slow");
	  }
  });
});
/////end of second segment///////////




