/*
*
* @奖励 
* 
* */

// @showIndex 0炸弹 1双排 2密集

class Prop extends Rect {
	constructor(x,y,showIndex) {
		super(x,y);
	    this.w = 39;
		this.h = 68;
		this.showIndex = 0;
		this.speed = rand(3,10);
		this.img = propImg;
	}
}

let props = [];

let propImg = new Image();
propImg.src = 'img/prop.png';

function createProp(){
	let n = rand(0,100);
	let p = null;
	let arr = [rand(0,sw-39),-68];
	if(n==10){
		arr.push(0)
	}else if(n==20){
		arr.push(1)
	}else if(n==30){
		
	}
	if(arr.length>2){
		let p = new Prop(...arr);
		props.push(p);
	}
}
