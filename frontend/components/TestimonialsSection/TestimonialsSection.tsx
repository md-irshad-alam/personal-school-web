"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import styles from "./TestimonialsSection.module.scss";

const testimonials = [
  {
    quote:
      "The adaptive learning model at CBSE Primary has completely transformed how my daughter approaches challenges. She's flourished beyond what I thought possible.",
    name: "Sarah Jenkins",
    role: "Parent of Grade 5 Student",
    avatarInitials: "SJ",
    highlighted: false,
    rating: 5,
  },
  {
    quote:
      "Digital Playground isn't just a slogan — the balanced holistic development is exactly what's needed for the 21st century. My son is thriving here.",
    name: "Daniel Chen",
    role: "Parent of Grade 3 Student",
    avatarInitials: "DC",
    highlighted: true,
    rating: 5,
  },
  {
    quote:
      "The parent portal keeps me informed every step of the way. I've never felt so connected to my child's education journey and their progress.",
    name: "Anita Rao",
    role: "Parent of Class 4 Student",
    avatarInitials: "AR",
    highlighted: false,
    rating: 5,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className={styles.section}>
      <div className={styles.container} ref={ref}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <h2 className={styles.title}>Voices from our Community</h2>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={cardVariants}>
              <TestimonialCard {...t} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
