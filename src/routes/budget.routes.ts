import express from 'express';
type User = {
  productName: string;
};

const route = express.Router();

route.post('/', (req, res) => {
  console.log(req.body);
  const { productName } = req.body as User;

  return res.status(200).json({ message: 'Produto do orçamento', product: productName });
});

export default route;
