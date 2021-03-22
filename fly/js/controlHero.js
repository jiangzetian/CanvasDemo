/*
*@操作
* */

//炸弹 空格/两根手指

//键盘状态
let isLeft = false;
let isTop = false;
let isRight = false;
let isBottom = false;

//触摸状态
let tx = 0;
let ty = 0;
let heroX = 0;
let heroY = 0;
//手指移动
let move = em =>{
	em.preventDefault();
	let touch2 = em.touches[0];
	let x = touch2.clientX;
	let y = touch2.clientY;
	hero.x = heroX + x - tx;
	hero.y = heroY + y - ty;
}

if(isMobile()){
	//监听按下事件
	window.addEventListener("touchstart",e=>{
		//阻止默认事件
		e.preventDefault();
		let ts = e.touches;
		if(ts.length == 1){
			let touch = ts[0];
			tx = touch.clientX;
			ty = touch.clientY;
			heroX = hero.x;
			heroY = hero.y;
			if(tx>hero.x && tx<hero.x+hero.w && ty>hero.y && ty<hero.y+hero.h){
				window.addEventListener("touchmove",move,{ passive: false })
			}
		}else if(ts == 2){
			//炸弹
			bomb();
		}
	},{ passive: false });
	//监听手指离开
	window.addEventListener("touchend",e=>{
		//移除手指移动监听
		window.removeEventListener("touchmove",move);
	},{ passive: false })
}else{
	window.onkeydown = e=>{
		switch(e.keyCode){
			//左
			case 37:{
				isLeft = true;
				break;
			}
			//上
			case 38:{
				isTop = true;
				break;
			}
			//右
			case 39:{
				isRight = true;
				break;
			}
			//下
			case 40:{
				isBottom = true;
				break;
			}
			//空格
			case 32:{
				bomb();
				break;
			}
		}
	}
	window.onkeyup = e=>{
		switch(e.keyCode){
			//左
			case 37:{
				isLeft = false;
				break;
			}
			//上
			case 38:{
				isTop = false;
				break;
			}
			//右
			case 39:{
				isRight = false;
				break;
			}
			//下
			case 40:{
				isBottom = false;
				break;
			}
		}
	}
}

//键盘操作移动
function control(){
	if(isLeft){
		hero.x -=7;
		hero.x = hero.x < -hero.w/2 ? -hero.w/2 : hero.x;
	}
	if(isRight){
		hero.x +=7;
		hero.x = hero.x > sw-hero.w/2 ? sw-hero.w/2 : hero.x;
	}
	if(isTop){
		hero.y -=7;
		hero.y = hero.y < 0 ? 0 :hero.y;
	}
	if(isBottom){
		hero.y +=7;
		hero.y = hero.y > sh-hero.h ? sh-hero.h :hero.y;
	}
}