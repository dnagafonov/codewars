var str = '4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'; 
function highAndLow(str){
 	arr1 = str.split(' ');
 	console.log(arr1);
 	arr1.sort(function compare(a, b){return b - a;}
  );
 	console.log(arr1);
 	return String(arr1[arr1.length-1] + " " + arr1[0]);
}
//console.log(highAndLow(str));


var str = "ATTGC";
function DNAStrand(str){
	var newstr = str.replace('A','T','T','A','C','G','G','C');
	return newstr;
}
//console.log(DNAStrand(str));


var chars = {'T':'A','A':'T','C':'G','G':'C'};
var s = 'TTTT';
s = s.replace(/[TACG]/g, m => chars[m]);
//console.log(s);


function digital_root(n) {
	var digits = [];
	while (n > 0) {
    digits[digits.length] = n % 10;
    n = parseInt(n/10);
}
digits.reverse();
}
//console.log(digital_root(942));

var arr = [[18, 20],
			[45, 2],
			[61, 12],
			[37, 6],
			[21, 21],
			[78, 9]]

function openOrSenior(arr) {
	var arr1 = []
  for(let i = 0, j = 0;i < arr.lenght; ++i, ++j)
  {
  	if(arr[i][0] > 55 && arr[j][1] > 7 ) {
  		arr1.push('Senior')
  	}
  	else {
  			arr1.push('Open')
  	}  
  }

}
//console.log(openOrSenior(arr));


var str = "How can mirrors be real if our eyes aren't real";
toJadenCase = function (str) {
	var arr = str.split(' ');
	var arr1 = [];
	for (var i = 0; i != arr.length ; ++i) {
		arr1[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}
	console.log(arr1.join(' '));

}
//toJadenCase(str);


function repeatStr (n, s) {
  var s1 = s;
  return s1.repeat(n);
}
//repeatStr(5,'gfg');


var input = [1,2,3,4,5,7,8,9,-10];
function countPositivesSumNegatives(input) {
	var arrRes = [];
	var count1 = 0;
	var sum = 0;

	for (var i = input.length - 1; i >= 0; i--) {
		if(input[i] > 0){
			count1++;
		}
		else{
			sum += input[i];
		}
	}
	arrRes.push(count1, sum);
    return console.log(arrRes[0], arrRes[1]);
}
//countPositivesSumNegatives(input);


var isSquare = function(n){
   return Number.isInteger(Math.sqrt(n)); // fix me
}
//isSquare(4);





