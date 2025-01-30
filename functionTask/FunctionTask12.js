const prompt = require('prompt-sync')();
function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

let primeCount = 0;

for (let i = 2; i < 10000; i++) { 
  if (isPrime(i)) {
    primeCount++;
  }
};
console.log(primeCount);

