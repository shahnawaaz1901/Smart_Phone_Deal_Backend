import { SendMailArgs } from "../types/mail.types";
import nodemailer from "nodemailer";

const { SENDER_EMAIL, SENDER_NAME, SENDER_PASS } = process.env;
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: SENDER_EMAIL, pass: SENDER_PASS },
});

const sendMail = async ({
  recipentEmail,
  recipentName,
  text,
  html,
  subject,
}: SendMailArgs) => {
  try {
    await transporter.sendMail({
      to: `${recipentName}<${recipentEmail}>`,
      from: `${SENDER_NAME}<${SENDER_EMAIL}>`,
      subject: subject,
      text: text,
      html: html,
    });
    console.log("Mail sent successfully !!");
  } catch (error: any) {
    console.log(`Error while Sending Email : ${error}`);
  }
};

export default sendMail;
