import { z } from "zod";
import { wpImageSchema } from "./article";

export const fetchedIndexImages = z.array(
  z.object({
    id: z.number(),
    acf: z.record(z.string(), wpImageSchema),
  }),
);

export type FetchedIndexImages = z.infer<typeof fetchedIndexImages>;
