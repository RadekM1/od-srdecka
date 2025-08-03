"use server";

import { fetchedIndexImages, FetchedIndexImages } from "@/schema/index-images";

export const getIndexImages = async () => {
  try {
    const response = await fetch(
      `https://wordpress.odsrdecka.cz/wp-json/acf/v3/fotky-nabidek`,
    );

    if (!response.ok) {
      throw new Error("chyba při fetch");
    }
    const data: FetchedIndexImages = await response.json();


    const parsedImages = await fetchedIndexImages.parse(data);

    const preparedImages = Object.entries(parsedImages[0].acf).map((image) => ({
        imgType: image[0],
        img: image[1]    
    }))

    return preparedImages;
   
  } catch (error) {
    console.log("chyba zpracování požadavku", error);
    return [];
  }
};
