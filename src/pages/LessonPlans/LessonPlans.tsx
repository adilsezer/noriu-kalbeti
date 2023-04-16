import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/NavBar";
import LessonCategories from "./components/LessonCategories";

export default function LessonPlans() {
  return (
    <div>
      <Navbar></Navbar>
      <LessonCategories></LessonCategories>
      <Footer></Footer>
    </div>
  );
}
