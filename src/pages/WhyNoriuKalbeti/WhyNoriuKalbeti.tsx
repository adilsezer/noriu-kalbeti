import Footer from "../../components/layout/Footer";
import TopNavBar from "../../components/layout/TopNavBar";
import { whyNoriuKalbetiContent } from "../../components/text/ContentTexts";
import contentPicture from "../../assets/images/homepage-image.jpg";

export default function WhyNoriuKalbeti() {
  return (
    <div>
      <TopNavBar></TopNavBar>
      <div className="content-container">
        <img
          src={contentPicture}
          alt="Why Noriu Kalbeti Content"
          className="content-image"
        />
        <p className="main-content-text">{whyNoriuKalbetiContent}</p>
      </div>
      <Footer></Footer>
    </div>
  );
}
