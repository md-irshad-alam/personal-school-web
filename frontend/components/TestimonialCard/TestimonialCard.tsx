"use client";

import { motion } from "framer-motion";
import styles from "./TestimonialCard.module.scss";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatarInitials: string;
  highlighted?: boolean;
  rating?: number;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  avatarInitials,
  highlighted = false,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <motion.div
      className={`${styles.card} ${highlighted ? styles.highlighted : ""}`}
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    >
      {/* Stars */}
      <div className={styles.stars}>
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className={styles.star}>★</span>
        ))}
      </div>

      {/* Quote */}
      <p className={styles.quote}>&ldquo;{quote}&rdquo;</p>

      {/* Author */}
      <div className={styles.author}>
        <div className={styles.avatar}>{avatarInitials}</div>
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.role}>{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
