/*
*
* @设备
*
 * */
 
 let mobileSystem = ["ios","Android","Symbian","iPhone","iPad","iPod"];
 
function isMobile(){
	 for(let i=0; i<mobileSystem.length; i++){
		 if(navigator.userAgent.includes(mobileSystem[i])){
			 return true;
		 }
	 }
	 return false
}