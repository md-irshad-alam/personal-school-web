"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import styles from "./GalleryGrid.module.scss";

// Reusing Unsplash images for the placeholder gallery
const images = [
  {
    id: 1,
    src: "https://picsum.photos/seed/students/800/800",
    alt: "Students studying",
    area: "largeLeft", // Top left, very large square
  },
  {
    id: 2,
    src: "https://picsum.photos/seed/playground/600/800",
    alt: "Playground",
    area: "tallCenter", // Middle tall
  },
  {
    id: 3,
    src: "https://picsum.photos/seed/art/600/600",
    alt: "Art class",
    area: "squareTopRight", // Top right
  },
  {
    id: 4,
    src: "https://picsum.photos/seed/events/600/600",
    alt: "Events",
    area: "squareMidRight", // Middle right
  },
  {
    id: 5,
    src: "https://picsum.photos/seed/library/800/400",
    alt: "Library",
    area: "wideBottomLeft", // Bottom left wide
  },
  {
    id: 6,
    src: "https://picsum.photos/seed/scilab/600/600",
    alt: "Science lab binoculars",
    area: "wideBottomRight", // Bottom center-right
  },
];

export default function GalleryGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section className={styles.section}>
      <div className={styles.container} ref={ref}>
        <motion.div
          className={styles.grid}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          style={{ marginBottom: "var(--space-4xl)" }}
        >
          {images.map((img) => (
            <motion.div
              key={img.id}
              className={`${styles.imageWrapper} ${styles[img.area]}`}
              variants={itemVariants}
            >
              <img src={img.src} alt={img.alt} className={styles.image} loading="lazy" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
