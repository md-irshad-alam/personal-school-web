"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Philosophy.module.scss";

export default function Philosophy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className={styles.section} id="philosophy">
      <div className={styles.container} ref={ref}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.title}>The <span className={styles.titleBold}>Digital Playground</span> Philosophy</h2>
          <p className={styles.subtitle}>
            Our core values align with the global CBSE vision for inclusive learning.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Card 1: Vision */}
          <motion.div className={styles.cardLight} variants={cardVariants} whileHover={{ y: -4 }}>
            <div className={styles.iconWrapperBlue}>
              <span className={styles.icon}>👁️</span>
            </div>
            <h3 className={styles.cardTitle}>Our Vision</h3>
            <p className={styles.cardText}>
              To be a global leader in foundational education by fostering an environment where every child feels empowered to explore, create, and lead. We envision a future where learning is not just a destination, but a lifelong journey of wonder and discovery.
            </p>
            <a href="#vision" className={styles.visionLink}>
              Read the Vision Statement 2024 →
            </a>
          </motion.div>

          {/* Card 2: Mission */}
          <motion.div className={styles.cardSolid} variants={cardVariants} whileHover={{ y: -4 }}>
            <div className={styles.iconWrapperWhite}>
              <span className={styles.icon}>🚀</span>
            </div>
            <h3 className={styles.cardTitleSolid}>Our Mission</h3>
            <p className={styles.cardTextSolid}>
              Providing a holistic CBSE curriculum that nurtures intellect, a growth mindset, emotional intelligence, and digital fluency.
            </p>
            <ul className={styles.bullets}>
              <li><span className={styles.bulletDot} /> Cognitive development through play</li>
              <li><span className={styles.bulletDot} /> Values-base foundation</li>
              <li><span className={styles.bulletDot} /> Technology-integrated classrooms</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
