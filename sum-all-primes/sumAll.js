
/*
Sum All Primes

Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors,
one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    For Loops

    Array.prototype.push()

*/




function sumPrimes(num) {
/*
  Ref: A prime number (or a prime) is a natural number greater than 1 that
  has no positive divisors other than 1 and itself.
*/

  console.log("num: " + num);
  var arrPrimes = [];
  var result = 0;

  //error handling
  if (typeof num !== 'number' || !Number.isInteger(num)) {
    return;
  }

  //check num is not a prime
  if (num < 2) {
    return 1;
  }

  if (num === 2) {
    return 0;
  }

// For testing
if (num < 900){
  console.log("num is less than 900 it is " + num);
  for (var i = 3; i*i <= num; i += 2) {
    if (num % i !== 0) {
      arrPrimes.push(num);
      console.log("array num: " + num);
    }
  }
  //return true;  <---- You're missing something to account for 3.

  result = arrPrimes.reduce(function (a, b) {
    return a + b;
  }, 0);
}

  console.log("arrPrimes: " + arrPrimes);
  console.log("Result: " + result);

  return result;
}

console.clear();
sumPrimes(3);
