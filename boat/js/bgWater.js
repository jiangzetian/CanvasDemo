/*
*
* @ 背景滚动
* 
* */


// let disRoll = 0;
let bgImg = new Image();
bgImg.src = "image/water.png"

function bgWater(){
	// disRoll += 1;
	// if(disRoll > sw){
	// 	disRoll = 0;
	// }
	ctx.beginPath();
	ctx.drawImage(bgImg,0,0,sw,sh);
	
	// ctx.beginPath();
	// ctx.drawImage(bgImg,0,0,sw,sh)
}