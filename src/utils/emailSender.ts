import { displayToast } from "./toast";
import emailjs from "@emailjs/browser";

interface SendEmailParams {
  message: string;
  userEmail: string;
}

export default async function sendEmail({
  message,
  userEmail,
}: SendEmailParams) {
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID as string;
  const templateId = process.env
    .REACT_APP_EMAILJS_MESSAGE_TEMPLATE_ID as string;
  const userId = process.env.REACT_APP_EMAILJS_USER_ID as string;

  try {
    if (!message) {
      displayToast("Please enter a message", {
        type: "error",
      });
      return;
    } else if (!userEmail) {
      displayToast("Please enter your email", {
        type: "error",
      });
      return;
    } else {
      const params = {
        message: message + "\nSent by: " + userEmail,
        user_email: userEmail,
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        params,
        userId
      );
      console.log(response);
      displayToast("Message sent!", {
        type: "success",
        autoClose: 3000,
      });
    }
  } catch (error) {
    console.error(error);
  }
}
