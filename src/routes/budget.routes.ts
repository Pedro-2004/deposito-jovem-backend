import express from 'express';
import pool from '../config/database.js';

type BudgetBody = {
  productName: string;
  clientName: string;
  productQuantity: string;
  productValue: string;
};

const route = express.Router();

route.post('/', async (req, res) => {
  console.log(req.body);
  const { productName, clientName, productQuantity, productValue } = req.body as BudgetBody;
  const quantity = Number(productQuantity);
  const value = Number(productValue);

  const totalValue = quantity * value;

  const insertProductQuery = `INSERT INTO products(
  client_name,
  product_name,
  product_quantity,
  product_value,
  total_value  
  )
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *
  `;

  const values = [clientName, productName, quantity, value, totalValue];

  const result = await pool.query(insertProductQuery, values);

  return res.status(201).json({
    message: 'Orçamento salvo com sucesso',
    product: result.rows[0],
  });
});

export default route;
