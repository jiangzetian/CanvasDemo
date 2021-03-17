/*
*
* @ 背景滚动
* 
* */
//背景图偏移量
let disRoll = 0;
let bgImg = new Image();
bgImg.src = "img/background.png"

function bgScroll(){
	disRoll += 3;
	if(disRoll > sh){
		disRoll = 0;
	}
	ctx.beginPath();
	ctx.drawImage(bgImg,0,disRoll,sw,sh);
	
	ctx.beginPath();
	ctx.drawImage(bgImg,0,-sh + disRoll,sw,sh)
}