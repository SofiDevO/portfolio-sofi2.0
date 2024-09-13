import {EMAIL, EMAIL_HOST, EMAIL_PASS, EMAIL_PORT} from 'astro:env/server';

import nodemailer from "nodemailer";
interface ISendEmail {
  email: string;
  html: string;
  subject: string;
  name: string;
}

async function sendEmail(props: ISendEmail) {
  let transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    secure: true,
    auth: {
      user: EMAIL,
      pass: EMAIL_PASS,
    },
  });


  let message = {
    from: props.email,
    to: EMAIL,
    subject: props.subject,
    html: `<h1>Contact Form 🦝</h1><br>
    <b>Name</b>: ${props.name}<br>
    <b>Email</b>: ${props.email}<br>
    <b>Message</b>: ${props.html}`,
  };

  let info = await transporter.sendMail(message);
  return info;
}

export { sendEmail };