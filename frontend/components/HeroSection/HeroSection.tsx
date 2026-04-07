"use client";

import { motion } from "framer-motion";
import styles from "./HeroSection.module.scss";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const, delay },
  }),
};

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Background blobs */}
      <div className={styles.blobBlue} aria-hidden="true" />
      <div className={styles.blobGreen} aria-hidden="true" />
      <div className={styles.blobPurple} aria-hidden="true" />

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
            <span className={styles.badgeDot} />
            Empowering Futures
          </motion.div>

          {/* Heading */}
          <motion.h1
            className={styles.heading}
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
          >
            Where{" "}
            <span className={styles.gradientText}>Wonder</span>
            <br />
            Meets{" "}
            <span className={styles.gradientText}>Wisdom</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className={styles.subtext}
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
          >
            A futuristic primary education journey designed for the next
            generation of global innovators, explorers, and thinkers.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className={styles.ctaGroup}
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
          >
            <a href="#admissions" className={styles.btnPrimary}>
              Admissions Open 2024
            </a>
            <a href="#gallery" className={styles.btnSecondary}>
              <span className={styles.playIcon}>▶</span>
              Take a Virtual Tour
            </a>
          </motion.div>
        </div>

        {/* Illustration (decorative) */}
        <motion.div
          className={styles.illustration}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" as const }}
          aria-hidden="true"
        >
          <div className={styles.floatCard}>
            <span className={styles.floatIcon}>📚</span>
            <div>
              <p className={styles.floatTitle}>100+ Courses</p>
              <p className={styles.floatSub}>Curriculum-aligned</p>
            </div>
          </div>
          <div className={styles.circle} />
          <div className={styles.floatCardBottom}>
            <span className={styles.floatIcon}>🏆</span>
            <div>
              <p className={styles.floatTitle}>Award-Winning</p>
              <p className={styles.floatSub}>Top CBSE School</p>
            </div>
          </div>
          {/* Floating bolt */}
          <div className={styles.boltBadge}>⚡</div>
        </motion.div>
      </div>
    </section>
  );
}
