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
var arr = [1,4,5,2];
function min(arr){
	return console.log("t3", Math.min.apply(null,arr));
}
min(arr);

//task5
function expandedForm(num) {				//error
	var temp = 0;
	var arr = [];
	for (var i = 0; i != num.toString().length; i++) {
		temp = Number(num)%10;
		arr.push(temp*(Math.pow(10,i-1)));
		temp = 0;
	}
	return console.log("t5",arr[0]);
}
expandedForm(335);

//task6
function opposite(number) {
  return number *= -1;
opposite(-23);
}

//task7
var arr1 = [1,4,5,2];
function squareSum(arr1){
	for (var i = 0; i != arr1.length - 1; i--) {
		var temp = 0;
		temp += Math.pow.(arr1[i],2);
	}
	return console.log(temp);
}
