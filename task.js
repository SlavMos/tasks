// Express server for Task #3: LCM endpoint
// Usage: node task.js
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Use the required email address
const email = "vladanik1999@gmail.com";
const endpoint = "/" + email.replace(/[^a-zA-Z0-9]/g, "_");

function isNatural(n) {
  return /^\d+$/.test(n) && Number(n) > 0;
}

function gcd(a, b) {
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

app.get(endpoint, (req, res) => {
  const { x, y } = req.query;
  if (!isNatural(x) || !isNatural(y)) {
    return res.send("NaN");
  }
  const result = lcm(Number(x), Number(y));
  res.send(result.toString());
});

app.listen(PORT, () => {
  console.log(
    `Server running at http://localhost:${PORT}${endpoint}?x={x}&y={y}`
  );
});
