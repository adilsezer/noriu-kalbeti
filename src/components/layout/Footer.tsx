import "./Footer.css";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  const socialLinks = [
    { url: "https://www.linkedin.com/in/mildasezer", label: "LinkedIn" },
    { url: "mailto:milda.sezer@gmail.com", label: "Email" },
    { url: "https://www.youtube.com/noriukalbeti", label: "YouTube" },
    { url: "https://www.instagram.com/noriukalbeti", label: "Instagram" },
  ];

  return (
    <div className="footer-container">
      <hr />
      <p className="footer-text">Get Connected</p>
      {socialLinks.map((link, index) => (
        <SocialIcon
          key={index}
          url={link.url}
          className="footer-icons"
          aria-label={link.label}
        />
      ))}
      <p className="footer-copyright">
        © {new Date().getFullYear()} Noriu Kalbeti
      </p>
    </div>
  );
}
