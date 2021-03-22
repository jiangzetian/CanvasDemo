/*
*
* @敌机类 
* 
* */

class Enemy extends Rect{
	constructor(x,y,w,h,hp,speed,showMax,score,img) {
	    super(x,y);
		this.w = w;
		this.h = h;
		this.hp = hp;
		this.speed = speed;
		this.showMax = showMax;
		this.showIndex = 0;
		this.score = score;
		this.img =img;
	}
	bol(){
		if(this.hp <= 0){
			this.showIndex ++;
			if(this.showIndex >= this.showMax){
				this.showIndex = this.showMax;
				this.isdel = true;
			}
		}
	}
}

let e1Img = new Image();
e1Img.src = 'img/enemy1.png';

let e2Img = new Image();
e2Img.src = 'img/enemy2.png';

let e3Img = new Image();
e3Img.src = 'img/enemy3.png';

let eNum = 400;//游戏难度
/**
 * eNum <= 10 创建敌机
 * eNum >9 大敌机
 * eNum >6 大敌机
 * 否则小敌机
 * */
let enemys = [];

function createEnemy(){
	let arr =[];
	let n = rand(0,eNum);
	let e = null;
	
	if(n<=10){
		if(n>9){
			//x,y,w,h,hp,speed,showMax,score,img
			arr = [
				rand(0,sw-165),//x
				-245,//y
				165,//w
				245,//h
				600,
				rand(3,6),
				5,
				6,
				e3Img
			]
			
		}else if(n>6){
			arr = [
				rand(0,sw-70),//x
				-90,//y
				70,//w
				90,//h
				400,//hp
				rand(3,8),//speed
				4,//showMax
				3,//score
				e2Img//img
			]
		}else{
			//x,y,w,h,hp,speed,showMax,score,img
			arr = [
				rand(0,sw-50),//x
				-39,//y
				50,//w
				39,//h
				100,//hp
				rand(3,10),//speed
				4,//showMax
				2,//score
				e1Img//img
			]
		}
		e = new Enemy(...arr)
		enemys.push(e);
	}
}