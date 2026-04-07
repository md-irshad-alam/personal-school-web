"use client";

import { motion } from "framer-motion";
import styles from "./AboutHero.module.scss";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const, delay },
  }),
};

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      {/* Background blobs */}
      <div className={styles.blobBlue} aria-hidden="true" />
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
            CBSE EXCELLENCE
          </motion.div>

          {/* Heading */}
          <motion.h1
            className={styles.heading}
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
          >
            Nurturing the <span className={styles.primaryText}>Next<br />Generation</span> of Innovators.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className={styles.subtext}
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
          >
            At CBSE Primary, we blend the rigorous academic standards of the
            CBSE curriculum with a futuristic, student-centered approach to
            holistic learning.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className={styles.ctaGroup}
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
          >
            <a href="#learn-more" className={styles.btnPrimary}>
              Learn More
            </a>
            <a href="#campus" className={styles.btnSecondary}>
              View Campus
            </a>
          </motion.div>
        </div>

        {/* Right side Image with Float Card */}
        <motion.div
          className={styles.imageSection}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
        >
          <div className={styles.imageWrapper}>
            <img 
              src="https://picsum.photos/seed/abouthero/800/800" 
              alt="Students learning together in a classroom"
              className={styles.image}
            />
          </div>
          
          <div className={styles.floatCard}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>🏆</span>
            </div>
            <div>
              <p className={styles.floatTitle}>Top-Rated School</p>
              <p className={styles.floatSub}>Ranked #1 in Integrated Education</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
