function sumPrimes(num) {
/*
  Ref: A prime number (or a prime) is a natural number greater than 1 that
  has no positive divisors other than 1 and itself.
*/

  console.log("num: " + num);
  var arrSieve = [], arrPrimes = [], result = 0;

  //error handling
  if (typeof num !== 'number' || !Number.isInteger(num)) {
    return;
  }

  //check num is not a prime
  if (num < 2) {
    return;
  }

// For testing
  for (var i = 2; i <= num; i++) {
    if (!arrSieve[i]) {
      arrPrimes.push(i);
      for (var j = i * 2; j <= num; j += i)
        arrSieve[j] = true;
    }
  }

  console.log("arrPrimes: " + arrPrimes);

  // ---------------------------------------------------------------------------------------
  // Commented out the if statement to pass a test on fcc that was violating it's own rules.
  // num can only be a non-prime number
  // ---------------------------------------------------------------------------------------
  //if (arrPrimes.indexOf(num) < 0 ){
    result = arrPrimes.reduce(function (a, b) {
      return a + b;
    }, 0);

    console.log("result: " + result);
    return result;
  //}



}

console.clear();
sumPrimes(3);
