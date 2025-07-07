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
  title: "Dorty a sladké bary z Kašavy",
  description: "https://www.odsrdecka.cz",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: ["dorty", "sladké bary", "dorty zlínský kraj"],
  authors: [{ name: "Radek Morong", url: "https://www.radekmorong.cz" }],
  alternates: {
    canonical: "https://www.odsrdecka.cz",
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
