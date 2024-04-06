function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function getPrimes(arr) {
    return arr.filter(isPrime);
  }
  
  const inputArray = [11,12,13,14,15,16,17,18,19,20,21,22,23];
  console.log(getPrimes(inputArray)); // [11, 13, 17, 19, 23]