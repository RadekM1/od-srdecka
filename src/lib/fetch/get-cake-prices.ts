"use server";

import { cakePricesSchema, CakePricesSchema } from "@/schema/cakePrices";

export const getCakePrices = async () => {
  try {
    const response = await fetch(
      `https://wordpress.odsrdecka.cz/wp-json/acf/v3/cenik-dorty?per_page=100`,
    );

    if (!response.ok) {
      throw new Error("chyba při fetch");
    }
    const data: CakePricesSchema = await response.json();

    const [{ acf }] = cakePricesSchema.parse(data);

    const cakePrices = [
      {
        title: "Jednopatrový dort",
        textRows: [
          `Průměr 18 (cca 10 porcí) od ${parseInt(acf.prumer18Cca10PorciOd).toLocaleString("cs-CZ")} Kč`,
          `Průměr 22 (cca 15 porcí) od ${parseInt(acf.prumer22Cca15Porci).toLocaleString("cs-CZ")} Kč`,
          `Průměr 26 (cca 20 porcí) od ${parseInt(acf.prumer26Cca20PorciOd).toLocaleString("cs-CZ")} Kč`,
          `Průměr 30 (cca 30 porcí) od ${parseInt(acf.prumer30Cca30porci).toLocaleString("cs-CZ")} Kč`,
        ],
      },
      {
        title: "Dvoupatrový dort",
        textRows: [
          `30 porcí a více od ${parseInt(acf.dvoupatrovy30Porci).toLocaleString("cs-CZ")} Kč`,
        ],
      },
      {
        title: "Třípatrový dort",
        textRows: [
          `60 porcí a více od ${parseInt(acf.tripatrovyDort).toLocaleString("cs-CZ")} Kč`,
        ],
      },
    ];

    const cakePriceNotes = [acf.firstNote, acf.secondNote];

    return { cakePrices, cakePriceNotes };
  } catch (error) {
    console.log("chyba zpracování požadavku", error);
    return { cakePrices: [], cakePriceNotes: [] };
  }
};
