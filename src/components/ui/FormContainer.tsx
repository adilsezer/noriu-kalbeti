import { ReactNode } from "react";
import "./FormContainer.css";

interface Props {
  children: ReactNode;
}

export default function FormContainer({ children }: Props): JSX.Element {
  return <div className="form-container">{children}</div>;
}
