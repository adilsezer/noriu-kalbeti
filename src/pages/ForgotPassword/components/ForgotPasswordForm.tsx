import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

import { useAuthContext } from "../../../contexts/AuthContext";
import { displayToast } from "../../../utils/toast";
import {
  AuthError,
  parseFirebaseErrorMessage,
} from "../../../configs/FirebaseConfig";
import FormContainer from "../../../components/ui/FormContainer";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";

const ForgotPasswordForm: React.FC = () => {
  const { resetPassword } = useAuthContext();

  const [loading, setLoading] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      if (emailRef.current?.value) {
        await resetPassword(emailRef.current?.value);
        displayToast("All set! Check your e-mail for further instructions.", {
          type: "success",
        });
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
        <h1>Password Recover</h1>
        <p>Please enter your email to recover your password</p>

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
          {loading ? <ClipLoader size={25} color="#FFF" /> : "Reset password"}
        </Button>
      </form>
      <p>
        <Link to="/login">Click here to go back to login page</Link>{" "}
      </p>
    </FormContainer>
  );
};

export default ForgotPasswordForm;
