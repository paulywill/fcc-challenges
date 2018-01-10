function smallestCommons(arr) {
  //there's got to be a way to refactor this => YES, using min/max
  /*
  if(arr[i] > arr[i+1]){
    start = arr[i+1];
    end = arr[i];
  } else{
    start = arr[i];
    end = arr[i+1];
  }
  */
  var start = Math.min.apply(null, arr);
  var end = Math.max.apply(null, arr);
  console.log("start: " + start);
  console.log("end: " + end);


  for (var i=start; i<end; i++) {
    if(i===start){
      grandLCM = (i * (i+1))/gcd(i, i+1);
    }else{
      grandLCM = (grandLCM * (i+1))/gcd(grandLCM, i+1);
    }
  }
  // return Math.abs(p / gcdMultipleNumbers(newArr) );
  return grandLCM;


  //Not required - push all values of range into array
  /* for(var j = start; j < end; j++){
    newArr.push(j);
    p *= j;

  }
  console.log("p: " + p);

  */
}

  //Tighter formula in spoiler
  /*
  function euclideanAlgorithm(a, b) {
    console.log("a: " + a);
    console.log("b: " + b);
    if(b === 0) {
      return a;
    }else
      return gcd(y, x%y);
  }
  */

  function gcd(x, y) {    // Implements The Euclidean Algorithm
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
   }

// Too much, spoiler had simple solution holding current lcm and calling gdc function

/*
function gcdMultipleNumbers(arr) {
  console.log("arr: " + arr);
  var gcd = arr.reduce((memo, next) => {
    return euclideanAlgorithm(memo, next);}
  );
  console.log("gcd: " + gcd);
  return gcd;
}
*/

console.clear();
console.log(smallestCommons([1, 5]));
