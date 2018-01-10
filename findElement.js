function findElement(arr, func) {
  var num = 0;
  for (var i = 0; i < arr.length; i++){
    console.log("func(arr): " + func(arr[i]) );
    if (func(arr[i]) == true){
      num = arr[i];
      break;
    } else{
      num = undefined;
    }
  }
  return num;
}

console.clear();
findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
