import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/NavBar";
import UpdateProfileForm from "./components/UpdateProfileForm";

export default function UpdateProfile() {
  return (
    <div>
      <Navbar></Navbar>
      <UpdateProfileForm />
      <Footer></Footer>
    </div>
  );
}
