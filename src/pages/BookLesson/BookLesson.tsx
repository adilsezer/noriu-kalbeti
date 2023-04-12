import InlineComponent from "../../components/calendly/InlineComponent";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/NavBar";
import "./BookLesson.css";

export default function BookLesson() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="book-lesson-container">
        <h1>Book Lesson</h1>
        <p>You cannot cancel the lesson in the last 24h</p>
        <InlineComponent></InlineComponent>
      </div>
      <Footer></Footer>
    </div>
  );
}
