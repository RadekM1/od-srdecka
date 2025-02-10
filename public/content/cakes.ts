import { CakeProductSchema } from "@/schema/cakes";
import { CakePriceList } from "@/schema/cakes";

export const cakes: CakeProductSchema[] = [
  {
    src: "/nabidka/dorty/vanilkovy-korpus.png",
    alt: "obrázek dortu - vanilkový korpus",
    title: "Vanilkový korpus",
    allergens: "1,3,5,6,7,8",
    variants: [
      "vanilkový krém s ovocem (ovocné coulis nebo slaný karamel)",
      "čoko krém s ovocem (ovocné a nebo slaný karamel)",
      "pistáciový krém s malinami",
      "kokosový krém s mangem a maracujou",
      "krém bílá čokoláda s malinami",
    ],
  },
  {
    src: "/nabidka/dorty/cokoladovy-korpus.png",
    alt: "nevyplněno",
    title: "Čokoládový korpus",
    allergens: "nevyplněno",
    variants: [
      "vanilkový krém s ovocem",
      "čoko krém s ovocem",
      "čoko krém s malinami",
      "čoko krém s oříšky a slaným karamelem",
      'krém s kousky čokolády a banánem na způsob "krtka" a sl. karamelem nebo čoko ganáží',
      "krém bílá čokoláda s malinami",
      "pistáciový krém",
    ],
  },
  {
    src: "/nabidka/dorty/mrkvovy-dort.png",
    alt: "nevyplněno",
    title: "Mrkvový dort",
    allergens: "nevyplněno",
    variants: ["s tvarohovým krémem, oříšky a slaným karamelem"],
  },
  {
    src: "/nabidka/dorty/hruskovy-dort.png",
    alt: "nevyplněno",
    title: "Hruškový dort",
    allergens: "nevyplněno",
    variants: ["čokoládový korpus, karamelový krém, hruškový rozvar"],
  },
  {
    src: "/nabidka/dorty/pistaciovy-dort.png",
    alt: "nevyplněno",
    title: "Pistáciový dort",
    allergens: "nevyplněno",
    variants: ["pistáciový korpus, pistáciový krém s malinami"],
  },
];

export const cakesPriceList: CakePriceList[] = [
  {
    title: "Jednopatrový dort",
    textRows: [
      "Průměr 18 (cca 10 porcí) od 1 300 Kč",
      "Průměr 22 (cca 15 porcí) od 1 500 Kč",
      "Průměr 26 (cca 20 porcí) od 1 700 Kč",
      "Průměr 30 (cca 30 porcí) od 2 000 Kč",
    ],
  },
  {
    title: "Dvoupatrový dort",
    textRows: ["30 porcí a více od 2800 Kč"],
  },
  {
    title: "Dvoupatrový dort",
    textRows: ["60 porcí a více od 4800 Kč"],
  },
];
