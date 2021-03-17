/*
*
* @英雄
* 
* */
let heroImg = new Image();
heroImg.src = "img/herofly.png";

let hero = {
	x:sw/2-50,
	y:sh - 135,
	w:100,
	h:124,
	showIndex:0,//雪碧图
	showMaxIndex:4,
	isBol:false,//是否爆炸
	isOver:false,//是否结束
	draw:function(){
		ctx.beginPath();
		if(this.isBol){
			this.showIndex ++;
			if(this.showIndex>this.showMaxIndex){
				this.showIndex = this.showMaxIndex;
				this.isOver = true;
			}
		}
		ctx.drawImage(heroImg,this.w*this.showIndex,0,this.w,this.h,this.x,this.y,this.w,this.h)
	}
}