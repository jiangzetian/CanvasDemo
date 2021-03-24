class image {
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}
	move(mx){
		this.x += mx;
	}
	draw(){
		ctx.beginPath();
		ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
	}
}