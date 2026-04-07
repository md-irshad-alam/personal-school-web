"use client";

import { motion, Variants } from "framer-motion";
import styles from "./AcademicsHero.module.scss";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const, delay },
  }),
};

export default function AcademicsHero() {
  return (
    <section className={styles.hero}>
      {/* Background soft styling */}
      <div className={styles.bgGradient} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Badge */}
          <motion.div
            className={styles.badge}
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
          >
            WORLD-CLASS CURRICULUM
          </motion.div>

          {/* Heading */}
          <motion.h1
            className={styles.heading}
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
          >
            Nurturing Minds <br />
            for a <span className={styles.primaryText}>Digital</span><br />
            <span className={styles.primaryText}>Future</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className={styles.subtext}
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
          >
            Our CBSE Primary curriculum blends academic rigor with
            creative discovery, designed to ignite curiosity and foster
            lifelong learning.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className={styles.ctaGroup}
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
          >
            <a href="#prospectus" className={styles.btnPrimary}>
              Download Prospectus <span className={styles.downloadIcon}>↓</span>
            </a>
          </motion.div>
        </div>

        {/* Right side Image Layout */}
        <motion.div
          className={styles.imageSection}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
        >
          <div className={styles.imageWrapper}>
            <img 
              src="https://picsum.photos/seed/abouthero2/800/800" 
              alt="Students smiling together in a classroom"
              className={styles.image}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
