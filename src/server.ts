import express from 'express';

const app = express();
const PORT = 3000;

app.get('/init', (req, res) => {
  return console.log('Hello Word');
});

app.listen(PORT, () => {
  console.log(`Server in port ${PORT}`);
});
