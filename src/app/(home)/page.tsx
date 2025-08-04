import LaunchSite from "../../components/index/launchSite";
import HearthSnake from "../../components/index/hearthSnake";
import Offer from "../../components/index/offer";
import AboutUs from "../../components/aboutUs";
import WhereToFindUs from "../../components/index/whereToFindUs";
import Reference from "../../components/index/reference";
import Gallery from "../../components/gallery";
import SectionTitleBlue from "../../components/sectionTitleBlue";
import Flowers from "../../components/index/flowers";
import AboutUsComponentIndexAsideImg from "../../components/index/aboutUsIndexText";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Od Srdéčka | Dorty a sladké bary z Kašavy",
  description:
    "S láskou pro vás pečeme dorty a sladké bary z kvalitních surovin pro všechny příležitosti. Najdete nás v Kašavě u Zlína.",
  alternates: {
    canonical: "https://www.odsrdecka.cz",
  },
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "dorty",
    "sladké bary",
    "dorty zlínský kraj",
    "svatební dorty",
    "narozeninové dorty",
    "Kašava",
  ],
  authors: [{ name: "Radek Morong", url: "https://www.radekmorong.cz" }],

  openGraph: {
    title: "Od Srdéčka | Dorty a sladké bary z Kašavy",
    description:
      "S láskou pro vás pečeme dorty a sladké bary pro všechny příležitosti.",
    url: "https://www.odsrdecka.cz",
    siteName: "Od Srdéčka",
    images: [
      {
        url: "https://odsrdecka.cz/index/team.png",
        width: 1200,
        height: 630,
        alt: "Tým Od Srdéčka - Pečeme pro vás dorty a sladké bary",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Od Srdéčka | Dorty a sladké bary z Kašavy",
    description:
      "S láskou pro vás pečeme dorty a sladké bary pro všechny příležitosti.",
    images: ["https://odsrdecka.cz/index/team.png"],
  },
};

const Home = () => {
  return (
    <>
      <LaunchSite />
      <HearthSnake />
      <Offer />
      <AboutUs
        title={"O nás"}
        textImg="/pozadi-text/sladke-z-valaska.svg"
        indexPage={true}
      >
        <AboutUsComponentIndexAsideImg />
      </AboutUs>
      <Flowers />
      <SectionTitleBlue isIndex={true} title="Kde nás najdete?" />
      <WhereToFindUs />
      <Reference />
      <Gallery />
      <HearthSnake />
    </>
  );
};
export default Home;
