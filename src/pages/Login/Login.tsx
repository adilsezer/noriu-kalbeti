import "./Login.css";
import TopNavBar from "../../components/layout/TopNavBar";
import Footer from "../../components/layout/Footer";
import LoginForm from "./components/LoginForm";

export default function Login() {
  return (
    <div>
      <TopNavBar />
      <LoginForm />
      <Footer />
    </div>
  );
}
