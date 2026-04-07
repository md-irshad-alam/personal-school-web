"use client";

import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import styles from "./AdmissionsHero.module.scss";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  }),
};

export default function AdmissionsHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            ADMISSIONS 2024-25 OPEN
          </motion.div>

          <motion.h1
            className={styles.title}
            custom={0.1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Begin the <br />
            <span className={styles.highlight}>Journey</span> of <br />
            Discovery
          </motion.h1>

          <motion.p
            className={styles.description}
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Join a vibrant community where curiosity meets excellence. Our
            admission process is designed to be seamless and supportive for
            every family.
          </motion.p>

          <motion.div
            className={styles.btnGroup}
            custom={0.3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <button className={styles.primaryBtn}>
              Apply Online Now <span>➔</span>
            </button>
            <button className={styles.secondaryBtn}>Download Prospectus</button>
          </motion.div>
        </div>

        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <img
            src="https://picsum.photos/seed/admissions/800/800"
            alt="Students smiling happily"
            className={styles.image}
          />
          <motion.div
            className={styles.floatingBadge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <span className={styles.badgeNumber}>98%</span>
            <span className={styles.badgeText}>Satisfaction Rate</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
