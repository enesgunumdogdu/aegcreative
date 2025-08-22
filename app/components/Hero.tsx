'use client'

import styles from './Hero.module.css'

export default function Hero() {
  const __scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element) return
    element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              <span className={styles.brand}>3nes</span>
              <span className={styles.subtitle}>for Digital Transformation</span>
            </h1>
            <p className={styles.description}>
              At 3nes, we elevate your business to the pinnacle of the digital era with 
              artificial intelligence technologies and modern software solutions.
            </p>
            <div className={styles.actions}>
              <button 
                onClick={() => __scrollToSection('contact')} 
                className="btn"
              >
                Start Project
              </button>
              <button 
                onClick={() => __scrollToSection('services')} 
                className="btn btn-outline"
              >
                View Services
              </button>
            </div>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.number}>30+</span>
              <span className={styles.label}>Completed Projects</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.number}>30+</span>
              <span className={styles.label}>Happy Clients</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.number}>4+</span>
              <span className={styles.label}>Years Experience</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.number}>100%</span>
              <span className={styles.label}>Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
