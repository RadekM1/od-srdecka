import { z } from "zod";

export const faqSchema = z.object({
  id: z.number(),
  acf: z.object({
    dotaz: z.string(),
    odpoved: z.string(),
  }),
});

export const faqSchemas = z.array(faqSchema);

export type FaqSchemas = z.infer<typeof faqSchemas>;
export type FaqSchema = z.infer<typeof faqSchema>;
