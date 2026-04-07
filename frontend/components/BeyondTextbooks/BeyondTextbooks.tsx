"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import styles from "./BeyondTextbooks.module.scss";

const points = [
  {
    title: "Curriculum Excellence",
    desc: "Aligned with NEP 2020 and CBSE framework, ensuring competitive readiness from the start.",
    icon: "📖",
    theme: "blue",
  },
  {
    title: "Individualized Attention",
    desc: "Low teacher-student ratio to ensure every child's unique learning pace is respected.",
    icon: "👥",
    theme: "green",
  },
  {
    title: "Future Skills Lab",
    desc: "Robotics and STEAM integration starting from Grade 1 to prepare for the 21st century.",
    icon: "🔬",
    theme: "yellow",
  },
];

export default function BeyondTextbooks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section className={styles.section} id="beyond">
      <div className={styles.container} ref={ref}>
        {/* Left Side Images Box Content Layout */}
        <motion.div
          className={styles.imagesLayout}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.imageBoxMain}>
            <img 
              src="https://picsum.photos/seed/beyond1/500/500" 
              alt="Classroom reading"
              className={styles.image}
            />
          </div>
          <div className={styles.imageBoxSub}>
            <img 
              src="https://picsum.photos/seed/beyond2/400/400" 
              alt="Art and Craft"
              className={styles.image}
            />
          </div>
        </motion.div>

        {/* Right Side Content Block */}
        <div className={styles.contentLayout}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Beyond the Textbooks
          </motion.h2>

          <motion.div
            className={styles.pointsList}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {points.map((pt, idx) => (
              <motion.div key={idx} className={styles.pointItem} variants={fadeUp}>
                <div className={`${styles.iconWrap} ${styles[pt.theme]}`}>
                  <span className={styles.icon}>{pt.icon}</span>
                </div>
                <div className={styles.pointText}>
                  <h3>{pt.title}</h3>
                  <p>{pt.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
