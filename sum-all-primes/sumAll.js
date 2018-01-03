
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
  var boolPrime = false

  //error handling
  if (typeof num !== 'number' || !Number.isInteger(num)) {
    return 0;
  }

  //Check the provided number is not a prime.
  if (number === 2) {
    return 0;
  }

  //Find all the prime Numbers add to an array
  if (number % 2 === 0) ||



  //total all the prime numers in array


  return num;
}



sumPrimes(1);


/*
function isPrime(number) {
  if (typeof number !== 'number' || !Number.isInteger(number)) {
    return false;
  }

  if (number < 2) {
    return false;
  }

  if (number === 2) {
    return true;
  } else if (number % 2 === 0) {
    return false;
  }

  for (var i = 3; i*i <= number; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;

}

console.log(isPrime(1));
console.log(isPrime(15485863));
/*
