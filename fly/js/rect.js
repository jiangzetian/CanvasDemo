/*
*
* @矩形类 子弹/敌机/奖励 父级
* */

class Rect {
	constructor(x,y) {
	    this.x = x;
		this.y = y;
		this.isDel = false;//是否被删除
		this.speed = 0; //速度 继承后重写
		this.showIndex = -1;
 	}
	
	move(){
		this.y += this.speed;
		if((this.speed>0 && this.y > sh + this.h) || (this.speed < 0 && this.y<-this.h)){
			this.isDel = true;
		}
	}
	
	draw(img){
		this.move();
		if(this.showIndex != -1){
			//敌机 奖励
			if(this.hp){
				this.bol();
			}
			ctx.drawImage(this.img,this.w*this.showIndex,0,this.w,this.h,this.x,this.y,this.w,this.h);
		}else{
			//子弹
			ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
		}
	}
}