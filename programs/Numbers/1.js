

function occurencesCount(arr, a) {

var sum = 0;

var arr = [0, 2, 3, 3, 3, 4, 5, 6, 6];

 for (var i = 0; i < arr.length; i++) {
	if (arr[i] == a) {
		sum++;
  }  	
}
 	return sum; 
}

console.log(occurencesCount(0, 0)); // 1
console.log(occurencesCount(2, 2)); // 1
console.log(occurencesCount(3, 3)); // 3
console.log(occurencesCount(4, 4)); // 1
console.log(occurencesCount(5, 5)); // 1
console.log(occurencesCount(6, 6)); // 2









