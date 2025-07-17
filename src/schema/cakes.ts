import { z } from "zod";
import { wpImageSchema } from "./article";

export const cakeProductSchema = z.object({
  src: z.string(),
  alt: z.string(),
  title: z.string(),
  allergens: z.string(),
  variants: z.array(z.string()).nullable(),
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

export const blogSectionSchema = z.object({
  url: z.string(),
  label: z.string(),
  position: z.string(),
});

export const fetchedCake = z.object({
  id: z.number(),
  acf: z.object({
    nazev_dortu: z.string(),
    obrazek_dortu: wpImageSchema,
    varianta: z.string(),
    dalsi_varianta: z.string().optional(),
    dalsi_varianta_2: z.string().optional(),
    dalsi_varianta_3: z.string().optional(),
    dalsi_varianta_4: z.string().optional(),
    dalsi_varianta_5: z.string().optional(),
    dalsi_varianta_6: z.string().optional(),
    dalsi_varianta_7: z.string().optional(),
    dalsi_varianta_8: z.string().optional(),
    dalsi_varianta_9: z.string().optional(),
    dalsi_varianta_10: z.string().optional(),
    alergeny: z.string(),
  }),
});

export const fetchedCakes = z.array(fetchedCake);

export type GalleryCakeSectionsSchema = z.infer<
  typeof cakeGallerySectionSchema
>;
export type BlogSectionsSchema = z.infer<typeof blogSectionSchema>;
export type CakePriceList = z.infer<typeof cakePriceList>;
export type CakeProductSchema = z.infer<typeof cakeProductSchema>;
export type Fetchedcake = z.infer<typeof fetchedCake>;
export type Fetchedcakes = z.infer<typeof fetchedCakes>;
