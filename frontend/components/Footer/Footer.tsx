"use client";

import Link from "next/link";
import styles from "./Footer.module.scss";

const experienceLinks = ["About Us", "Academics", "Admissions", "Gallery", "Faculty"];
const resourceLinks = ["Student Website", "Notice Board", "Contact", "Sitemap"];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Col */}
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <span className={styles.logoText}>CBSE Primary</span>
            </div>
            <p className={styles.tagline}>
              Empowering the next generation of innovators, thinkers, and leaders through futuristic education.
            </p>
            <div className={styles.socialRow}>
              <a href="#" className={styles.socialIcon} aria-label="Website">🌍</a>
              <a href="#" className={styles.socialIcon} aria-label="Share">🔗</a>
              <a href="#" className={styles.socialIcon} aria-label="Email">✉️</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li><Link href="/admissions">Admissions</Link></li>
              <li><Link href="#">School Calendar</Link></li>
              <li><Link href="/academics">Curriculum</Link></li>
              <li><Link href="#">Faculty</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Support</h4>
            <ul className={styles.linkList}>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms of Service</Link></li>
              <li><Link href="#">Campus Map</Link></li>
              <li><Link href="#">Careers</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className={styles.newsletterCol}>
            <h4 className={styles.colTitle}>Newsletter</h4>
            <p className={styles.tagline}>Stay updated with campus news.</p>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email address" className={styles.input} required />
              <button type="submit" className={styles.submitBtn} aria-label="Subscribe">
                ➢
              </button>
            </form>
            <p className={styles.copyright}>
              © 2024 Digital Playground CBSE. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
