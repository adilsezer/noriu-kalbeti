import { useState, useRef, FormEvent } from "react";
import { ref, updateMetadata, uploadBytes } from "firebase/storage";
import { storage } from "../../../configs/FirebaseConfig";
import Button from "../../../components/ui/Button";
import { displayToast } from "../../../utils/toast";

const categories = ["start-it", "better-it", "perfect-it"];

export default function UploadALessonPlanFile() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (selectedFile) {
      try {
        setUploading(true);

        const storageRef = ref(
          storage,
          `lesson-plans/${selectedCategory}/${selectedFile.name}`
        );
        await uploadBytes(storageRef, selectedFile);

        const metadata = {
          contentType: selectedFile.type,
          customMetadata: {
            title,
            description,
          },
        };

        await updateMetadata(storageRef, metadata);
        displayToast("File Uploaded", { type: "success" });
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      } catch (error) {
        console.error(error);
        displayToast("File Upload Failed", { type: "error" });
      } finally {
        setUploading(false);
      }
    }
  };

  return (
    <div>
      <h1>Upload a Lesson Plan File</h1>
      <p>
        You can use this page to upload a lesson plan file to the lesson plans
        page.
      </p>

      <form onSubmit={handleSubmit}>
        {/* File Input */}
        <label htmlFor="fileUpload">
          Upload a file:
          <input
            type="file"
            id="fileUpload"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setSelectedFile(e.target.files[0]);
              }
            }}
            ref={inputRef}
          />
        </label>

        {/* Category Selection */}
        <label htmlFor="categorySelect" style={{ marginLeft: "10px" }}>
          Select a category:
          <select
            id="categorySelect"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="start-it">Start It</option>
            <option value="better-it">Better It</option>
            <option value="perfect-it">Perfect It</option>
          </select>
        </label>

        {/* Custom Metadata */}
        <div className="metadata-input">
          <label htmlFor="titleInput">Title:</label>
          <input
            type="text"
            id="titleInput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="metadata-input">
          <label htmlFor="descriptionInput">Description:</label>
          <input
            type="text"
            id="descriptionInput"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Upload Button */}
        <Button type="submit" disabled={uploading} className="button-component">
          {uploading ? "Uploading..." : "Upload"}
        </Button>
      </form>
    </div>
  );
}
