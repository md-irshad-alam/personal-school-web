"use client";

import { motion } from "framer-motion";
import styles from "./FeatureCard.module.scss";

export type FeatureCardVariant = "default" | "image" | "green" | "cta";

interface FeatureCardProps {
  variant?: FeatureCardVariant;
  icon?: string;
  title: string;
  description?: string;
  imageUrl?: string;
  bullets?: string[];
  ctaLabel?: string;
  ctaHref?: string;
}

export default function FeatureCard({
  variant = "default",
  icon,
  title,
  description,
  imageUrl,
  bullets,
  ctaLabel,
  ctaHref = "#",
}: FeatureCardProps) {
  return (
    <motion.div
      className={`${styles.card} ${styles[variant]}`}
      whileHover={{ scale: 1.025, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      {/* Icon */}
      {icon && (
        <div className={styles.iconWrapper}>
          <span className={styles.icon}>{icon}</span>
        </div>
      )}

      {/* Text content */}
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
        {bullets && (
          <ul className={styles.bullets}>
            {bullets.map((b, i) => (
              <li key={i} className={styles.bullet}>
                <span className={styles.check}>✓</span> {b}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Image (for image variant) */}
      {imageUrl && (
        <div className={styles.imageWrapper}>
          <img src={imageUrl} alt={title} className={styles.image} />
        </div>
      )}

      {/* CTA */}
      {ctaLabel && (
        <a href={ctaHref} className={styles.ctaBtn}>
          {ctaLabel}
        </a>
      )}

      {/* Decorative circle (for CTA variant) */}
      {variant === "cta" && (
        <div className={styles.decorCircle} aria-hidden="true">
          <span className={styles.crossIcon}>✦</span>
        </div>
      )}

      {/* Arrow link (for default variant) */}
      {variant === "default" && !ctaLabel && (
        <a href="#" className={styles.arrowLink}>
          Explore Curricula →
        </a>
      )}
    </motion.div>
  );
}
