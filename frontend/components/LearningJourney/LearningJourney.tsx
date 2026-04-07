"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import styles from "./LearningJourney.module.scss";

const journeys = [
  {
    theme: "blue",
    eyebrow: "FOUNDATION STAGE",
    icon: "☺",
    title: "Nursery to KG",
    features: [
      "Phonetic awareness",
      "Motor skill development",
      "Numbers through play",
      "Social interaction & storytelling",
    ],
  },
  {
    theme: "green",
    eyebrow: "EARLY PRIMARY",
    icon: "📚",
    title: "Grade 1 & 2",
    features: [
      "Bilingual proficiency",
      "Mental mathematics",
      "Environmental Studies",
      "Creative coding introduction",
    ],
  },
  {
    theme: "yellow",
    eyebrow: "UPPER PRIMARY",
    icon: "🚀",
    title: "Grade 3 to 5",
    features: [
      "Analytical science labs",
      "Advanced problem solving",
      "Digital literacy & AI",
      "Cultural heritage & Civics",
    ],
  },
];

export default function LearningJourney() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className={styles.section} id="journey">
      <div className={styles.container} ref={ref}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.title}>Class-wise Learning Journey</h2>
          <p className={styles.subtitle}>
            A structured path from play-based foundations to advanced primary concepts, aligned
            with national CBSE standards.
          </p>
        </motion.div>

        {/* Journey Grid */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {journeys.map((j, idx) => (
            <motion.div key={idx} className={`${styles.card} ${styles[j.theme]}`} variants={cardVariants}>
              <div className={styles.cardHeader}>
                <span className={styles.eyebrow}>{j.eyebrow}</span>
                <span className={styles.topIcon}>{j.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{j.title}</h3>
              <ul className={styles.featureList}>
                {j.features.map((feat, fIdx) => (
                  <li key={fIdx}>
                    <span className={styles.checkIcon}>✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
              <button className={styles.btnSecondary}>View Details</button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
