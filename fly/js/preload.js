/* 
 * @预加载
 *
 **/

let srcs = [
	"background.png",
	"bomb.png",
	"bullet1.png",
	"enemy1.png",
	"enemy2.png",
	"enemy3.png",
	"herofly.png",
	"prop.png",
];

let lodaedNum = 0;

//加载器
function loading(callback){
	for(let i=0;i<srcs.length;i++){
		let img = new Image;
		img.src = "img/"+srcs[i]
		img.onload = ()=>{
			lodaedNum++;
			if(lodaedNum == srcs.length){
				callback();
			}
		}
	}
}