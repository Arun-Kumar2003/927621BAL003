const express = require('express');
const app = express();
const PORT = 3000;

const generateprime = (n) => {
  const primes = [];
  let n = 2;
  while (primes.length < n) {
    if (primes.every((p) => n % p !== 0)) {
      primes.push(n);
    }
    n++;
  }
  return primes;
};

const generatefibonacci = (n) => {
  const fib = [0, 1];
  while (fib.length < n) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  return fib.slice(0, n);
};

const generateeven = (n) => {
  const even = [];
  for (let i = 0; even.length < n; i++) {
    if (i % 2 === 0) {
      even.push(i);
    }
  }
  return even;
};

const generaterandom = (n) => {
  const random = [];
  for (let i = 0; i < n; i++) {
    random.push(Math.floor(Math.random() * 100));
  }
  return random;
};

app.get('/number/:type', (req, res) => {
  const { type } = req.params;
  const windowsize = 10;
  let number = [];

  switch (type) {
    case 'p':
      number = generateprime(windowsize);
      break;
    case 'f':
      number = generatefibonacci(windowsize);
      break;
    case 'e':
      number = generateeven(windowsize);
      break;
    case 'r':
      number = generaterandom(windowsize);
      break;
    default:
      return res.status(400).json({ error: 'Invalid type' });
  }

  res.json({ number: number });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
