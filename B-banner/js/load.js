/* 
 * @预加载
 *
 **/

let imgs = {
			"bg1":'image/bg1.png',
			"bg2":'image/bg2.png',
			"bg3":'image/bg3.png',
			"bg4":'image/bg4.png',
			"bg5":'image/bg5.png',
			"bg6":'image/bg6.png',
			"bg7":'image/bg7.png',
			"bg8":'image/bg8.png',
			
			"f1":'image/f1.png',
			"f2":'image/f2.png',
			
			"p1":'image/p1.png',
			"p2":'image/p2.png',
			"p3":'image/p3.png',
			"p4":'image/p4.png',
			
			"t1":'image/t1.png',
			"t2":'image/t2.png',
			"t3":'image/t3.png',
		}

let loadingDom = document.querySelector('.loading')
//全部资源数量
let AllAmount =  Object.keys(imgs).length;
//加载完毕的资源数量
let count = 0;

function LoadStart(callback){
	//遍历加载
	for(let k in imgs){
		//图片地址
		let src = imgs[k]
		//创建图片
		imgs[k] = new Image()
		//赋值图片地址
		imgs[k].src = src;
		//遍历加载
		imgs[k].onload = ()=>{
			count++;
			if(count == AllAmount){
				console.log('图片加载完毕');
				loadingDom.style.display = 'none';
				callback();
			}
		}
	}
}