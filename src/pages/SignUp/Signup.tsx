import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/NavBar";
import SignupForm from "./components/SignupForm";
import "./Signup.css";

export default function Signup() {
  return (
    <div>
      <Navbar></Navbar>
      <SignupForm />
      <Footer></Footer>
    </div>
  );
}
