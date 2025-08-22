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
            <h1>AegCreative</h1>
          </div>
          
          <nav className={`${styles.navigation} ${isMenuOpen ? styles.active : ''}`}>
            <button onClick={() => __scrollToSection('services')}>Hizmetler</button>
            <button onClick={() => __scrollToSection('about')}>Hakkımızda</button>
            <button onClick={() => __scrollToSection('contact')}>İletişim</button>
            <button onClick={() => __scrollToSection('contact')} className="btn">
              Proje Başlat
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
