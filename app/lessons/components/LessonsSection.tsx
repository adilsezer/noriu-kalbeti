import React from "react";
import LessonCard from "./LessonCard";
import { lessonsData } from "../data/lessonsData"; // Adjust the path as necessary

export default function LessonsSection() {
  return (
    <div className="container px-36">
      <h1 className="text-4xl font-bold mb-2 ml-4">Lesson Types</h1>
      <div className="flex flex-wrap">
        {lessonsData.map((lesson, index) => (
          <div className="w-full md:w-1/3 p-4 flex flex-col" key={index}>
            <LessonCard {...lesson} />
          </div>
        ))}
      </div>
    </div>
  );
}
