import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/NavBar";
import { whyNoriuKalbetiContent } from "../../components/text/ContentTexts";
import contentPicture from "../../assets/images/homepage-image.jpg";

export default function WhyNoriuKalbeti() {
  return (
    <div>
      <Navbar></Navbar>
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
