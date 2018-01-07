
/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both,
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    Smallest Common Multiple



    //gcd(a, b) = gcd(a - b, b)
    //lcm(a, b) = a × b / gcd(a, b)
*/



function smallestCommons(arr) {

  var start,end = 0;
  var newArr =[];

  //there's got to be a way to refactor this
  if(arr[i] > arr[i+1]){
    start = arr[i+1];
    end = arr[i];
  } else{
    start = arr[i];
    end = arr[i+1];
  }

  //push all values of range into array
  for(start; start <= end; start++){
    newArr.push(start);
  }


  function euclideanAlgorithm(a, b) {
      if(b === 0) {
          return a;
      }
      const remainder = a % b;
      return euclideanAlgorithm(b, remainder)
  }

  function gcdMultipleNumbers(...args) { //ES6 used here, change as appropriate
    const gcd = args.reduce((memo, next) => {
        return euclideanAlgorithm(memo, next)}
    );

    return gcd;
  }

  gcdMultipleNumbers(48,16,24,96) //8

}



function euclideanAlgorithm(a, b) {
    if(b === 0) {
        return a;
    }
    console.log("a: " + a);
    console.log("b: " + b);
    const remainder = a % b;
    console.log("remainder: " + remainder);
    return euclideanAlgorithm(b, remainder);
}

function gcdMultipleNumbers(...args) { //ES6 used here, change as appropriate
  const gcd = args.reduce((memo, next) => {
      console.log("memo: " + memo);
      console.log("next: " + next);

      return euclideanAlgorithm(memo, next)}
  );

  return gcd;
}

gcdMultipleNumbers(48,16,24,96) //8







  return arr;
}





smallestCommons([1,5]);
