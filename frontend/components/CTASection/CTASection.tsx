"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./CTASection.module.scss";

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className={styles.section} id="admissions">
      <div className={styles.container}>
        <motion.div
          className={styles.card}
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Decorative blob */}
          <div className={styles.blob} aria-hidden="true" />

          <div className={styles.content}>
            <div className={styles.text}>
              <h2 className={styles.title}>Ready to start the journey?</h2>
              <p className={styles.subtitle}>
                Limited seats available for the 2024 Academic Session. Secure your child&apos;s
                future today.
              </p>
            </div>

            <div className={styles.actions}>
              <motion.a
                href="#apply"
                className={styles.btnPrimary}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                Apply Now
              </motion.a>
              <motion.a
                href="#inquiry"
                className={styles.btnSecondary}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                Inquiry Form
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
