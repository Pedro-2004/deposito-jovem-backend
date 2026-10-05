import express from 'express';
import pool from '../config/database.js';
import { budGetSchema } from '../schemas/budget.schema.js';

const route = express.Router();

route.post('/', async (req, res) => {
  const resultSchemas = budGetSchema.safeParse(req.body);

  if (!resultSchemas.success) {
    return res.status(400).json({
      message: 'Dados inválidos',
      errors: resultSchemas.error,
    });
  }
  const { productName, clientName, productQuantity, productValue } = resultSchemas.data;
  const totalValue = productQuantity * productValue;

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

  const values = [clientName, productName, productQuantity, productValue, totalValue];

  const result = await pool.query(insertProductQuery, values);
  return res.status(201).json({
    message: 'Orçamento salvo com sucesso',
    product: result.rows[0],
  });
});

export default route;
