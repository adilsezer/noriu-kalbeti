import { InlineWidget } from "react-calendly";
import TopNavBar from "../../components/layout/TopNavBar";
import Footer from "../../components/layout/Footer";
import "./BookLesson.css";

export default function BookLesson() {
  return (
    <div>
      <TopNavBar />
      <h1 className="calendly-text">
        Please book your lesson using the calendar
      </h1>
      <p className="calendly-text">
        You cannot cancel the lesson 24h prior to lesson time!
      </p>
      <InlineWidget
        styles={{
          minWidth: `320px`,
          height: `1100px`,
          marginBottom: `-300px`,
          marginTop: `-50px`,
        }}
        url={process.env?.REACT_APP_CALENDLY_URL ?? ""}
      />
      <Footer />
    </div>
  );
}
