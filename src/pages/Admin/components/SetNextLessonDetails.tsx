import { getDatabase, set, ref, get } from "firebase/database";
import { useRef, useState } from "react";
import { useAuthContext } from "../../../contexts/AuthContext";
import Button from "../../../components/ui/Button";

export default function SetNextLessonDetails() {
  const { user } = useAuthContext();
  const [newHW, setNewHW] = useState("");
  const textareaActiveHWRef = useRef<HTMLTextAreaElement>(null);

  const writeUserLessonData = async () => {
    const [archivedHW, activeHW] = await Promise.all([
      getUserLessonData("archived-homeworks"),
      getUserLessonData("next-lesson-homework"),
    ]);

    const db = getDatabase();
    await set(ref(db, "users/" + user?.uid), {
      userName: user?.email,
      activeHW: newHW,
      archivedHW: activeHW + ", " + archivedHW,
    });
  };

  const getUserLessonData = async (
    category: string
  ): Promise<string | null> => {
    const db = getDatabase();
    const refPath = "users/" + user?.uid + "/" + category;

    try {
      const snapshot = await get(ref(db, refPath));
      if (snapshot.exists()) {
        return snapshot.val().toString();
      } else {
        console.log("No data available");
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewHW(e.target.value);
  };

  return (
    <div>
      <h1>Set Next Lesson Details</h1>
      <p>
        You can use this page to manage your users, lessons, billing, or
        anything else your heart desires.
      </p>
      <textarea
        id="textarea-active-hw"
        name="textarea-active-hw"
        ref={textareaActiveHWRef}
        placeholder="Enter Active Homework"
        onChange={handleOnChange}
      />
      <Button className="button-component" onClick={writeUserLessonData}>
        Submit
      </Button>
    </div>
  );
}
