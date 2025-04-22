// ContactForm.tsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./styles.module.css"; // Optional: your CSS module

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        form.current,
        "your_user_public_key" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("Meddelandet skickades!");
          form.current?.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("Något gick fel. Försök igen.");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.form}>
      <input type="text" name="name" placeholder="Ditt namn" required />
      <input type="email" name="email" placeholder="din@email.com" required />
      <input type="text" name="company" placeholder="Företag" />
      <input type="text" name="deadline" placeholder="Deadline (valfritt)" />
      <textarea name="message" placeholder="Ditt meddelande" required />
      <button type="submit">Skicka</button>
      {status && <p className={styles.status}>{status}</p>}
    </form>
  );
};

export default ContactForm;
