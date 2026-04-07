"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./GalleryHeader.module.scss";

const filters = ["All Moments", "Academic", "Sports", "Art", "Events"];

export default function GalleryHeader() {
  const [activeFilter, setActiveFilter] = useState("All Moments");

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Visual <span className={styles.highlight}>Memories</span>
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A window into our vibrant learning ecosystem. Discover the joy, discovery, and growth of our students across every corner of the campus.
        </motion.p>

        <motion.div
          className={styles.filters}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              className={`${styles.filterChip} ${activeFilter === filter ? styles.active : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
