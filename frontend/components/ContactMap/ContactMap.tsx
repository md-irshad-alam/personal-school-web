"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import styles from "./ContactMap.module.scss";

const MapClient = dynamic(() => import("./MapClient"), { ssr: false });

export default function ContactMap() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.section} id="map">
      <div className={styles.container} ref={ref}>
        {/* The map background is purely illustrative in the design, using a placeholder styling. */}
        <div className={styles.mapVisual}>
          <MapClient />
          
          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.2 }}
          >
            <h2 className={styles.title}>Our Location</h2>
            <p className={styles.subtitle}>
              Centrally located in the heart of Innovation Way. Easy access 
              via public transport and private parking available.
            </p>
            <a href="#" className={styles.mapLink}>
              Open in Google Maps <span>↗</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
