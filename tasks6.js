//task Bouncing Balls
function bouncingBall(h,  bounce,  window) {
	var res = 0;
	if(h > 0 && 0 < bounce && bounce < 1 && window < h){
		for (var i = h; i > window; i -= bounce) {
			res++;
		}
	}
    if(res > 0) 
    	console.log(res);
    else 
    	console.log(-1);
}
bouncingBall(30.0, 0.66, 1.5)