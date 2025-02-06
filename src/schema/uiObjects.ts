import { TypeOf, z } from "zod";

export const refGallerySchema = z.object({
    src: z.string(),
    alt: z.string()
})

export const imgGallerySchema = z.object({
    src: z.string(),
    alt: z.string(),
    media_type: z.string(),
    thumbnail: z.string().optional()
})


export type RefGallery = z.infer<typeof refGallerySchema>
export type ImgGallery = z.infer<typeof imgGallerySchema>