
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







  function euclideanAlgorithm(a, b) {
      console.log("a: " + a);
      console.log("b: " + b);
      if(b === 0) {
          return a;
      }

      const remainder = a % b;
      return euclideanAlgorithm(b, remainder);
  }

  function gcdMultipleNumbers(...args) {
    console.log("args: " + args);
    const gcd = args.reduce((memo, next) => {
        return euclideanAlgorithm(memo, next);}
    );
    return gcd;
  }

function smallestCommons(arr) {

    var start,end,i = 0;
    var p = 1;
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
  for(var j = start; j <= end; j++){
    newArr.push(j);
    p *= j;

  }

  console.log("start: " + start);
  console.log("end: " + end);
  console.log("newArr: " + newArr);
  console.log("p: " + p);


}

console.clear();
gcdMultipleNumbers(smallestCommons([1,5]));
