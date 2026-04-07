"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FeatureCard from "../FeatureCard/FeatureCard";
import styles from "./FeaturesSection.module.scss";

const cards = [
  {
    variant: "default" as const,
    icon: "🎓",
    title: "Adaptive Academics",
    description:
      "Our AI-driven curriculum adapts to your child's learning pace, focusing on personalised learning pathways and critical thinking mastery.",
  },
  {
    variant: "image" as const,
    icon: "🎨",
    title: "Creative Hub",
    description:
      "Our arts programme helps your child nurture and celebrate every spark of creativity.",
    imageUrl: "https://picsum.photos/seed/feature1/600/600",
  },
  {
    variant: "green" as const,
    icon: "🏟️",
    title: "World-Class Facilities",
    description: "State-of-the-art infrastructure designed for excellence.",
    bullets: ["Next-Gen Labs", "Eco Gardens"],
  },
  {
    variant: "cta" as const,
    icon: "👨‍👩‍👧",
    title: "Parent Connect Portal",
    description:
      "Real-time updates on your child's health, attendance, and achievements.",
    ctaLabel: "Access Portal",
    ctaHref: "#portal",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className={styles.section} id="academics">
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          ref={ref}
        >
          <h2 className={styles.title}>The Digital Playground</h2>
          <p className={styles.subtitle}>
            Learning extends through an immersive curriculum that blends CBSE rigour with
            future-ready exploration.
          </p>
        </motion.div>

        {/* 2×2 Grid */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {cards.map((card) => (
            <motion.div key={card.title} variants={cardVariants}>
              <FeatureCard {...card} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
