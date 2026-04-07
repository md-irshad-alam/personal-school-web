"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./ContactInfo.module.scss";

export default function ContactInfo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.section} id="form">
      <div className={styles.container} ref={ref}>
        <div className={styles.grid}>
          {/* Left Column: School Details */}
          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.title}>School Details</h2>
            
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={`${styles.iconWrap} ${styles.blue}`}>📍</div>
                <div className={styles.textWrap}>
                  <h3>Our Campus</h3>
                  <p>42 Innovation Way, Academic Square<br />New Delhi, Delhi 110001</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={`${styles.iconWrap} ${styles.green}`}>✉️</div>
                <div className={styles.textWrap}>
                  <h3>Email Us</h3>
                  <p>hello@digitalplayground.edu.in<br />admissions@digitalplayground.edu.in</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={`${styles.iconWrap} ${styles.yellow}`}>🕒</div>
                <div className={styles.textWrap}>
                  <h3>Visiting Hours</h3>
                  <p>Mon - Fri: 8:00 AM to 4:00 PM<br />Sat: 9:00 AM to 1:00 PM</p>
                </div>
              </div>
            </div>

            <div className={styles.socialBlock}>
              <h3>Follow Our Journey</h3>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialBtn}>🌍</a>
                <a href="#" className={styles.socialBtn}>💬</a>
                <a href="#" className={styles.socialBtn}>🔗</a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Inquiry Form */}
          <motion.div
            className={styles.formCard}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.title}>Send an Inquiry</h2>
            <p className={styles.subtitle}>Fill out the form below and our admissions officer will reach out within 24 hours.</p>

            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.inputRow}>
                <div className={styles.inputGroup}>
                  <label>Parent's Full Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div className={styles.inputGroup}>
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+91 00000 00000" required />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" required />
              </div>

              <div className={styles.inputRow}>
                <div className={styles.inputGroup}>
                  <label>Child's Name</label>
                  <input type="text" placeholder="Alice Doe" required />
                </div>
                <div className={styles.inputGroup}>
                  <label>Interested Grade</label>
                  <select required defaultValue="nursery">
                    <option value="nursery">Nursery</option>
                    <option value="kg">Kindergarten</option>
                    <option value="1">Grade 1</option>
                  </select>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>How can we help?</label>
                <textarea placeholder="Tell us about your inquiry..." rows={4} required></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message <span>➤</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
