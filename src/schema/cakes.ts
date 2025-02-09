import { z } from "zod";

export const cakeProductSchema = z.object({
  src: z.string(),
  alt: z.string(),
  title: z.string(),
  allergens: z.string(),
  ingredients: z.array(z.string()),
});

export const cakePriceList = z.object({
  title: z.string(),
  textRows: z.array(z.string()),
});

export type CakePriceList = z.infer<typeof cakePriceList>;
export type CakeProductSchema = z.infer<typeof cakeProductSchema>;
