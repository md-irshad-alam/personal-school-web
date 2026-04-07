"use client";

import { motion } from "framer-motion";

export default function WorkInProgress({ pageName }: { pageName: string }) {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🚧</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#0f172a" }}>
          {pageName} Page
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#64748b", marginTop: "0.5rem" }}>
          Work in progress. This screen is currently under construction.
        </p>
      </motion.div>
    </div>
  );
}
