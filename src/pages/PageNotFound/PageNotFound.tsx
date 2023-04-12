import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/NavBar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PageNotFound.css";

export default function PageNotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(redirectTimer);
  }, [navigate]);

  return (
    <div>
      <Navbar></Navbar>
      <h1 className="center-text">Page Not Found</h1>
      <p className="center-text">
        You will be redirected to the home page in 5 seconds
      </p>
      <p className="center-text">
        If you are not redirected, click <a href="/">here</a>.
      </p>
      <Footer></Footer>
    </div>
  );
}
