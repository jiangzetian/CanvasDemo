/*
* @1碰撞检查
* @2敌机 子弹 奖励 运动
* */

//碰撞检测
function isCrash(a,b){
	//a物体左右上下
	let al = a.x;
	let ar = al+a.w;
	let at = a.y;
	let ab = at+a.h;
	
	let bl = b.x;
	let br = bl+b.w;
	let bt = b.y;
	let bb = bt+b.h;
	
	if(al>br || bl>ar || at>bb || bt>ab){
		//不碰撞
		return false;
	}
	return true;
}

//验证游戏是否结束
function gameOver(){
	if(hero.isOver){
		//游戏结束
		clearInterval(timer);
		alert("游戏结束")
	}
}

//绘制子弹
function drawBullets(){
	for(let i=0;i<bullets.length;i++){
		if(bullets[i].isDel){
			bullets.splice(i,1);
			i--;
			continue;
		}
		bullets[i].draw();
	}
}

//绘制敌机
function drawEnemys(){
	for(let i=0;i<enemys.length;i++){
		let e = enemys[i];
		//检测与英雄的碰转
		if(!hero.isBol && e.hp>0 && isCrash(e,hero)){
			hero.isBol = true;
		}
		//检测与子弹碰撞
		for(let j=0; j<bullets.length;j++){
			let b = bullets[j];
			if(e.hp>0 && isCrash(e,b)){
				e.hp -= b.hurt;
				b.isDel = true;
				break;
			}
		}
		if(e.isDel){
			enemys.splice(i,1);
			i--;
			continue;
		}
		e.draw();
	}
}

// 炸弹数量
let bombNum = 0;
let bombMax = 3;
//炸弹
function getBomb(){
	bombNum ++;
	bombNum = bombNum>3 ? 3 : bombNum;
}

// 双排子弹
let doubleTimer = null;
let dt = 0;//双排时间 最多8秒
function getDoubleBullet(){
	isDouble = true;
	dt = 8;
	if(!doubleTimer){
		doubleTimer = setInterval(()=>{
			dt--;
			if(dt === 0){
				clearInterval(doubleTimer);
				doubleTimer = null;
				isDouble = false;
			}
		},1000)
	}
}

// 密集子弹
let crowedTimer = null;
let ct = 0;//双排时间 最多8秒
function getCrowdBullet(){
	isCrowed = true;
	ct = 8;
	if(!crowedTimer){
		crowedTimer = setInterval(()=>{
			ct--;
			if(ct === 0){
				clearInterval(crowedTimer);
				crowedTimer = null;
				isCrowed = false;
			}
		},1000)
	}
}

//绘制奖励
function drawProps(){
	for(let i=0;i<props.length;i++){
		let p = props[i];
		if(!hero.isBol && isCrash(hero,p)){
			p.isDel = true;
			if(p.showIndex==0){
				//炸弹
				getBomb();
			}else if(p.showIndex==1){
				//双排
				getDoubleBullet();
			}else if(p.showIndex==2){
				//密集
				getCrowdBullet();
			}
		}
		if(p.isDel){
			props.splice(i,1);
			i--;
			continue;
		}
		p.draw();
	}
}

//绘制左下角炸弹
let bombImg = new Image();
bombImg.src = 'img/bomb.png'
function drawBomb(){
	for(let i=0;i<bombNum;i++){
		ctx.beginPath();
		ctx.drawImage(bombImg,i*31,sh-26,31,26);
	}
}

//炸弹触发
function bomb(){
	if(bombNum != 0){
		bombNum --;
		for(let i=0;i<enemys.length;i++){
			enemys[i].hp = 0;
		}
	}
}

function allMove(){
	//验证游戏是否结束
	gameOver();
	//绘制子弹
	drawBullets();
	//绘制敌机
	drawEnemys();
	//绘制奖励
	drawProps();
	//绘制炸弹
	drawBomb();
}
