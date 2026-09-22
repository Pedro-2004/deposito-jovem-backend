import express from 'express';
import budgetroutes from './routes/budget.routes.js';
import cors from 'cors';
import pool from './config/database.js';

const app = express();
const PORT = 3000;

const testDatabase = async () => {
  const result = await pool.query('SELECT NOW()');
  console.log(result.rows);
};

testDatabase();
app.use(cors({ origin: 'http://localhost:5173' }));

app.use(express.json());

app.use('/budget', budgetroutes);

app.listen(PORT, () => {
  console.log(`Server in run port: ${PORT}`);
});
