"use server";

import { FaqSchemas, faqSchemas } from "@/schema/faq";

export const getFaq = async () => {
  try {
    const response = await fetch(
      `https://wordpress.odsrdecka.cz/wp-json/acf/v3/faq?per_page=100`,
    );

    if (!response.ok) {
      throw new Error("chyba při fetch");
    }
    const data: FaqSchemas = await response.json();

    const parsedFaq = await faqSchemas.parse(data);

    return parsedFaq.map((faq) => ({
      question: faq.acf.dotaz,
      answer: faq.acf.odpoved,
    }));
  } catch (error) {
    console.log("chyba zpracování požadavku", error);
    return [];
  }
};
