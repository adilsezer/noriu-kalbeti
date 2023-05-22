import Footer from "../../components/layout/Footer";
import TopNavBar from "../../components/layout/TopNavBar";
import "./FAQ.css";

export default function FAQ() {
  const faqs = [
    {
      question: "How can I cancel the lesson?",
      answer: "You can cancel the lesson 24h prior to lesson time!",
    },
    {
      question: "How can I reschedule the lesson?",
      answer: "You can reschedule the lesson 24h prior to lesson time!",
    },
    {
      question: "How can I book the lesson?",
      answer: "You can book the lesson using the calendar",
    },
    {
      question: "How can I update my account details?",
      answer: "You can update your account details using the form below",
    },
    {
      question: "How can I update my profile?",
      answer: "You can update your profile using the form below",
    },
  ];

  return (
    <div>
      <TopNavBar />
      <h1 className="faq-title">FAQ</h1>
      {faqs.map((faq, index) => (
        <div key={index}>
          <div className="faq-question">{faq.question}</div>
          <div className="faq-answer">{faq.answer}</div>
        </div>
      ))}
      <Footer />
    </div>
  );
}
