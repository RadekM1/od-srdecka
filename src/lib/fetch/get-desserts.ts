"use server";

import {
  FetchedDesserts,
  fetchedDesserts,
  DessertProductSchema,
} from "@/schema/desserts";

export const getDesserts = async () => {
  try {
    const response = await fetch(
      `https://wordpress.odsrdecka.cz/wp-json/acf/v3/katalog-dezerty?per_page=100`,
    );

    if (!response.ok) {
      throw new Error("chyba při fetch");
    }
    const data: FetchedDesserts = await response.json();

    const parsedDesserts = fetchedDesserts.parse(data);

    const preparedDesserts: DessertProductSchema[] = parsedDesserts.map(
      (dessert) => {
        const variants: string[] = [
          dessert.acf.varianta ?? "",
          dessert.acf.dalsi_varianta ?? "",
          dessert.acf.dalsi_varianta_2 ?? "",
          dessert.acf.dalsi_varianta_3 ?? "",
          dessert.acf.dalsi_varianta_4 ?? "",
          dessert.acf.dalsi_varianta_5 ?? "",
          dessert.acf.dalsi_varianta_6 ?? "",
          dessert.acf.dalsi_varianta_7 ?? "",
          dessert.acf.dalsi_varianta_8 ?? "",
          dessert.acf.dalsi_varianta_9 ?? "",
          dessert.acf.dalsi_varianta_10 ?? "",
          dessert.acf.dalsi_varianta_11 ?? "",
          dessert.acf.dalsi_varianta_12 ?? "",
          dessert.acf.dalsi_varianta_13 ?? "",
          dessert.acf.dalsi_varianta_14 ?? "",
          dessert.acf.dalsi_varianta_15 ?? "",
          dessert.acf.dalsi_varianta_16 ?? "",
          dessert.acf.dalsi_varianta_17 ?? "",
          dessert.acf.dalsi_varianta_18 ?? "",
          dessert.acf.dalsi_varianta_19 ?? "",
          dessert.acf.dalsi_varianta_20 ?? "",
          dessert.acf.dalsi_varianta_21 ?? "",
          dessert.acf.dalsi_varianta_22 ?? "",
          dessert.acf.dalsi_varianta_23 ?? "",
          dessert.acf.dalsi_varianta_24 ?? "",
          dessert.acf.dalsi_varianta_25 ?? "",
          dessert.acf.dalsi_varianta_26 ?? "",
          dessert.acf.dalsi_varianta_27 ?? "",
          dessert.acf.dalsi_varianta_28 ?? "",
          dessert.acf.dalsi_varianta_29 ?? "",
          dessert.acf.dalsi_varianta_30 ?? "",
          dessert.acf.dalsi_varianta_31 ?? "",
          dessert.acf.dalsi_varianta_32 ?? "",
        ];

        const filteredVariants = variants.filter((variant) => variant.trim());

        return {
          title: dessert.acf.nazev_dezertu,
          price: Number(dessert.acf.cena),
          alt: dessert.acf.obrazek_dortu.alt,
          src: dessert.acf.obrazek_dortu.sizes.medium_large,
          allergens: dessert.acf.alergeny ?? "",
          variants: filteredVariants ?? "",
          notes: dessert.acf.poznamky ?? "",
          order: parseInt(dessert.acf.poradi)
        };
      },
    ).sort((a,b)=> a.order - b.order);

    return preparedDesserts;
  } catch (error) {
    console.log("chyba zpracování požadavku", error);
    return [];
  }
};
