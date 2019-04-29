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
	// $('#pai01').css("background","url(neirong.jpg)");
	$("#pai01").removeClass("pai");
	$("#pai01").addClass("haihai");
	
	
	// alert(randd(zpp.join("-")));
	randd(zpp);
	// alert(zpp.join("-"));
	zuoshi();
}

// function draww(a){
// 	var 
// }



var jishu;
var daji;
function ji(){
	daji=Math.floor((Math.random()*100)+1);
	panji();
}
function panji(){
	var yue=document.getElementById("pai02");
	if(daji>=90){
		yue.innerHTML="<p>§大吉§</p>";
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
zpp=["度春风","绿波间","忆潇湘","玉笙寒","倚阑干","思悠悠","锁重楼","雨中愁","接天流","恨春残","画堂前","凭朱栏","锦衾寒","入长安","满重湖","不可遮","已无花","鬓先华","楚天长","是归家",""],
pzz=["何限恨","云外信","春色暮","流水淡","闲院宇","晴日暖","香烬落","花淡薄","罗幌卷","","","","","","","",""],
zpz=["共憔悴","君莫怪","窗外雨","映枝转","","","","","","","","","","","","","",""],
zz=["菡萏","细雨","照壁","指点","东风","翠叶","暗想","咫尺","旧书","夜夜",""],
pp=["相思","伤心","山河","姑苏","倾城","韶光","阑干","悠悠","悠悠","芭蕉","征鸿","天涯","今朝","珠帘",""],
pz=["明月","携手","凝睇","回首","青鸟","流水","千载","菱蔓","画堂","青嶂",""],
zp=["玉笙","泪珠","绿波","江山","宫殿","藕花","莲叶","几时",""];

var ifused=[];
var ifcnt=0;



function randd(t){
	// var if_use = [];
	console.log(t);
	        var k,cnt = 0;
			// var t=aa.soilt("-")
	        while(t[cnt] != ""){
				cnt=cnt+1;
				// console.log(cnt)
			}
	        do{
	                k = Math.floor((Math.random()*100)+1)% cnt;
					console.log(k);
					// }while(0);
	        }while(jQuery.inArray( t[k], ifused )!=-1);
			ifused[ifcnt]=t[k];
			ifcnt=ifcnt+1;
			return t[k];
}

function zuoshi() {
	
	var ri=document.getElementById("pai03");
	console.log("faqqq");
        ri.innerHTML="摊破·浣溪沙"+"<br/>"+
                randd(zz)+randd(pp)+randd(zzp)+","
                +randd(pp)+randd(pz)+randd(zpp)+"。"+"<br/>"
                +randd(pz)+randd(pp)+randd(zpz)+"，"
                +randd(zpp)+"。"+"<br/>"
                //----------------
                +randd(zz)+randd(pp)+randd(zzp)+","
                +randd(pp)+randd(pz)+randd(zpp)+"。"+"<br/>"
                +randd(pz)+randd(zp)+randd(pzz)+"，"
                +randd(zpp)+"。"+"<br/>";
	ifused=[""];
}


// function randdzzp(){
// 	// var if_use = [];
// 	        var k,cnt = 0;
// 			
// 	        while(zzp[cnt] != "") cnt=cnt+1;
// 	        do{
// 	                k = Math.floor((Math.random()*100)+1)% cnt;
// 	        }while(jQuery.inArray( zzp[k], ifused )!=-1);
// 			ifused[ifcnt]=zzp[k];
// 			ifcnt=ifcnt+1;
// 			return zzp[k];
// }

// function randdzpp(){
// 	// var if_use = [];
// 	        var k,cnt = 0;
// 			
// 	        while(zpp[cnt] != "") cnt=cnt+1;
// 	        do{
// 	                k = Math.floor((Math.random()*100)+1)% cnt;
// 	        }while(jQuery.inArray( zpp[k], ifused )!=-1);
// 			ifused[ifcnt]=zpp[k];
// 			ifcnt=ifcnt+1;
// 			return zpp[k];
// }
// 
// function randdpzz(){
// 	// var if_use = [];
// 	        var k,cnt = 0;
// 			
// 	        while(pzz[cnt] != "") cnt=cnt+1;
// 	        do{
// 	                k = Math.floor((Math.random()*100)+1)% cnt;
// 	        }while(jQuery.inArray( pzz[k], ifused )!=-1);
// 			ifused[ifcnt]=pzz[k];
// 			ifcnt=ifcnt+1;
// 			return pzz[k];
// }
// 
// function randdzpz(){
// 	// var if_use = [];
// 	        var k,cnt = 0;
// 			
// 	        while(zpz[cnt] != "") cnt=cnt+1;
// 	        do{
// 	                k = Math.floor((Math.random()*100)+1)% cnt;
// 	        }while(jQuery.inArray( zpz[k], ifused )!=-1);
// 			ifused[ifcnt]=zpz[k];
// 			ifcnt=ifcnt+1;
// 			return zpz[k];
// }
// 
// function randzz(){
// 	// var if_use = [];
// 	        var k,cnt = 0;
// 			
// 	        while(zz[cnt] != "") cnt=cnt+1;
// 	        do{
// 	                k = Math.floor((Math.random()*100)+1)% cnt;
// 	        }while(jQuery.inArray( zz[k], ifused )!=-1);
// 			ifused[ifcnt]=zz[k];
// 			ifcnt=ifcnt+1;
// 			return zz[k];
// }
// 
// function randpp(){
// 	// var if_use = [];
// 	        var k,cnt = 0;
// 			
// 	        while(pp[cnt] != "") cnt=cnt+1;
// 	        do{
// 	                k = Math.floor((Math.random()*100)+1)% cnt;
// 	        }while(jQuery.inArray( pp[k], ifused )!=-1);
// 			ifused[ifcnt]=pp[k];
// 			ifcnt=ifcnt+1;
// 			return pp[k];
// }
// 
// function randpz(){
// 	// var if_use = [];
// 	        var k,cnt = 0;
// 			
// 	        while(pz[cnt] != "") cnt=cnt+1;
// 	        do{
// 	                k = Math.floor((Math.random()*100)+1)% cnt;
// 	        }while(jQuery.inArray( pz[k], ifused )!=-1);
// 			ifused[ifcnt]=pz[k];
// 			ifcnt=ifcnt+1;
// 			return pz[k];
// }
// 
// function randzp(){
	// var if_use = [];
// 	        var k,cnt = 0;
// 			
// 	        while(pz[cnt] != "") cnt=cnt+1;
// 	        do{
// 	                k = Math.floor((Math.random()*100)+1)% cnt;
// 	        }while(jQuery.inArray( zp[k], ifused )!=-1);
// 			ifused[ifcnt]=zp[k];
// 			ifcnt=ifcnt+1;
// 			return zp[k];
// }



























// function randd(t){
// 		// set<string> if_use;
// 		var if_use = [];
//         var k,cnt = 0;
//         while(t[cnt] != "") ++cnt;
//         do{
//                 k = Math.floor((Math.random()*100)+1)% cnt;
//         }while(if_use.count(t[k]));
//         // if_use.insert(t[k]);
// //         int a = 0,b = 10000000;
// //         while (b--){
// //                 ++ a;
// //         }
//         return t[k];
// }
// 
// function zuoshi() {
// 	
// 	var ri=document.getElementById("pai03");
// 	
//         //随机部分还没写
// 		
//         ri.innerHTML="摊破·浣溪沙+"<br/>"+
//                 randd(zz)+randd(pp)+randd(zzp)+","
//                 +randd(pp)+randd(pz)+randd(zpp)+"。+"<br/>"+
//                 +randd(pz)+randd(pp)+randd(zpz)+"，"+
//                 +randd(zpp)+"。+"<br/>"+
                //----------------
//                 +randd(zz)+randd(pp)+randd(zzp)+","+
//                 +randd(pp)+randd(pz)+randd(zpp)+"。+"<br/>"+
//                 +randd(pz)+randd(zp)+randd(pzz)+"，"+
//                 +randd(zpp)+"。+"<br/>";
// }








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