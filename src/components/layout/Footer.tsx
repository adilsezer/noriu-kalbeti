import "./Footer.css";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <div className="footer-container">
      <hr />
      <p className="footer-text">Get Connected</p>
      <SocialIcon
        url="https://www.linkedin.com/in/mildasezer"
        className="footer-icons"
      />
      <SocialIcon url="mailto:milda.sezer@gmail.com" className="footer-icons" />
      <SocialIcon
        url="https://www.youtube.com/noriukalbeti"
        className="footer-icons"
      />
      <SocialIcon
        url="https://www.instagram.com/noriukalbeti"
        className="footer-icons"
      />
      <p className="footer-copyright">© 2023 Noriu Kalbeti</p>
    </div>
  );
}
