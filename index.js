
var future;

function meiranyong(){
    // var nian=document.getElementById("pai01");
    
    // var xingyun=Math.floor((Math.random()*100)+1);
    // if(xingyun>=90){
    // 	nian.innerHTML="§大吉§";
    // }
    // else nian.innerHTML="§小吉§"+xingyun;
    // 
    // ji();
    // $("#pai01").removeClass("pai");
    // $("#pai01").addClass("haihai");

    // randd(zpp);
    ji();
    zuoshi();
    
    //disabled
    $("#pailan").css("disabled","none");
}

var jishu;
var daji;
function ji(){
    daji=Math.floor((Math.random()*100)+1);
    panji();
}
function panji(){
    // var yue=document.getElementById("pai02");
    
    if(daji>=90){
        future="<p style='color:red;'>§大吉§</p>";
    }
    else if((daji>=70)&&(daji<90)){
        future="<p style='color:red;'>§中吉§</p>";
    }
    else if((daji>=50)&&(daji<70)){
        future="<p style='color:red;'>§小吉§</p>";
    }
    else if((daji>=30)&&(daji<50)){
        future="<p>§中平§</p>";
    }
    else if((daji>=10)&&(daji<30)){
        future="<p style='color:red;'>§小吉§</p>";
    }
    else if((daji>=0)&&(daji<10)){
        future="<p>§中平§</p>";
    }
    
    // var yue=document.getElementById("pai02");
    // if(daji>=90){
    // 	yue.innerHTML="<p>§大吉§</p>";
    // }
    // else if((daji>=70)&&(daji<90)){
    // 	yue.innerHTML="<p>§中吉§</p>";
    // }
    // else if((daji>=50)&&(daji<70)){
    // 	yue.innerHTML="<p>§小吉§</p>";
    // }
    // else if((daji>=30)&&(daji<50)){
    // 	yue.innerHTML="<p>§中平§</p>";
    // }
    // else if((daji>=10)&&(daji<30)){
    // 	yue.innerHTML="<p>§ 凶 §</p>";
    // }
    // else if((daji>=0)&&(daji<10)){
    // 	yue.innerHTML="<p>§大凶§</p>";
    // }
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

//-----作诗-----
var ifused=[];
var ifcnt=0;

function randd(t){
    console.log(t);
            var k,cnt = 0;
            while(t[cnt] != ""){
                cnt=cnt+1;
                // console.log(cnt)
            }
            do{
                    k = Math.floor((Math.random()*100)+1)% cnt;
                    console.log(k);
            }while(jQuery.inArray( t[k], ifused )!=-1);
            ifused[ifcnt]=t[k];
            ifcnt=ifcnt+1;
            return t[k];
}

function zuoshi() {
    
    var ri=document.getElementById("pai03");
    console.log("faqqq");
        // ri.innerHTML="摊破·浣溪沙"+"<br/>"+
        //         randd(zz)+randd(pp)+randd(zzp)+","
        //         +randd(pp)+randd(pz)+randd(zpp)+"。"+"<br/>"
        //         +randd(pz)+randd(pp)+randd(zpz)+"，"
        //         +randd(zpp)+"。"+"<br/>"
        //         //----------------
        //         +randd(zz)+randd(pp)+randd(zzp)+","
        //         +randd(pp)+randd(pz)+randd(zpp)+"。"+"<br/>"
        //         +randd(pz)+randd(zp)+randd(pzz)+"，"
        //         +randd(zpp)+"。"+"<br/>";
        
        future=future+"<div>摊破·浣溪沙<br/><br/>"+
                randd(zz)+randd(pp)+randd(zzp)+","
                +randd(pp)+randd(pz)+randd(zpp)+"。"+"<br/><br/>"
                +randd(pz)+randd(pp)+randd(zpz)+"，"
                +randd(zpp)+"。"+"<br/><br/>"
                //----------------
                +randd(zz)+randd(pp)+randd(zzp)+","
                +randd(pp)+randd(pz)+randd(zpp)+"。"+"<br/><br/>"
                +randd(pz)+randd(zp)+randd(pzz)+"，"
                +randd(zpp)+"。"+"</div>";
        
        
    ifused=[""];
}

function fanpai(pai){
    if (check() == 1){
        alert('请输入您的生日!');
        return;
    }
    if (check() == 2){
        alert('已抽过牌!');
        return;
    }
    pai.removeClass("pai");
    pai.addClass("haihai");
    pai[0].innerHTML=future;
    $("#pailan").css("disabled","disabled");
}
function check(){
    if ($('.haihai').length > 0)
        return 2;
    let inputs = $('input')
    if (inputs[0].value == '' || inputs[1].value == '' || inputs[2].value == '')
        return 1;
    return 0;
}




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