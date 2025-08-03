import { z } from "zod";
import { wpImageSchema } from "./article";

export const dessertProductSchema = z.object({
  src: z.string(),
  alt: z.string(),
  title: z.string(),
  allergens: z.string(),
  variants: z.array(z.string()).nullable(),
  price: z.number(),
  notes: z.string().optional(),
});

export const fetchedDessert = z.object({
  id: z.number(),
  acf: z.object({
    poradi: z.string(),
    nazev_dezertu: z.string(),
    cena: z.string(),
    obrazek_dortu: wpImageSchema,
    varianta: z.string().optional(),
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
    dalsi_varianta_11: z.string().optional(),
    dalsi_varianta_12: z.string().optional(),
    dalsi_varianta_13: z.string().optional(),
    dalsi_varianta_14: z.string().optional(),
    dalsi_varianta_15: z.string().optional(),
    dalsi_varianta_16: z.string().optional(),
    dalsi_varianta_17: z.string().optional(),
    dalsi_varianta_18: z.string().optional(),
    dalsi_varianta_19: z.string().optional(),
    dalsi_varianta_20: z.string().optional(),
    dalsi_varianta_21: z.string().optional(),
    dalsi_varianta_22: z.string().optional(),
    dalsi_varianta_23: z.string().optional(),
    dalsi_varianta_24: z.string().optional(),
    dalsi_varianta_25: z.string().optional(),
    dalsi_varianta_26: z.string().optional(),
    dalsi_varianta_27: z.string().optional(),
    dalsi_varianta_28: z.string().optional(),
    dalsi_varianta_29: z.string().optional(),
    dalsi_varianta_30: z.string().optional(),
    dalsi_varianta_31: z.string().optional(),
    dalsi_varianta_32: z.string().optional(),
    alergeny: z.string().optional(),
    poznamky: z.string().optional(),
  }),
});

export const fetchedDesserts = z.array(fetchedDessert);

export type DessertProductSchema = z.infer<typeof dessertProductSchema>;
export type FetchedDesserts = z.infer<typeof fetchedDesserts>;
