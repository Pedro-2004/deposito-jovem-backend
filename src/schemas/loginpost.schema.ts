import { z } from 'zod';

export const loginSchema = z.object({
  password: z.coerce.number(),
  email: z.coerce.number(),
});
