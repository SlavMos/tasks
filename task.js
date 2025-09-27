// Express server for Task #3: LCM endpoint
// Usage: node task3.js
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Replace with your email address below
const EMAIL = "vladanik1999@gmail.com";
const EMAIL_PATH = EMAIL.replace(/[^a-zA-Z0-9]/g, "_");

function isNaturalNumber(n) {
  return /^\d+$/.test(n) && Number(n) > 0;
}

function gcd(a, b) {
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}

function lcm(x, y) {
  return (x * y) / gcd(x, y);
}

app.get(`/${EMAIL_PATH}`, (req, res) => {
  const { x, y } = req.query;
  if (!isNaturalNumber(x) || !isNaturalNumber(y)) {
    return res.send("NaN");
  }
  const result = lcm(Number(x), Number(y));
  res.send(result.toString());
});

app.listen(PORT, () => {
  console.log(
    `Server running at http://localhost:${PORT}/${EMAIL_PATH}?x={x}&y={y}`
  );
});
