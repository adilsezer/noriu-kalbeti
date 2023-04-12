import "./Login.css";
import Navbar from "../../components/layout/NavBar";
import Footer from "../../components/layout/Footer";
import LoginForm from "./components/LoginForm";

export default function Login() {
  return (
    <div>
      <Navbar></Navbar>
      <LoginForm />
      <Footer />
    </div>
  );
}
