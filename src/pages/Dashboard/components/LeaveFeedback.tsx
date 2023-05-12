import { useRef, useState } from "react";
import { ClipLoader } from "react-spinners";
import Button from "../../../components/ui/Button";
import { displayToast } from "../../../utils/toast";
import "../Dashboard.css";
import { useAuthContext } from "../../../contexts/AuthContext";
import sendEmail from "../../../utils/emailSender";

export default function LeaveFeedback() {
  const form = useRef<HTMLFormElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const { user } = useAuthContext();

  const [loading, setLoading] = useState(false);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendEmail({
        message: messageRef.current?.value || "",
        userEmail: user?.email || "",
      });
    } catch (error) {
      catchError(error);
    } finally {
      setLoading(false);
    }
  };

  const catchError = (error: any) => {
    console.error(error);
    displayToast("An error occurred while sending the feedback", {
      type: "error",
    });
  };

  return (
    <div>
      <h1 className="dashboard-text">Send Your Feedback</h1>
      <p className="dashboard-text">Your feedback will be send anonymously</p>
      <form ref={form} onSubmit={onSubmit}>
        <textarea
          id="message"
          name="message"
          required
          rows={15}
          ref={messageRef}
          placeholder="Feedback text here..."
          className="feedback-textarea"
        />
        <div className="dashboard-text">
          <Button type="submit" disabled={loading} className="button-component">
            {loading ? <ClipLoader size={25} color="#FFF" /> : "Send Feedback"}
          </Button>
        </div>
      </form>
    </div>
  );
}
