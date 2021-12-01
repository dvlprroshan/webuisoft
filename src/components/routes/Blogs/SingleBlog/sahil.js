// find larger number of two numbers
function findLarger(a, b) {
  return a > b ? a : b;
}

// find 10 primes numbers
function findPrimes(n) {
  var primes = [];
  for (var i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

// check if number is prime
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
