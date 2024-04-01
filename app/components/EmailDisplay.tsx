// components/EmailDisplay.tsx

import React from "react";

interface EmailDisplayProps {
  email: string;
}

const EmailDisplay: React.FC<EmailDisplayProps> = ({ email }) => {
  return (
    <div>
      <span className="text-primary">Email: {email}</span>
    </div>
  );
};

export default EmailDisplay;
