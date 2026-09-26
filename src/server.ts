import express from 'express';
import budgetroutes from './routes/budget.routes.js';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors({ origin: 'http://localhost:5173' }));

app.use(express.json());

app.use('/budget', budgetroutes);

app.listen(PORT, () => {
  console.log(`Server in run port: ${PORT}`);
});
