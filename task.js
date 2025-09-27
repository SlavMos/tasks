const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const email = "vladanik1999@gmail.com";
const endpoint = "/" + email.replace(/[^a-zA-Z0-9]/g, "_");

function isNatural(n) {
  // Проверяем, что это число и больше нуля
  return /^\d+$/.test(n) && BigInt(n) > 0n;
}

function gcd(a, b) {
  while (b !== 0n) {
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

  const result = lcm(BigInt(x), BigInt(y));
  res.send(result.toString());
});

app.listen(PORT, () => {
  console.log(
    `Server running at http://localhost:${PORT}${endpoint}?x={x}&y={y}`
  );
});
