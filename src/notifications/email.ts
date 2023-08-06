/**
 * Where do I generate an app password for gmail?
 * @see https://myaccount.google.com/apppasswords
 */

import nodemailer from "nodemailer";
import { configuration } from "../configuration";

export const sendEmail = async () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: configuration.email.sender.address,
      pass: configuration.email.sender.password,
    },
  });

  const messageOptions = {
    from: configuration.email.sender.name,
    to: configuration.email.receiver.address,
    subject: configuration.email.message.subject,
    text: configuration.email.message.text,
  };

  transporter.sendMail(messageOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
