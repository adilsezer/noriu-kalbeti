import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import Footer from "../../../components/layout/Footer";
import Navbar from "../../../components/layout/NavBar";
import ListLessonFiles from "./ListLessonFiles";

export default function LessonFiles() {
  return (
    <div>
      <Navbar></Navbar>
      <ListLessonFiles></ListLessonFiles>
      <Footer></Footer>
    </div>
  );
}
