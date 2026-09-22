import express from 'express';
type BudgetBody = {
  productName: string;
  clientName: string;
  productQuantity: string;
};

const route = express.Router();

route.post('/', (req, res) => {
  console.log(req.body);
  const { productName, clientName, productQuantity } = req.body as BudgetBody;
  const quantity = Number(productQuantity);

  return res
    .status(200)
    .json({
      message: 'Orçamento',
      Produto: productName,
      'Nome cliente': clientName,
      'Quantidade do produto': quantity,
    });
});

export default route;
