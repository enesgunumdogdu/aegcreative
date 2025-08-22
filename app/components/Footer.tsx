'use client'

import styles from './Footer.module.css'

export default function Footer() {
  const __scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element) return
    element.scrollIntoView({ behavior: 'smooth' })
  }



  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.logo}>3nes</h3>
            <p className={styles.description}>
              Digital agency providing AI-powered software solutions. 
              Bringing the technologies of the future to life today.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4>Company</h4>
            <ul>
              <li>
                <button onClick={() => __scrollToSection('about')}>
                  About
                </button>
              </li>
              <li>
                <button onClick={() => __scrollToSection('services')}>
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => __scrollToSection('contact')}>
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Services</h4>
            <ul>
              <li>AI Solutions</li>
              <li>Web Development</li>
              <li>Mobile Apps</li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Legal</h4>
            <ul>
              <li>Support</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2025 3nes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
