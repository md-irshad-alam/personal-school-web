"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import styles from "./AdmissionProcess.module.scss";

const steps = [
  {
    icon: "📝",
    title: "Online Inquiry",
    desc: "Fill out the basic details to register your interest.",
    active: true,
  },
  {
    icon: "📅",
    title: "Campus Visit",
    desc: "Tour our futuristic facilities and meet the educators.",
    active: true,
  },
  {
    icon: "☑️",
    title: "Interaction",
    desc: "A gentle diagnostic session for the student.",
    active: false,
  },
  {
    icon: "☑️",
    title: "Enrollment",
    desc: "Submit documents and complete formalities.",
    active: false,
  },
];

export default function AdmissionProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className={styles.section}>
      <div className={styles.container} ref={ref}>
        <div className={styles.header}>
          <h2>The Admission Process</h2>
          <p>Four simple steps to secure your child's future</p>
        </div>

        <motion.div
          className={styles.stepperContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Connecting Line */}
          <motion.div
            className={styles.line}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          />

          {/* Steps */}
          {steps.map((step, idx) => (
            <motion.div key={idx} className={styles.step} variants={itemVariants}>
              <div className={styles.iconBoxOuter}>
                <div className={`${styles.iconBoxInner} ${!step.active ? styles.inactive : ""}`}>
                  {step.icon}
                </div>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
