"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./ApplicationForm.module.scss";

export default function ApplicationForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.section} id="apply">
      <div className={styles.container} ref={ref}>
        <motion.div
          className={styles.formCard}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className={styles.header}>
            <h2 className={styles.title}>Online Application</h2>
            <span className={styles.stepIndicator}>Step 1 of 3</span>
          </div>
          
          <div className={styles.progressBar}>
            <div className={styles.progressFill}></div>
          </div>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <div className={styles.grid2}>
                <input
                  type="text"
                  placeholder="Student Full Name"
                  className={styles.input}
                  required
                />
                <select className={styles.select} required defaultValue="">
                  <option value="" disabled hidden>Applying for Grade</option>
                  <option value="nursery">Nursery</option>
                  <option value="kg">Kindergarten</option>
                  <option value="1">Grade 1</option>
                  <option value="2">Grade 2</option>
                  <option value="3">Grade 3</option>
                </select>
              </div>

              <input
                type="email"
                placeholder="Parent Email Address"
                className={styles.input}
                required
              />

              <div className={styles.grid2}>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className={styles.input}
                  required
                />
                <div className={styles.dateInputWrapper}>
                  <input
                    type="date"
                    className={`${styles.input} ${styles.dateInput}`}
                    required
                  />
                  {/* Note: The design shows a specific placeholder format and an icon. We use native date picker but style it */}
                </div>
              </div>
            </div>

            <div className={styles.footerRow}>
              <p className={styles.terms}>
                By submitting, you agree to our admission policy and privacy terms.
              </p>
              <button type="submit" className={styles.submitBtn}>
                Save & Continue
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
