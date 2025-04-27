import { z } from "zod";

export const articlesListSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.string(),
  thumbnailSrc: z.string(),
  thumbnailAlt: z.string(),
});

export const wpImageSchema = z.object({
  ID: z.number(),
  id: z.number(),
  title: z.string(),
  filename: z.string(),
  filesize: z.number(),
  url: z.string().url(),
  link: z.string().url(),
  alt: z.string(),
  author: z.string(),
  description: z.string(),
  caption: z.string(),
  name: z.string(),
  status: z.string(),
  uploaded_to: z.number(),
  date: z.string(),
  modified: z.string(),
  menu_order: z.number(),
  mime_type: z.string(),
  type: z.string(),
  subtype: z.string(),
  icon: z.string().url(),
  width: z.number(),
  height: z.number(),
  sizes: z.object({
    thumbnail: z.string().url(),
    "thumbnail-width": z.number(),
    "thumbnail-height": z.number(),
    medium: z.string().url(),
    "medium-width": z.number(),
    "medium-height": z.number(),
    medium_large: z.string().url(),
    "medium_large-width": z.number(),
    "medium_large-height": z.number(),
    large: z.string().url(),
    "large-width": z.number(),
    "large-height": z.number(),
    "1536x1536": z.string().url(),
    "1536x1536-width": z.number(),
    "1536x1536-height": z.number(),
    "2048x2048": z.string().url(),
    "2048x2048-width": z.number(),
    "2048x2048-height": z.number(),
  }),
});

export const wpArticleSchema = z.object({
  titulek: z.string(),
  uvodni_text: z.string(),
  ingredience: z.string(),
  postup: z.string(),
  zaver: z.string(),
  uvodni_obrazek: z.union([wpImageSchema, z.literal(false)]).optional(),
  prvni_obrazek: z.union([wpImageSchema, z.literal(false)]).optional(),
  druhy_obrazek: z.union([wpImageSchema, z.literal(false)]).optional(),
  treti_obrazek: z.union([wpImageSchema, z.literal(false)]).optional(),
  seo_nazev: z.string(),
  meta_popis: z.string(),
});

export const wpAcfFetchArticleObject = z.object({
  id: z.number(),
  acf: wpArticleSchema,
});

export const wpAcfFetchOnlyArticle = z.object({
  acf: wpArticleSchema,
});

export const wpAcfArticlesFetch = z.array(wpAcfFetchArticleObject);

export type WpAcfFetchOnlyArticle = z.infer<typeof wpAcfFetchOnlyArticle>;
export type WpAcfArticlesFetch = z.infer<typeof wpAcfArticlesFetch>;
export type ArticlesListSchema = z.infer<typeof articlesListSchema>;
export type ArticleComponentData = z.infer<typeof wpArticleSchema>;
export type WpImageSchema = z.infer<typeof wpImageSchema>;
