"use client";

import { useState } from "react";
import styles from "./Gallery.module.scss";

export default function Gallery() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, position, message } = formData;
    const whatsappMessage = encodeURIComponent(
      `Hi Tasya,\n\nI would like to collaborate with you. Here are my details:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nPosition: ${position}\nMessage: ${message}\n\nLooking forward to discussing potential opportunities with you!`
    );
    window.location.href = `https://wa.me/6285771942063?text=${whatsappMessage}`;
  };

  const handleDownloadResume = () => {
    window.location.href = "/resume.pdf"; // Ensure resume.pdf is in /public directory
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.formCard}>
          <h2 className={styles.title}>Let's Collaborate</h2>
          <p className={styles.description}>Contact me for more</p>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  required
                  className={styles.input}
                />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className={styles.input}
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="position">Position</label>
              <select
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className={styles.select}
              >
                <option value="" disabled>
                  Select your position
                </option>
                <option value="Web Developer">Web Developer</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
                <option value="Project Manager">Project Manager</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                required
                className={styles.textarea}
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
        <div className={styles.contactInfoCard}>
          <img
            src="/images/Tasya.jpg" // Replace with your actual profile image path
            alt="Profile"
            className={styles.profileImage}
          />
          <button
            onClick={handleDownloadResume}
            className={styles.downloadButton}
          >
            Download Resume
          </button>
          <div className={styles.infoItem}>
            <span className={styles.icon}>📞</span>
            <span>Phone (+62) 857 7194 2063</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.icon}>✉️</span>
            <span>Email tasyakhaerani66@gmail.com</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.icon}>📍</span>
            <span>Address Jakarta, Indonesia</span>
          </div>
        </div>
      </div>
    </section>
  );
}
