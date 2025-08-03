import { z } from "zod";

export const fetchedNotificationsSchema = z.array(
  z.object({
    id: z.number(),
    acf: z.object({
      titulek: z.string(),
      obsah: z.string(),
    }),
  }),
);

export type FetchedNotification = z.infer<typeof fetchedNotificationsSchema>;
