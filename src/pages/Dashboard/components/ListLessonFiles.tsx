import { useState, useEffect } from "react";
import { ref, list, getDownloadURL, getMetadata } from "firebase/storage";
import { storage } from "../../../configs/FirebaseConfig";
import "../Dashboard.css";
import { ClipLoader } from "react-spinners";
import fileIcon from "../../../assets/images/file-icon.png";
import pdfIcon from "../../../assets/images/pdf-icon.png";

interface LessonFile {
  name: string;
  type: "pdf" | "other";
  url: string;
  date: Date;
  title: string;
  description: string;
}

export default function ListLessonFiles({ category }: { category: string }) {
  const [lessonPlans, setLessonPlans] = useState<LessonFile[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Helper function to truncate text after specific character length
  const truncateText = (text: string, maxLength: number): string => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const createTitleText = (str: string): string => {
    if (!str) return "No Lessons Found";
    str = "Lesson Files For " + str.replace(/-/g, " ");
    return str
      .trim()
      .replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      );
  };

  useEffect(() => {
    const listRef = ref(storage, "lesson-plans/" + category);

    list(listRef)
      .then(async (res) => {
        const storageItems: LessonFile[] = [];
        for (const itemRef of res.items) {
          const itemUrl = await getDownloadURL(itemRef);
          const metadata = await getMetadata(itemRef);
          const uploadDate = new Date(metadata.timeCreated);
          const title = metadata?.customMetadata?.title;
          const description = metadata?.customMetadata?.description;
          const name = itemRef.name;
          const type = itemRef.name.includes(".pdf") ? "pdf" : "other";
          const lessonPlan: LessonFile = {
            name,
            type,
            url: itemUrl,
            date: uploadDate,
            title: title ?? "",
            description: description ?? "",
          };
          storageItems.push(lessonPlan);
        }
        const orderedItems = storageItems.sort(
          (a, b) => b.date.getTime() - a.date.getTime()
        );
        setLessonPlans(orderedItems);
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  }, [category]);

  return (
    <div>
      <h1 className="lesson-container">{createTitleText(category ?? "")}</h1>
      {loading && (
        <div className="lesson-container">
          <ClipLoader color="#000" loading={loading} size={150} />
        </div>
      )}
      {lessonPlans.length === 0 && (
        <p className="lesson-container">No Lessons Found</p>
      )}
      {lessonPlans.length > 0 && (
        <div className="lesson-container">
          {lessonPlans.map((lessonPlan) => (
            <div className="file-card" key={lessonPlan.name}>
              <a
                href={lessonPlan.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={lessonPlan.type === "pdf" ? pdfIcon : fileIcon}
                  alt="file icon"
                  className="lesson-card-icon"
                />
                {lessonPlan.title && (
                  <p className="lesson-card-title">
                    {truncateText(lessonPlan.title, 130)}
                  </p>
                )}
                {lessonPlan.description && (
                  <p className="lesson-card-description">
                    {truncateText(lessonPlan.description, 130)}
                  </p>
                )}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
