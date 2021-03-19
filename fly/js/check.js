/*
* @1碰撞检查
* @2敌机 子弹 奖励 运动
* */
function allMove(){
	for(let i=0;i<bullets.length;i++){
		bullets[i].draw();
		if(bullets[i].isDel){
			bullets.splice(i,1);
			i--;
			continue;
		}
	}
	
	for(let i=0;i<enemys.length;i++){
		enemys[i].draw();
		if(enemys[i].isDel){
			enemys.splice(i,1);
			i--;
			continue;
		}
	}
	
	for(let i=0;i<props.length;i++){
		props[i].draw();
		if(props[i].isDel){
			props.splice(i,1);
			i--;
			continue;
		}
	}

}