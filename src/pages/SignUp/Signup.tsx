import Footer from "../../components/layout/Footer";
import TopNavBar from "../../components/layout/TopNavBar";
import SignupForm from "./components/SignupForm";
import "./Signup.css";

export default function Signup() {
  return (
    <div>
      <TopNavBar />
      <SignupForm />
      <Footer />
    </div>
  );
}
