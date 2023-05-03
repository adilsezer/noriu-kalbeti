import { useRef, useState } from "react";
import FormContainer from "../../../components/ui/FormContainer";
import Input from "../../../components/ui/Input";
import { ClipLoader } from "react-spinners";
import Button from "../../../components/ui/Button";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { displayToast } from "../../../utils/toast";

const SignupForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID as string;
    const templateId = process.env
      .REACT_APP_EMAILJS_SIGNUP_TEMPLATE_ID as string;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID as string;

    try {
      if (!emailRef.current?.value)
        displayToast("Email is required to sign up", {
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
          "New user request has been sent. Please wait until it is verified",
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
    <FormContainer>
      <form ref={form} onSubmit={onSubmit}>
        <h1>Signup</h1>
        <p>Your account will be verified by the admin in 24h</p>

        <div className="input-grid">
          <Input
            id="email"
            name="email"
            type="email"
            ref={emailRef}
            placeholder="Email / Username"
          />
        </div>
        <Button type="submit" disabled={loading} className="button-component">
          {loading ? <ClipLoader size={25} color="#FFF" /> : "Signup"}
        </Button>
      </form>

      <p>
        Already have an account? <Link to="/login">Click here to login</Link>
      </p>
    </FormContainer>
  );
};

export default SignupForm;
