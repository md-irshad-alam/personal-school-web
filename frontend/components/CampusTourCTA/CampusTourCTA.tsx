"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./CampusTourCTA.module.scss";

export default function CampusTourCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className={styles.section}>
      <div className={styles.container} ref={ref}>
        <motion.div
          className={styles.ctaBox}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Want to see more of our campus?
          </motion.h2>
          
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Schedule a guided tour to experience the Digital Playground CBSE Primary School environment in person.
          </motion.p>
          
          <motion.button
            className={styles.btn}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Campus Tour
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
