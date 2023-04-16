import { Link } from "react-router-dom";
import "../LessonPlans.css";
import Button from "../../../components/ui/Button";

export default function LessonCategories() {
  return (
    <div>
      <h1 className="lesson-container">Lesson Plans</h1>
      <div className="lesson-container">
        <Link to={`/lesson-files/start-it`} className="lesson-card">
          <h2>Start It</h2>
          <p>
            This is the first lesson plan for students who are just starting to
            learn English. It is a very basic lesson plan that introduces the
            student to the alphabet and basic vocabulary.
          </p>
          <Button className="button-component">Show</Button>
        </Link>
        <Link to="/lesson-files/better-it" className="lesson-card">
          <h2>Better It</h2>
          <p>
            This is the second lesson plan for students who are continuing to
            learn English. It is a very basic lesson plan that introduces the
            student to the alphabet and basic vocabulary.
          </p>
          <Button className="button-component">Show</Button>
        </Link>
        <Link to="/lesson-files/perfect-it" className="lesson-card">
          <h2>Perfect It</h2>
          <p>
            This is the third lesson plan for students who are finishing to
            learn English. It is a very basic lesson plan that introduces the
            student to the alphabet and basic vocabulary.
          </p>
          <Button className="button-component">Show</Button>
        </Link>
      </div>
    </div>
  );
}
