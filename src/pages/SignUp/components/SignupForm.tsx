import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";
import {
  AuthError,
  parseFirebaseErrorMessage,
} from "../../../configs/FirebaseConfig";
import { displayToast } from "../../../utils/toast";
import FormContainer from "../../../components/ui/FormContainer";
import Input from "../../../components/ui/Input";
import { ClipLoader } from "react-spinners";
import Button from "../../../components/ui/Button";

const SignupForm: React.FC = () => {
  const { signup } = useAuthContext();

  const [loading, setLoading] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmationRef = useRef<HTMLInputElement>(null);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (passwordRef.current?.value !== passwordConfirmationRef.current?.value) {
      displayToast("Password must match", { type: "error" });
      return;
    }

    setLoading(true);
    try {
      if (emailRef.current?.value && passwordRef.current?.value) {
        await signup(emailRef.current?.value, passwordRef.current?.value);
      }
    } catch (e) {
      displayToast(parseFirebaseErrorMessage(e as AuthError), {
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <form onSubmit={onSubmit}>
        <h1>Signup</h1>
        <p>Please enter your email and password to sign up</p>

        <div className="input-grid">
          <Input
            id="email"
            name="email"
            type="email"
            ref={emailRef}
            placeholder="Email / Username"
          />
        </div>
        <div className="input-grid">
          <Input
            id="password"
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="input-grid">
          <Input
            id="conf-password"
            name="conf-password"
            ref={passwordConfirmationRef}
            type="password"
            placeholder="Confirm Password"
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
