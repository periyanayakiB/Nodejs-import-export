const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/add/:num1/:num2', (req, res) => {
  const { num1, num2 } = req.params;
  const result = add(num1,num2);
  res.send(`The sum of ${num1} and ${num2} : ${result}`);
});


app.get('/subtract/:num1/:num2', (req, res) => {
  const { num1, num2 } = req.params;
  const result = subtract(num1,num2);
  res.send(`The difference between ${num1} and ${num2} : ${result}`);
});

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const { add, subtract } = require('./function.js');


