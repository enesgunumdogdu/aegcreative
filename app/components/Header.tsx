'use client'

import { useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const __toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const __scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element) return
    
    element.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.nav}>
          <div className={styles.logo}>
            <h1>3nes</h1>
          </div>
          
          <nav className={`${styles.navigation} ${isMenuOpen ? styles.active : ''}`}>
            <button onClick={() => __scrollToSection('services')}>Services</button>
            <button onClick={() => __scrollToSection('about')}>About</button>
            <button onClick={() => __scrollToSection('contact')}>Contact</button>
            <button onClick={() => __scrollToSection('contact')} className="btn">
              Start Project
            </button>
          </nav>

          <button 
            className={styles.menuToggle}
            onClick={__toggleMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
