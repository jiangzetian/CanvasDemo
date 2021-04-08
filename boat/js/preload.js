/* 
 * @预加载
 *
 **/

let imgs = {
	"boatImg" : 'image/boat.png',
	"boat1Img" : 'image/boat1.png',
	"waterImg": 'image/water.png',
};
//图片加载
function loading() {
	//全部资源数量
	let AllAmount = Object.keys(imgs).length;
	//加载完毕的资源数量
	let count = 0;
	for (k in imgs) {
		//图片地址
		let src = imgs[k];
		//创建图片
		imgs[k] = new Image();
		//赋值图片地址
		imgs[k].src = src;
		imgs[k].onload = function() {
			count++;
			if (count == AllAmount) {
				start();
			}
		}
	}
}