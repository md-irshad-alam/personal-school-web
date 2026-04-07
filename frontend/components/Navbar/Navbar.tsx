"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Navbar.module.scss";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" as const }}
    >
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>🎓</span>
          <span className={styles.logoText}>
            CBSE <strong>Primary</strong>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.label} 
                href={link.href} 
                className={`${styles.navLink} ${isActive ? styles.active : ""}`}
              >
                {link.label}
                {isActive && <motion.div layoutId="navUnderline" className={styles.underline} />}
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className={styles.actions}>
          <Link href="#teacher" className={styles.teacherLink}>
            Teacher Portal
          </Link>
          <Link href="#admissions" className={styles.ctaBtn}>
            Student Portal
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.open : ""} />
          <span className={menuOpen ? styles.open : ""} />
          <span className={menuOpen ? styles.open : ""} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          className={styles.mobileMenu}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`${styles.mobileLink} ${isActive ? styles.active : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="#teacher" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
            Teacher Portal
          </Link>
          <Link href="/admissions" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>
            Student Portal
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
