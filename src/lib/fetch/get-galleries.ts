"use server";

import { WPFetchedGallery, WpImageSchema } from "@/schema/article";

export const getGalleries = async (galleryName: string) => {
  try {
    const response = await fetch(
      `https://wordpress.odsrdecka.cz/wp-json/acf/v3/${galleryName}?per_page=100`,
      { next: { revalidate: 60 } },
    );

    if (!response.ok) {
      throw new Error("chyba při fetch");
    }
    const data: WPFetchedGallery = await response.json();

    const preparedGallery: WpImageSchema[] = Object.values(data[0].acf).filter(
      (object): object is WpImageSchema =>
        typeof object === "object" && !!object,
    );

    return preparedGallery.map((object, i) => ({
      src: object.sizes.large,
      alt: `obrázek č.${i}`,
      media_type: object.type,
      type: object.type,
      thumbnail: object.sizes.medium,
    }));
  } catch (error) {
    console.log("chyba zpracování požadavku", error);
    return [];
  }
};
