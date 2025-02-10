import { z } from "zod";

export const cakeProductSchema = z.object({
  src: z.string(),
  alt: z.string(),
  title: z.string(),
  allergens: z.string(),
  variants: z.array(z.string()).nullable(),
  price: z.number().optional(),
});

export const cakePriceList = z.object({
  title: z.string(),
  textRows: z.array(z.string()),
});

export const cakeGallerySectionSchema = z.object({
  url: z.string(),
  label: z.string(),
  position: z.string(),
});

export type GalleryCakeSectionsSchema = z.infer<
  typeof cakeGallerySectionSchema
>;
export type CakePriceList = z.infer<typeof cakePriceList>;
export type CakeProductSchema = z.infer<typeof cakeProductSchema>;
