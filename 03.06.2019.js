//task1
var cc = "4556364607935616";
function maskify(cc) {
	var arr = [];
	for (var i = cc.length - 4; i >= 0; i--) {
		arr.push("#");
	}
	arr.push(Number(cc)%10000);
	return console.log("t1",arr.join(''));
}
maskify(cc);

//task2
var s = "abcd";
function accum(s) {
	for (var i =  s.length; i != 0; i--) {
		console.log("f");
	}
}
//accum(s)

//task3
var str = "2155512";
function removeChar(str){
 return console.log("t2", str.slice(1,-1));
}
removeChar(str);

//task4
var arr = [1,4,5,-67,8,78];
function min(arr){
	return console.log("t3", Math.min.apply(null,arr));
}
min(arr);

//task5
function expandedForm(num) {
	var temp;
	var arr = [];
	for (var i = num.length; i >= 0; i--) {
		temp = num%10;
		arr.push(temp*(Math.pow(10,i)));
	}
	return console.log(arr.length);
}
expandedForm(232);




