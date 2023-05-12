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
      <h1 className="dashboard-text">FAQ</h1>
      {faqs.map((faq, index) => (
        <div key={index}>
          <b>{faq.question}</b>
          <p>{faq.answer}</p>
          {index < faqs.length - 1 && <br />}
        </div>
      ))}
    </div>
  );
}
