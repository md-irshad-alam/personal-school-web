"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import styles from "./Infrastructure.module.scss";

export default function Infrastructure() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section className={styles.section} id="infrastructure">
      <div className={styles.container} ref={ref}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.headerText}>
            <h2 className={styles.title}>World-Class Infrastructure</h2>
            <p className={styles.subtitle}>
              Experience a campus designed for the modern learner, where physical and digital spaces merge seamlessly.
            </p>
          </div>
          <a href="#tour" className={styles.btnSecondary}>
            Take Virtual Tour
          </a>
        </motion.div>

        {/* CSS Grid layout for images */}
        <motion.div
          className={styles.bentoGrid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className={styles.gridItemLarge} variants={itemVariants}>
            <img 
              src="https://picsum.photos/seed/science/800/800" 
              alt="Modern university library with wood ceiling" 
              className={styles.image}
            />
          </motion.div>
          
          <div className={styles.rightColumn}>
            <div className={styles.topRow}>
              <motion.div className={styles.gridItemSmall} variants={itemVariants}>
                <img 
                  src="https://picsum.photos/seed/playground2/500/500" 
                  alt="Playground" 
                  className={styles.image}
                />
              </motion.div>
              <motion.div className={styles.gridItemSmall} variants={itemVariants}>
                <img 
                  src="https://picsum.photos/seed/art2/500/500" 
                  alt="Indoor basketball court" 
                  className={styles.image}
                />
              </motion.div>
            </div>
            
            <motion.div className={styles.gridItemTall} variants={itemVariants}>
              <img 
                src="https://picsum.photos/seed/tech/500/500" 
                alt="Students in science lab" 
                className={styles.image}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
