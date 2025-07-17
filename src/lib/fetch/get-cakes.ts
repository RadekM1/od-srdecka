"use server";

import { Fetchedcakes, fetchedCakes, CakeProductSchema } from "@/schema/cakes";

export const getCakes = async () => {
  try {
    const response = await fetch(
      `https://wordpress.odsrdecka.cz/wp-json/acf/v3/katalog-dorty?per_page=100`,
    );

    if (!response.ok) {
      throw new Error("chyba při fetch");
    }
    const data: Fetchedcakes = await response.json();

    const parsedCakes = await fetchedCakes.parse(data);

    const preparedCakes: CakeProductSchema[] = parsedCakes.map((cake) => {
      const variants: string[] = [
        cake.acf.varianta,
        cake.acf.dalsi_varianta ?? "",
        cake.acf.dalsi_varianta_2 ?? "",
        cake.acf.dalsi_varianta_3 ?? "",
        cake.acf.dalsi_varianta_4 ?? "",
        cake.acf.dalsi_varianta_5 ?? "",
        cake.acf.dalsi_varianta_6 ?? "",
        cake.acf.dalsi_varianta_7 ?? "",
        cake.acf.dalsi_varianta_8 ?? "",
        cake.acf.dalsi_varianta_9 ?? "",
        cake.acf.dalsi_varianta_10 ?? "",
      ];

      const filteredVariants = variants.filter((variant) => variant);

      return {
        title: cake.acf.nazev_dortu,
        alt: cake.acf.obrazek_dortu.alt,
        src: cake.acf.obrazek_dortu.sizes.medium_large,
        allergens: cake.acf.alergeny,
        variants: filteredVariants,
      };
    });

    return preparedCakes;
  } catch (error) {
    console.log("chyba zpracování požadavku", error);
    return [];
  }
};
