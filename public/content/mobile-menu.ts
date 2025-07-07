export const mobileMenuItems : {
  label: string, 
  link: string,
  menu: 
    {
      label: string, 
      link: string 
    }[] | null
  
}[] = [
  { label: "Úvod", 
    link: "/" ,
    menu: null
  },
  { label: "O nás", 
    link: "/o-nas",
    menu: null
  },
  {
    label: "Nabídka",
    link: '/nabidka',
    menu: [
      {
        label: 'Dorty',
        link: '/nabidka/dorty'
      },
      {
        label: 'Dezerty',
        link: '/nabidka/dezerty'
      },
    ]
  },
  { 
    label: "Galerie", 
    link: '/galerie',
    menu: [
      {
        label: 'Dorty',
        link: '/galerie/dorty-svatebni'
      },
      {
        label: 'Sladký bar',
        link: '/galerie/sladky-bar'
      }
    ]
  },
  {
    label: "Blog",
    link: "/blog/bezlepkove-recepty-sladke",
    menu: null,
  },
  { label: "Dotazy", 
    link: "/dotazy",
    menu: null
  },
  {
    label: "Kontakt",
    link: "/kontakt",
    menu: null
  }
];
