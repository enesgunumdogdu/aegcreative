'use client'

import { useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId)
    if (!element) return
    
    element.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.nav}>
          <div className={styles.logo}>
            <h1 className="logo-font" onClick={scrollToTop}>3nes</h1>
          </div>
          
          <nav className={`${styles.navigation} ${isMenuOpen ? styles.active : ''}`}>
            <button onClick={() => scrollToSection('services')}>Services</button>
            <button onClick={() => scrollToSection('about')}>About</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
            <button onClick={() => scrollToSection('contact')} className="btn">
              Start Project
            </button>
          </nav>

          <button 
            className={styles.menuToggle}
            onClick={toggleMenu}
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
