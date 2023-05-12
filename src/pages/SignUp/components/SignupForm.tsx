import React, { useRef, useState } from "react";
import FormContainer from "../../../components/ui/FormContainer";
import Input from "../../../components/ui/Input";
import { ClipLoader } from "react-spinners";
import Button from "../../../components/ui/Button";
import { Link } from "react-router-dom";
import sendEmail from "../../../utils/emailSender";

export default function SignupForm() {
  const form = useRef<HTMLFormElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendEmail({
        message: "Please verify my account",
        userEmail: emailRef.current?.value || "",
      });
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
        <div>
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
}
