import { useRef, useState } from "react";
import { ClipLoader } from "react-spinners";
import Button from "../../../components/ui/Button";
import "../Contact.css";
import sendEmail from "../../../utils/emailSender";
import { useAuthContext } from "../../../contexts/AuthContext";

export default function ContactForm() {
  const { user } = useAuthContext();
  const formRef = useRef<HTMLFormElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [loading, setLoading] = useState(false);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendEmail({
        message: messageRef.current?.value || "",
        userEmail: user?.email || "",
      });
    } finally {
      formRef.current?.reset(); // reset the form after successful submission
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="contact-form-text">Contact Us</h1>
      <p className="contact-form-text">
        We will get back to you as soon as we can
      </p>
      <form ref={formRef} onSubmit={onSubmit}>
        <textarea
          id="message"
          name="message"
          required
          rows={15}
          ref={messageRef}
          placeholder="Please write your message here..."
        />
        <div className="contact-form-text contact-button">
          <Button type="submit" disabled={loading} className="button-component">
            {loading ? <ClipLoader size={25} color="#FFF" /> : "Send"}
          </Button>
        </div>
      </form>
    </div>
  );
}
