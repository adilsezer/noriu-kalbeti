import { child, get, getDatabase, ref } from "firebase/database";
import { useEffect, useState } from "react";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/NavBar";
import "./Home.css";
import contentPicture from "../../assets/images/homepage-image.jpg";
import { homePageContent } from "../../components/text/ContentTexts";

interface IData {
  key: string | null;
  text: string;
}

export default function Home() {
  const [dbHomeContents, setDbHomeContents] = useState<IData[]>([]);

  const dbRef = ref(getDatabase());
  useEffect(() => {
    get(child(dbRef, `home-page`))
      .then((snapshot) => {
        let result: IData[] = [];
        snapshot.forEach((child) => {
          result.push({
            key: child.key,
            text: child.val(),
          });
        });
        setDbHomeContents(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dbRef]);

  const dbContentItems = dbHomeContents.map((content, index) => (
    <p key={index} className="home-sub-text">
      {content.text}
    </p>
  ));

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
      {dbContentItems}
      <Footer></Footer>
    </div>
  );
}
