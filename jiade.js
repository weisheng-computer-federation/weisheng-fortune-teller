var a;
function meiranyong(){
	var nian=document.getElementById("pai01");
	// nian.innerHTML=Math.floor((Math.random()*100)+1);
	var xingyun=Math.floor((Math.random()*100)+1);
	if(xingyun>=90){
		nian.innerHTML="§大吉§";
	}
	else nian.innerHTML="§小吉§"+xingyun;
	
	ji();
}


var jishu;
var daji;

function ji(){
	daji=Math.floor((Math.random()*100)+1);
	panji();
}
function panji(){
	var yue=document.getElementById("pai02");
	if(daji>=90){
		yue.innerHTML="§大吉§";
	}
	else if((daji>=70)&&(daji<90)){
		yue.innerHTML="§中吉§";
	}
	else if((daji>=50)&&(daji<70)){
		yue.innerHTML="§小吉§";
	}
	else if((daji>=30)&&(daji<50)){
		yue.innerHTML="§中平§";
	}
	else if((daji>=10)&&(daji<30)){
		yue.innerHTML="§ 凶 §";
	}
	else if((daji>=0)&&(daji<10)){
		yue.innerHTML="§大凶§";
	}
}

var 
zzp=["翠叶残","上玉钩","挂玉钩","过橘洲","庭院虚","","","","","","","","","","","","",""],
zpp=["度春风","绿波间","忆潇湘","玉笙寒","倚阑干","思悠悠","锁重楼","雨中愁","接天流","恨春残","画堂前","凭朱栏","锦衾寒","入长安","满重湖","不可遮","已无花","鬓先华","楚天长","是归家"],
pzz=["何限恨","云外信","春色暮","流水淡","闲院宇","晴日暖","香烬落","花淡薄","罗幌卷","","","","","","","",""],
zpz=["共憔悴","君莫怪","窗外雨","映枝转","","","","","","","","","","","","","",""],
zz=["菡萏","细雨","照壁","指点","东风","翠叶","暗想","咫尺","旧书","夜夜",""],
pp=["相思","伤心","山河","姑苏","倾城","韶光","阑干","悠悠","悠悠","芭蕉","征鸿","天涯","今朝","珠帘"],
pz=["明月","携手","凝睇","回首","青鸟","流水","千载","菱蔓","画堂","青嶂"],
zp=["玉笙","泪珠","绿波","江山","宫殿","藕花","莲叶","几时"];




// $("button").click(function(){
//   $("div").animate({background: url('neilong.jpg') no-repeat 50% 50%;});
// }); 
// $(".pai").click = function(){
// 	$('.pai').css({background: url('neilong.jpg') no-repeat 50% 50%;});
// };
// $(".pai").onclick = function(){
// 	$("button").click(function(){
//$('.pai').css({"background": "red"});
// 	$('#pai01').css("background","url(neilong.jpg)");
// 	};