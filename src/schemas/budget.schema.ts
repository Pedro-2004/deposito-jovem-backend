import { z } from 'zod';

export const budGetSchema = z.object({
  productName: z.string(),
  clientName: z.string(),
  productQuantity: z.coerce.number(),
  productValue: z.coerce.number(),
});
