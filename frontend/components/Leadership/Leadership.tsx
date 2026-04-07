"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Leadership.module.scss";

export default function Leadership() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section className={styles.section} id="leadership">
      <div className={styles.container} ref={ref}>
        {/* Left Side: Image */}
        <motion.div
          className={styles.imageSection}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.imageWrapper}>
            <img 
              src="https://picsum.photos/seed/principal/600/600" 
              alt="Dr. Sarah Thompson, Principal" 
              className={styles.image}
            />
          </div>
          <div className={styles.badge}>
            <strong>25+ Years</strong>
            <span>EXPERIENCE</span>
          </div>
        </motion.div>

        {/* Right Side: Text */}
        <motion.div
          className={styles.contentSection}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div className={styles.eyebrow} variants={fadeUp}>
            LEADERSHIP MESSAGE
          </motion.div>
          
          <motion.h2 className={styles.title} variants={fadeUp}>
            &quot;Every child is a universe of potential waiting to be explored.&quot;
          </motion.h2>
          
          <motion.p className={styles.text} variants={fadeUp}>
            Welcome to CBSE Primary, a space where we treat each student&apos;s curiosity as a
            sacred fire. In our digital-first age, we remain committed to the fundamentals of
            discovery and the warmth of human connection.
          </motion.p>
          
          <motion.p className={styles.text} variants={fadeUp}>
            Our curriculum is designed not just to meet CBSE standards, but to exceed them
            by integrating arts, soft skills, and environmental consciousness into the daily
            rhythms of school life.
          </motion.p>

          <motion.div className={styles.signatureBlock} variants={fadeUp}>
            <div className={styles.authorInfo}>
              <strong>Dr. Sarah Thompson</strong>
              <span>Principal & Academic Director</span>
            </div>
            {/* Using a custom font approach for signature */}
            <div className={styles.signatureText}>
              Sarah Thompson
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
