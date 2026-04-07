"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./AboutCTA.module.scss";

export default function AboutCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className={styles.section} id="apply">
      <div className={styles.container}>
        <motion.div
          className={styles.card}
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className={styles.content}>
            <h2 className={styles.title}>Ready to join our community?</h2>
            <p className={styles.subtitle}>
              Enrollment is now open for the 2024-25 academic year. Secure your child&apos;s
              future today.
            </p>
            
            <div className={styles.actions}>
              <motion.a
                href="#form"
                className={styles.btnPrimary}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Apply Now
              </motion.a>
              <motion.a
                href="#prospectus"
                className={styles.btnSecondary}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Download Prospectus
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
