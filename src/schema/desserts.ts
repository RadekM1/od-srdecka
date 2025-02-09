import { z } from "zod";

export const dessertProductSchema = z.object({
  src: z.string(),
  alt: z.string(),
  title: z.string(),
  allergens: z.string(),
  variants: z.array(z.string()).nullable(),
  price: z.number(),
});

export type DessertProductSchema = z.infer<typeof dessertProductSchema>;
