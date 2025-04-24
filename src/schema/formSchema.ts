import { z } from "zod";

export const formSchema = z.object({
  name: z.string().trim().min(2, "nedostatečný počet znaků ve jménu"),
  lastName: z.string().trim().min(2, "nedostatečný počet znaků v příjmení  "),
  email: z.string().email("nevyhovující formát pro email"),
  tel: z.string().min(9, "nedostatečný počet znaků").trim(),
  note: z.string().trim().min(2, "co pro vás můžeme udělat?"),
});

export type FormSchema = z.infer<typeof formSchema>;
