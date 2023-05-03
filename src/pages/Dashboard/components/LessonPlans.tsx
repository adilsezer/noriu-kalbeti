import { useState } from "react";
import Button from "../../../components/ui/Button";
import ListLessonFiles from "./ListLessonFiles";

export default function LessonPlans() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div>
      <h1 className="dashboard-text">Lesson Plans</h1>
      <div className="lesson-container">
        <div className="lesson-card">
          <h2>Start It</h2>
          <p className="lesson-content">
            This is the first lesson plan for students who are just starting to
            learn English. It is a very basic lesson plan that introduces the
            student to the alphabet and basic vocabulary.
          </p>
          <Button
            className="button-component"
            onClick={() => setSelectedCategory("start-it")}
          >
            Show
          </Button>
        </div>
        <div className="lesson-card">
          <h2>Better It</h2>
          <p className="lesson-content">
            This is the second lesson plan for students who are continuing to
            learn English. It is a very basic lesson plan that introduces the
            student to the alphabet and basic vocabulary.
          </p>
          <Button
            className="button-component"
            onClick={() => setSelectedCategory("better-it")}
          >
            Show
          </Button>
        </div>
        <div className="lesson-card">
          <h2>Perfect It</h2>
          <p className="lesson-content">
            This is the third lesson plan for students who are finishing to
            learn English. It is a very basic lesson plan that introduces the
            student to the alphabet and basic vocabulary.
          </p>
          <Button
            className="button-component"
            onClick={() => setSelectedCategory("perfect-it")}
          >
            Show
          </Button>
        </div>
      </div>
      {selectedCategory && <ListLessonFiles category={selectedCategory} />}
    </div>
  );
}
