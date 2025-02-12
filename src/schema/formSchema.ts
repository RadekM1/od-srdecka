import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, { message: "nedostatečný počet znaků" }).trim(),
  lastName: z.string().min(2, { message: "nedostatečný počet znaků" }).trim(),
  email: z.string().email({ message: "nevyhovující formát pro email" }),
  tel: z.string().min(9, { message: "nedostatečný počet znaků" }).trim(),
  note: z.string().trim().min(2, { message: "co pro vás můžeme udělat?" }),
});

export type FormSchema = z.infer<typeof formSchema>;
