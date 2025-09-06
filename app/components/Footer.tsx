'use client'

import styles from './Footer.module.css'

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element) return
    element.scrollIntoView({ behavior: 'smooth' })
  }



  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={`${styles.logo} logo-font`}>3nes</h3>
            <p className={styles.description}>
              Digital agency providing AI-powered software solutions. 
              Bringing the technologies of the future to life today.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4>Company</h4>
            <ul>
              <li>
                <button onClick={() => scrollToSection('about')}>
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')}>
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')}>
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

        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2025 3nes. All rights reserved.</p>
          <p className={styles.madeWith}>
            Made with 💜 by{' '}
            <a 
              href="https://www.enesgunumdogdu.com.tr" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Enes Günümdoğdu
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
