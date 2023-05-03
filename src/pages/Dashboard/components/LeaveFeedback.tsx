import { useRef, useState } from "react";
import { ClipLoader } from "react-spinners";
import Button from "../../../components/ui/Button";
import emailjs from "@emailjs/browser";
import { displayToast } from "../../../utils/toast";

const LeaveFeedback: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [loading, setLoading] = useState(false);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID as string;
    const templateId = process.env
      .REACT_APP_EMAILJS_MESSAGE_TEMPLATE_ID as string;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID as string;

    try {
      if (!messageRef.current?.value)
        displayToast("Feedback is required to send the email", {
          type: "error",
        });
      else {
        const response = await emailjs.sendForm(
          serviceId,
          templateId,
          form.current as HTMLFormElement,
          userId
        );
        console.log(response);
        displayToast(
          "The feedback has been sent. Your teacher will read it as soon as possible",
          {
            type: "success",
          }
        );
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
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
          style={{
            resize: "none",
            padding: "10px",
            width: "75%",
            borderRadius: "5px",
            border: "1px solid #ccc",
            outline: "none",
            fontFamily: "inherit",
            fontSize: "inherit",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <div className="dashboard-text">
          <Button type="submit" disabled={loading} className="button-component">
            {loading ? <ClipLoader size={25} color="#FFF" /> : "Send Feedback"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LeaveFeedback;
