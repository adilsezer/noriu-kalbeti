import { InlineWidget } from "react-calendly";

const InlineComponent = () => {
  return (
    <div>
      <h1 className="dashboard-text">
        Please book your lesson using the calendar
      </h1>
      <p className="dashboard-text">
        You cannot cancel the lesson 24h prior to lesson time!
      </p>
      <InlineWidget
        styles={{
          minWidth: `320px`,
          height: `1100px`,
          marginTop: `-10px`,
        }}
        url={process.env?.REACT_APP_CALENDLY_URL ?? ""}
      />
    </div>
  );
};

export default InlineComponent;
