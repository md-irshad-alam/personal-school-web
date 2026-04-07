"use client";

import { useState, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import styles from "./FeeStructure.module.scss";

// Dummy data for plans
const plans = [
  {
    tag: "FOUNDATION",
    title: "Pre-Primary",
    annualFee: "₹45,000",
    quarterlyFee: "₹12,000",
    features: [
      "Montessori Equipment",
      "Mid-day Nutrition Plan",
      "Soft Skill Development",
    ],
    popular: false,
    buttonVariant: "outline",
    btnText: "Select Plan",
  },
  {
    tag: "PRIMARY",
    title: "Grades 1-5",
    annualFee: "₹68,000",
    quarterlyFee: "₹18,000",
    features: [
      "Robotics Lab Access",
      "Smart Classroom Kit",
      "Quarterly Field Trips",
      "Foreign Language Choice",
    ],
    popular: true,
    buttonVariant: "solid",
    btnText: "Apply Now",
  },
  {
    tag: "UPPER PRIMARY",
    title: "Grades 6-8",
    annualFee: "₹82,000",
    quarterlyFee: "₹22,000",
    features: [
      "Advanced IT Workshops",
      "Career Counseling",
      "Competitive Exam Prep",
    ],
    popular: false,
    buttonVariant: "outline",
    btnText: "Select Plan",
  },
];

export default function FeeStructure() {
  const [isAnnual, setIsAnnual] = useState(true);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px" });

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section className={styles.section} id="fees">
      <div className={styles.container} ref={ref}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            <h2>Investment in Future</h2>
            <p>
              Transparent fee structure for the academic year 2024-25. No hidden costs, purely educational value.
            </p>
          </div>
          
          <div className={styles.toggleWrapper}>
            <div className={styles.toggleBg}>
              <button
                className={`${styles.toggleBtn} ${isAnnual ? styles.active : ""}`}
                onClick={() => setIsAnnual(true)}
              >
                Annual Plan
              </button>
              <button
                className={`${styles.toggleBtn} ${!isAnnual ? styles.active : ""}`}
                onClick={() => setIsAnnual(false)}
              >
                Quarterly Plan
              </button>
            </div>
          </div>
        </div>

        <motion.div
          className={styles.cardsGrid}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx} 
              className={`${styles.card} ${plan.popular ? styles.popularCard : ""}`}
              variants={cardVariants}
            >
              {plan.popular && <div className={styles.popularBadge}>MOST POPULAR</div>}
              
              <div className={styles.cardHeader}>
                <span className={styles.tag}>{plan.tag}</span>
                <h3 className={styles.title}>{plan.title}</h3>
                <div className={styles.priceWrap}>
                  <span className={styles.price}>{isAnnual ? plan.annualFee : plan.quarterlyFee}</span>
                  <span className={styles.period}>{isAnnual ? "/year" : "/quarter"}</span>
                </div>
              </div>

              <div className={styles.features}>
                {plan.features.map((feat, fidx) => (
                  <div key={fidx} className={styles.featureItem}>
                    <span className={styles.checkIcon}>✔</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <button className={`${styles.ctaBtn} ${styles[plan.buttonVariant]}`}>
                {plan.btnText}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
