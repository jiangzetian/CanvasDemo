/*
*
* @子弹 
* 
* */

class Bullet extends Rect {
	constructor(x,y) {
		super(x,y);
	    this.w = 6;
		this.h = 14;
		this.hurt = 100;//伤害值
		this.speed = -5;
		this.img = bulletImg;
	}
}

let gap = 15;//子弹间隔
let gapNum = 0;//计量子弹间隔参数
let bullets = [];//存放子弹
let isDouble = false;//双排子弹
let isCrowed = false;//密集子弹

let bulletImg = new Image();
bulletImg.src = 'img/bullet1.png';

function createBullet(){
	gap = isCrowed ? 7 : 12;
	gapNum++;
	if(gapNum % gap === 0){
		gapNum = 0;
		if(isDouble){
			//双排子弹
			let b1 = new Bullet(hero.x+hero.w/2-25,hero.y+22);
			bullets.push(b1);
			
			let b2 = new Bullet(hero.x+hero.w/2+19,hero.y+22);
			bullets.push(b2);
		}else{
			//单排子弹
			let b = new Bullet(hero.x+hero.w/2-2,hero.y);
			bullets.push(b)
		}
	}
}

