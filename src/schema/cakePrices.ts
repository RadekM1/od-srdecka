import { z } from "zod";

export const cakePriceSchema = z.object({
  id: z.number(),
  acf: z.object({
    prumer18Cca10PorciOd: z.string(),
    prumer22Cca15Porci: z.string(),
    prumer26Cca20PorciOd: z.string(),
    prumer30Cca30porci: z.string(),
    dvoupatrovy30Porci: z.string(),
    tripatrovyDort: z.string(),
    firstNote: z.string(),
    secondNote: z.string(),
  }),
});

export const cakePricesSchema = z.array(cakePriceSchema);

export type CakePricesSchema = z.infer<typeof cakePricesSchema>;
export type CakePriceSchema = z.infer<typeof cakePriceSchema>;
