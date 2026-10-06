import express from 'express';
import { loginSchema } from '../schemas/loginpost.schema.js';

const route = express.Router();

route.post('/', (req, res) => {
  const resultSchema = loginSchema.safeParse(req.body);

  if (!resultSchema.success) {
    return res.status(400).json({ message: 'Dados invalidos', errors: resultSchema.error });
  } else {
    return res.status(200).json({
      message: 'Dados certos',
    });
  }
});

export default route;
