import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useAuthContext } from "../../../contexts/AuthContext";
import { displayToast } from "../../../utils/toast";
import {
  AuthError,
  parseFirebaseErrorMessage,
} from "../../../configs/FirebaseConfig";

import "./LoginForm.css";
import Button from "../../../components/ui/Button";
import FormContainer from "../../../components/ui/FormContainer";
import Input from "../../../components/ui/Input";

const Login: React.FC = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const [rememberChecked, setRememberChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      if (emailRef.current?.value && passwordRef.current?.value) {
        await login(
          emailRef.current?.value,
          passwordRef.current?.value,
          rememberChecked
        );
      }
      navigate("/dashboard");
    } catch (e) {
      displayToast(parseFirebaseErrorMessage(e as AuthError), {
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRememberMeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRememberChecked((current) => !current);
  };

  return (
    <FormContainer>
      <form onSubmit={onSubmit}>
        <h1>Login</h1>
        <p>Please enter your credentials to login</p>
        <div>
          <Input
            id="email"
            ref={emailRef}
            type="email"
            placeholder="Email / Username"
          />
        </div>
        <div>
          <Input
            id="password"
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="extra-fields">
          <label htmlFor={"rememberMe"}>
            Remember Me
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberChecked}
              onChange={handleRememberMeChange}
            />
          </label>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
        <Button type="submit" disabled={loading} className="button-component">
          {loading ? <ClipLoader size={25} color="#FFF" /> : "Submit"}
        </Button>
      </form>
    </FormContainer>
  );
};

export default Login;
