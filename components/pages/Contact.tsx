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

  const [showSuccess, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setSuccess(false);
  };
  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    try {
      console.log("help");
      const params = new URLSearchParams(formData).toString();
      const response = await fetch(
        `${import.meta.env.VITE_GOOGLE_API_ENDPOINT}?${params}`,
        {
          redirect: "follow",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
        }
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("Network Error");
      }
      setFormData({ name: "", email: "", message: "" });
      alert(
        "Form submitted successfully! You should receive a confirmation email."
      );
      setSuccess(true);
    } catch (error) {
      console.log(error);
      alert("Error on form submission, please submit again.");
    }
  };

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
            <label htmlFor="name">
              Name:
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Submit</button>
          {showSuccess && <p>Thanks for reaching out! I'll reach out soon!</p>}
        </form>
      </div>
    </div>
  );
}
