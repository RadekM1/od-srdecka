export const menuItems = [
    { label: "Úvod", link: "/", menu: null},
    { label: "O nás", link: "/o-nas", menu: null},
    { label: "Nabídka", link: "/nabidka", menu:null
      //{label:"Dorty", link: "/nabidka/dorty"},
      //{label:"Sladký bar", link: "/nabidka/sladky-bar"},
    },
    { label: "Galerie", link: "/galerie", menu: null},
    { label: "Blog", link: "/blog", menu: [
      {label:"Bez Lepku - jde to i bez lepku", link: "/blog/bez-lepku"},
      {label:"Novinky a akce", link: "/blog/novinky-a-akce"},
      {label:"Tipy a triky pro pečení", link: "/blog/tipy-a-triky"},
      {label:"Recepty", link: "/blog/recepty"}
    ]},
    { label: "Aktuality", link: "/aktuality", menu: null},
    { label: "Dotazy", link: "/dotazy", menu: [
      {label:"Otázky týkající se objednávek", link: "/dotazy/objednavky"},
      {label:"Informace o alergenech", link: "/dotazy/alergeny"},
      {label:"Platební a doručovací informace", link: "/dotazy/platba-a-doprava"},
      {label:"Zásady ochrany osobních údajů", link: "/dotazy/ochrana-osobnich-udaju"},
    ]},
    { label: "Kontakt", link: "/kontakt", menu: [
      {label:"Kontaktní formulář", link: "/kontakt/kontaktni-formular"},
      {label:"Objednávkový formulář", link: "/kontakt/objednavkovy-formular"},
      {label:"Mapa s umístěním", link: "/kontakt/mapa-s-umistenim"},
      {label:"Sociální sítě", link: "/kontakt/socialni-site"},
      ]},
  ];
