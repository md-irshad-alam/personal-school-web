"use client";

import { motion } from "framer-motion";
import styles from "./ContactHero.module.scss";

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            CONNECT WITH US
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let's start your <br />
            child's <span className={styles.highlight}>brightest</span> <br />
            chapter.
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have questions about admissions, curriculum, or our campus? Our
            team is here to guide you through every step of your journey into the
            Digital Playground.
          </motion.p>

          <motion.div
            className={styles.btnGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button className={styles.primaryBtn}>
              📞 Call Now
            </button>
            <button className={styles.whatsappBtn}>
              💬 WhatsApp
            </button>
          </motion.div>
        </div>

        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.1 }}
        >
          <img
            src="https://picsum.photos/seed/contacthero/800/800"
            alt="School reception hall"
            className={styles.image}
          />
          <motion.div
            className={styles.floatingQuote}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            "A community where <br />
            curiosity meets modern <br />
            learning technology."
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
