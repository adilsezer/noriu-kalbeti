import { InlineWidget } from "react-calendly";

const InlineComponent = () => {
  return <InlineWidget url={process.env?.REACT_APP_CALENDLY_URL ?? ""} />;
};

export default InlineComponent;
