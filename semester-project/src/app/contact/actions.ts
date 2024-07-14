"use server";
import nodemailer from "nodemailer";

type FormState = {
  message: string;
  status: string;
};

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "tonigrbic.5@gmail.com",
    pass: "kdez cdki opae mmhr",
  },
});

export async function submitFormAction(
  prevState: FormState,
  formData: FormData
) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { message: "Please fill out all fields!", status: "error" };
  }

  const info = await transporter.sendMail({
    from: email,
    to: "tonigrbic.5@gmail.com",
    subject: name,
    text: `from: ${email}\n ${message}`,
  });

  if (!info.messageId || info.accepted.length === 0) {
    return { message: "Failed to send message!", status: "error" };
  }

  return { message: "Form submitted successfully!", status: "success" };
}
