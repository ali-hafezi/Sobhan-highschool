// JavaScript Document
var late=new Array();
late[0]="نوروز برابر با یکم فروردین ماه (روزشمار خورشیدی)، جشن آغاز سال و یکی از کهن‌ترین جشن‌های به جا مانده از دوران باستان است.";
late[1]=Article[4];
late[2]=Article[5];
late[3]=nw[0];
late[4]=nw[1];
late[5]=nw[2];
function loadlatest(e){
	clician(7);
	document.getElementById("page7").innerHTML="<div class='header' style='width:700px;'><h4>"+latestnewsload[e].header+"</h4></div><div class='text-content'>"+late[e]+"</div><div class='minifooter' style='width:700px;'></div>";
}
function v(e)
{
	clician(7);
	document.getElementById("page7").innerHTML="<div id='video'><object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' width='320' height='240' id='FLVPlayer'>  <param name='movie' value='FLVPlayer_Progressive.swf' /><param name='quality' value='high'><param name='wmode' value='opaque'><param name='scale' value='noscale'><param name='salign' value='lt'><param name='FlashVars' value='&amp;MM_ComponentVersion=1&amp;skinName=Clear_Skin_3&amp;streamName=video/1&amp;autoPlay=true&amp;autoRewind=false' /><param name='swfversion' value='8,0,0,0'><param name='expressinstall' value='scripts/expressInstall.swf'><object type='application/x-shockwave-flash' data='FLVPlayer_Progressive.swf' width='640' height='480'><param name='quality' value='high'><param name='wmode' value='opaque'><param name='scale' value='noscale'><param name='salign' value='lt'><param name='FlashVars' value='&amp;MM_ComponentVersion=1&amp;skinName=Clear_Skin_3&amp;streamName=video/"+e+"&amp;autoPlay=true&amp;autoRewind=false' /><param name='swfversion' value='8,0,0,0'><param name='expressinstall' value='scripts/expressInstall.swf'><div><h4>Content on this page requires a newer version of Adobe Flash Player.</h4><p><a href='http://www.adobe.com/go/getflashplayer'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' /></a></p></div></object></object><script type='text/javascript'>swfobject.registerObject('FLVPlayer');</script></div>";
}