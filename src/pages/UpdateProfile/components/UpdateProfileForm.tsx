import { useRef, useState } from "react";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";
import { displayToast } from "../../../utils/toast";
import {
  AuthError,
  parseFirebaseErrorMessage,
} from "../../../configs/FirebaseConfig";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import FormContainer from "../../../components/ui/FormContainer";
import "./UpdateProfileForm.css";

const UpdateProfileForm: React.FC = () => {
  const navigate = useNavigate();
  const { user, updateProfile, updatePassword, updateEmail } = useAuthContext();

  const [loading, setLoading] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmationRef = useRef<HTMLInputElement>(null);

  const currentUserEmail = user?.email || "";
  const currentUserName = user?.name || "";

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!emailRef.current?.value) {
      displayToast("Email must not be empty", { type: "error" });
      return;
    }

    if (passwordRef.current?.value !== passwordConfirmationRef.current?.value) {
      displayToast("Password must match", { type: "error" });
      return;
    }

    setLoading(true);
    let promises: Promise<void | string>[] = [];

    if (emailRef.current?.value !== user?.email) {
      promises = [...promises, updateEmail(emailRef.current.value)];
    }

    if (passwordRef.current?.value) {
      promises = [...promises, updatePassword(passwordRef.current.value)];
    }

    let url = undefined;

    if (nameRef.current?.value) {
      promises = [...promises, updateProfile(nameRef.current.value, url)];
    }

    try {
      await Promise.all(promises);
      displayToast("Profile successfully updated!", {
        type: "success",
      });
      navigate("/dashboard");
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
        <h1>Update Profile</h1>
        <p>Please enter your details to update</p>

        <div>
          <Input
            id="name"
            ref={nameRef}
            type="text"
            defaultValue={currentUserName}
            placeholder="Display Name"
          />
        </div>
        <div>
          <Input
            id="email"
            ref={emailRef}
            type="email"
            defaultValue={currentUserEmail}
            placeholder="Email"
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
        <div>
          <Input
            id="password-conf"
            ref={passwordConfirmationRef}
            type="password"
            placeholder="Confirm Password"
          />
        </div>

        <Button
          type="submit"
          className="button-component double-button"
          disabled={loading}
        >
          {loading ? <ClipLoader size={25} color="#FFF" /> : "Update"}
        </Button>

        <Button
          type="submit"
          className="button-component double-button"
          onClick={() => navigate("/dashboard")}
        >
          Cancel
        </Button>
      </form>
    </FormContainer>
  );
};

export default UpdateProfileForm;
