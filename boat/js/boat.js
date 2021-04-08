class Boat{
	constructor(img,x,y,w,h,direction) {
	    this.img=img;
	    this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		//移动方向
		this.direction = direction;
		//bottom-0 left-1 right-2 top-3
		this.yIndex = 0;
		//
		this.xIndex = 0;
		this.boatTimer = setInterval(()=>{
			if(boat.xIndex == 3){
				boat.xIndex = 0;
			}
			boat.xIndex ++;
		},1000/8);
	}
	update(){
		//碰撞检查
		if(this.y<=0 || this.y>=sh-this.h || this.x<=0 || this.x >= sw-this.w){
			// ctx.clearRect(0,0,sw,sh);
			clearInterval(this.boatTimer);
			clearInterval(timer);
			console.log('over')
			return;
		}
		switch(this.direction){
			case 'top':
				this.yIndex = 3;
				this.y -= 1;
			break;
			
			case 'right':
				this.yIndex = 2;
				this.x += 1;
			break;
			
			case 'bottom':
				this.yIndex = 0;
				this.y += 1;
			break;
			
			case 'left':
				this.yIndex = 1;
				this.x -= 1;
			break;
		}
	}
	draw(){
		ctx.drawImage(this.img,64*this.xIndex,64*this.yIndex,64,64,this.x,this.y,this.w,this.h);
		this.update();
	}
}

let boatImg = new Image();
boatImg.src = 'image/boat.png';
let boat = new Boat(boatImg,sw/2-30,sh/2-30,64,64,randDirection());

function createBoat(){
	boat.draw();
}

//随机方向
function randDirection(){
	//top right bottom left
	let randNum = rand(0,3);
	switch(randNum){
		case 0:
			return 'top';
		break;
		
		case 1:
			return 'right';
		break;
		
		case 2:
			return 'bottom';
		break;
		
		case 3:
			return 'left';
		break;
	}
}