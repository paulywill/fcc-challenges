/*

dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].

*/


function dropElements(arr, func) {
  console.log("arr: " + arr);

  // Drop them elements.
  for (var i = 0; i < arr.length; i++){
    console.log("func(arr[i]): " + "arr[i] "+ arr[i] + " func: " + func + ": " + func(arr[i]));
    if (func(arr[i]) != true ){
      arr.shift();
      i--;
    } else {
      break;
    }
  }

  console.log("returned arr: " + arr);

  return arr;
}

console.clear();
dropElements([1, 2, 3], function(n) {return n < 3; });
