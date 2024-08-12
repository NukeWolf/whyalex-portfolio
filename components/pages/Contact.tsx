import Layout from "../Layout";
import styles from "./Contact.module.css";
import { useState } from "react";

function ContactPage() {
  return (
    <Layout>
      <ContactBody />
    </Layout>
  );
}

export default ContactPage;

function ContactBody() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = () => {};
  return (
    <div className={styles["contact-panel"]}>
      <div className={styles["hero-card"]}>
        <div className={styles["hero-text"]}>
          <h1>Contact</h1>
          <p>
            If you'd like to get in touch, feel free to use any of the icons
            below or submit a form on the right.
          </p>
          <p>
            Feel free to also check out <a href="/resume.pdf">my resume</a>!
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
            />
          </div>

          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={formData.message} />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
