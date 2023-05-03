import { useRef, useState } from "react";
import { ClipLoader } from "react-spinners";
import { useAuthContext } from "../../../contexts/AuthContext";
import { displayToast } from "../../../utils/toast";
import {
  AuthError,
  parseFirebaseErrorMessage,
} from "../../../configs/FirebaseConfig";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import FormContainer from "../../../components/ui/FormContainer";

const AccountDetails: React.FC = () => {
  const { user, updateProfile, updatePassword } = useAuthContext();

  const [loading, setLoading] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmationRef = useRef<HTMLInputElement>(null);

  const currentUserEmail = user?.email || "";

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (passwordRef.current?.value !== passwordConfirmationRef.current?.value) {
      displayToast("Password must match", { type: "error" });
      return;
    }

    setLoading(true);
    let promises: Promise<void | string>[] = [];

    if (passwordRef.current?.value) {
      promises = [...promises, updatePassword(passwordRef.current.value)];
    }

    if (nameRef.current?.value) {
      promises = [...promises, updateProfile(nameRef.current.value)];
    }

    try {
      await Promise.all(promises);
      displayToast("Profile successfully updated!", {
        type: "success",
      });
    } catch (e) {
      displayToast(parseFirebaseErrorMessage(e as AuthError), {
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="dashboard-text">Update Account Details</h1>
      <p className="dashboard-text">
        Please update your account information using the form below
      </p>
      <FormContainer>
        <form onSubmit={onSubmit}>
          <div>
            <Input
              id="email"
              type="email"
              defaultValue={currentUserEmail}
              disabled={true}
            />
          </div>
          <div>
            <Input
              id="name"
              ref={nameRef}
              type="text"
              placeholder="Display Name"
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

          <Button type="submit" className="button-component" disabled={loading}>
            {loading ? <ClipLoader size={25} color="#FFF" /> : "Update"}
          </Button>
        </form>
      </FormContainer>
    </div>
  );
};

export default AccountDetails;
