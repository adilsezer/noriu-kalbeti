import Footer from "../../components/layout/Footer";
import TopNavBar from "../../components/layout/TopNavBar";
import "./Home.css";
import contentPicture from "../../assets/images/homepage-image.jpg";
import {
  homePageContent,
  homePageContent2,
} from "../../components/text/ContentTexts";

export default function Home() {
  return (
    <div>
      <TopNavBar />
      <div className="content-container">
        <img
          src={contentPicture}
          alt="Home Page Content"
          className="content-image"
        />
        <p className="main-content-text">{homePageContent}</p>
      </div>
      <div className="home-sub-text">{homePageContent2}</div>
      <Footer />
    </div>
  );
}
