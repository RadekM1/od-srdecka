import { ArticleSchema } from "@/schema/article"


  
export const articlesList = [
    {   
        id: 1,
        title: 'Indická zmrzlina Kufli',
        Thumbnail: '/blog/blog1.png'
    }
]

export const articles: ArticleSchema[] = [
    {   
        id: 1,
        title: 'Bezlepkové donuty z trouby',
        slug:'first-one',
        summary:`
        Z jednoho základního receptu jsem zkusila udělat tři druhy. Jedny jsem obalila v čokyně a posypala lyo malinami a drcenými pistáciemi, do dalších jsem dala červený rybíz ze zahrádky a jednu verzi jsem zkusila potřít jablečným ciderem a obalila jsem je ve skořicovém cukru. Takže si je můžete přizpůsobit podle toho, co zrovna máte doma nebo na co máte chuť😁.
        `,
        ingredience:`
        <p>Těsto mi vyšlo na cca 10 ks donutů:<\/p>\n<ul>\n<li>210 g mouky (freee samokypřící @freeedovesfarmcz )<\/li>\n<li>2 menší vejce ideálně o vel. S (při dvojité dávce bych dala 3 o velikosti L)<\/li>\n<li>90 g cukru<\/li>\n<li>90 ml mléka (použila jsem bez laktózy)<\/li>\n<li>35 ml oleje<\/li>\n<li>špetka soli<\/li>\n<li>špetka muškátového oříšku<\/li>\n<li>vanilka\/vanilkový extrakt<\/li>\n<\/ul>\n\n
        `,
        procedure:`
        Z jednoho základního receptu jsem zkusila udělat tři druhy. Jedny jsem obalila v čokyně a posypala lyo malinami a drcenými pistáciemi, do dalších 
        jsem dala červený rybíz ze zahrádky a jednu verzi jsem zkusila potřít jablečným ciderem a obalila jsem je 
        ve skořicovém cukru. Takže si je můžete přizpůsobit podle toho, co zrovna máte doma nebo na co máte chuť😁.
        `,
        footer: "No a teď už si jen uvaříme kafe a baštíme. Dobrou chuť! ☕️🍩",
        thumbnail: '/blog/blog1.png',
        imgOne: '/blog/blog1.png',
        imgTwo: '/blog/blog2.png',
        imgThree: '/blog/blog3.png',
    },
]