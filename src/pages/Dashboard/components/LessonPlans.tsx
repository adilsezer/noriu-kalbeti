import { useState } from "react";
import Button from "../../../components/ui/Button";
import ListLessonFiles from "./ListLessonFiles";
import "../Dashboard.css";

const lessons = [
  {
    title: "Start It",
    description:
      "This is the first lesson plan for students who are just starting to learn English. It is a very basic lesson plan that introduces the student to the alphabet and basic vocabulary.",
    category: "start-it",
  },
  {
    title: "Better It",
    description:
      "This is the second lesson plan for students who are continuing to learn English. It is a very basic lesson plan that introduces the student to the alphabet and basic vocabulary.",
    category: "better-it",
  },
  {
    title: "Perfect It",
    description:
      "This is the third lesson plan for students who are finishing to learn English. It is a very basic lesson plan that introduces the student to the alphabet and basic vocabulary.",
    category: "perfect-it",
  },
];

export default function LessonPlans() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div>
      <h1 className="dashboard-text">Lesson Plans</h1>
      <div className="lesson-container">
        {lessons.map((lesson) => (
          <div className="lesson-card" key={lesson.category}>
            <h2>{lesson.title}</h2>
            <p className="lesson-content">{lesson.description}</p>
            <Button
              className="button-component"
              onClick={() => setSelectedCategory(lesson.category)}
            >
              Show
            </Button>
          </div>
        ))}
      </div>
      {selectedCategory && <ListLessonFiles category={selectedCategory} />}
    </div>
  );
}
