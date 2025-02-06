import LaunchSite from "@/components/index/launchSite";
import HearthSnake from "@/components/index/hearthSnake";
import Offer from "@/components/index/offer";
import AboutUs from "@/components/index/aboutUs";
import WhereToFindUs from "@/components/index/whereToFindUs";
import Reference from "@/components/index/reference";
import Gallery from "@/components/gallery";
import SectionLine from "@/components/sectionLine";
import SectionTitleBlue from "@/components/sectionTitleBlue";
import Flowers from "@/components/index/flowers";

const Home = () => {
  return (
    <>
      <LaunchSite />
      <HearthSnake />
      <Offer />
      <AboutUs />
      <Flowers />
      <SectionTitleBlue title="Kde nás najdete?" />
      <WhereToFindUs />
      <Reference />
      <SectionLine />
      <Gallery />
      <HearthSnake />
    </>
  );
};
export default Home;
