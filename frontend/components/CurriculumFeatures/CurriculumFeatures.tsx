"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import styles from "./CurriculumFeatures.module.scss";

const features = [
  {
    title: "Smart Classes",
    desc: "Interactive boards and digital visuals make complex concepts simple and engaging for young learners.",
    icon: "💻",
    colorTheme: "blue",
  },
  {
    title: "Activity Based",
    desc: "Hands-on learning through experiments, role-play, and creative projects that build practical skills.",
    icon: "🎨",
    colorTheme: "green",
  },
  {
    title: "Holistic Growth",
    desc: "Fostering emotional intelligence and social skills alongside academic excellence for all-round development.",
    icon: "🌻",
    colorTheme: "yellow",
  },
];

export default function CurriculumFeatures() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className={styles.section} id="features">
      <div className={styles.container} ref={ref}>
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, idx) => (
            <motion.div key={idx} className={styles.card} variants={cardVariants} whileHover={{ y: -5 }}>
              <div className={`${styles.iconWrapper} ${styles[feature.colorTheme]}`}>
                <span className={styles.icon}>{feature.icon}</span>
              </div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.desc}>{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
