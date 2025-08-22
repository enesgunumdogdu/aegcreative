'use client'

import { useEffect, useState, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [countersStarted, setCountersStarted] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countersStarted) {
          setCountersStarted(true)
          __startCounters()
        }
      },
      { threshold: 0.5 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [countersStarted])

  const __startCounters = () => {
    const counters = document.querySelectorAll(`.${styles.number}`)
    
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-count') || '0')
      const element = counter as HTMLElement
      const increment = target / 50
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        
        if (target === 100) {
          element.textContent = `${Math.floor(current)}%`
        } else {
          element.textContent = `${Math.floor(current)}+`
        }
      }, 30)
    })
  }

  const __scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element) return
    element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero}>
      <div className={styles.backgroundElements}>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
        <div className={styles.floatingShape3}></div>
      </div>
      <div className="container">
        <div className={styles.content}>
          <div className={`${styles.textContent} ${isLoaded ? styles.fadeInLeft : ''}`}>
            <h1 className={styles.title}>
              <span className={`${styles.brand} ${isLoaded ? styles.slideInUp : ''} logo-font`}>3nes</span>
              <span className={`${styles.subtitle} ${isLoaded ? styles.slideInUp : ''} ${styles.delayShort}`}>for Digital Transformation</span>
            </h1>
            <p className={`${styles.description} ${isLoaded ? styles.fadeInUp : ''} ${styles.delayMedium}`}>
              At 3nes, we elevate your business to the pinnacle of the digital era with 
              artificial intelligence technologies and modern software solutions.
            </p>
            <div className={`${styles.actions} ${isLoaded ? styles.fadeInUp : ''} ${styles.delayLong}`}>
              <button 
                onClick={() => __scrollToSection('contact')} 
                className={`btn ${styles.primaryBtn}`}
              >
                Start Project
              </button>
              <button 
                onClick={() => __scrollToSection('services')} 
                className={`btn btn-outline ${styles.secondaryBtn}`}
              >
                View Services
              </button>
            </div>
          </div>
          
          <div ref={statsRef} className={`${styles.stats} ${isLoaded ? styles.fadeInRight : ''} ${styles.delayMedium}`}>
            <div className={`${styles.stat} ${styles.statHover}`}>
              <span className={styles.number} data-count="30">0+</span>
              <span className={styles.label}>Completed Projects</span>
            </div>
            <div className={`${styles.stat} ${styles.statHover}`}>
              <span className={styles.number} data-count="30">0+</span>
              <span className={styles.label}>Happy Clients</span>
            </div>
            <div className={`${styles.stat} ${styles.statHover}`}>
              <span className={styles.number} data-count="5">0+</span>
              <span className={styles.label}>Years Experience</span>
            </div>
            <div className={`${styles.stat} ${styles.statHover}`}>
              <span className={styles.number} data-count="100">0%</span>
              <span className={styles.label}>Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
