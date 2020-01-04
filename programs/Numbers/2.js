

let arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];

let result = [];

for (let i=0; i<arr.length; i++) {
  result[i] = getMaxOfArray(arr[i]);
}

document.getElementById('out').innerHTML = result;

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}







