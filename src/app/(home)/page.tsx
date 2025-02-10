import LaunchSite from "../../components/index/launchSite";
import HearthSnake from "../../components/index/hearthSnake";
import Offer from "../../components/index/offer";
import AboutUs from "../../components/aboutUs";
import WhereToFindUs from "../../components/index/whereToFindUs";
import Reference from "../../components/index/reference";
import Gallery from "../../components/gallery";
import IndexSectionLine from "../../components/indexSectionLine";
import SectionTitleBlue from "../../components/sectionTitleBlue";
import Flowers from "../../components/index/flowers";
import AboutUsComponentIndexAsideImg from "../../components/index/aboutUsIndexText";

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
      <SectionTitleBlue title="Kde nás najdete?" />
      <WhereToFindUs />
      <Reference />
      <IndexSectionLine sectionAnchor={false} />
      <Gallery />
      <HearthSnake />
    </>
  );
};
export default Home;
