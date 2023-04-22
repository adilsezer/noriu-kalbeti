import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/NavBar";
import "./Home.css";
import contentPicture from "../../assets/images/homepage-image.jpg";
import {
  homePageContent,
  homePageContent2,
  homePageContent3,
} from "../../components/text/ContentTexts";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="content-container">
        <img
          src={contentPicture}
          alt="Home Page Content"
          className="content-image"
        />
        <p className="main-content-text">{homePageContent}</p>
      </div>
      <div className="home-sub-text">{homePageContent2}</div>
      <div className="home-sub-text">{homePageContent3}</div>
      <Footer></Footer>
    </div>
  );
}
