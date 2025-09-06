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
          startCounters()
        }
      },
      { threshold: 0.5 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [countersStarted])

  const startCounters = (): void => {
    const ANIMATION_DURATION = 1500
    const FRAME_RATE = 30
    const totalFrames = ANIMATION_DURATION / FRAME_RATE

    const counters = document.querySelectorAll(`.${styles.statNumber}`)
    
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-count') || '0')
      const element = counter as HTMLElement
      const increment = target / totalFrames
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        
        element.textContent = formatCounterValue(Math.floor(current), target)
      }, FRAME_RATE)
    })
  }

  const formatCounterValue = (current: number, target: number): string => {
    return target === 100 ? `${current}%` : `${current}+`
  }

  const scrollToSection = (sectionId: string): void => {
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
            <div className={`${styles.brandContainer} ${isLoaded ? styles.slideInUp : ''}`}>
              <h1 className={`${styles.brand} logo-font`}>3nes</h1>
              <div className={styles.brandAccent}></div>
            </div>
            
            <h2 className={`${styles.mainTitle} ${isLoaded ? styles.slideInUp : ''} ${styles.delayShort}`}>
              Digital Transformation
              <span className={styles.titleAccent}>Agency</span>
            </h2>
            
            <p className={`${styles.description} ${isLoaded ? styles.fadeInUp : ''} ${styles.delayMedium}`}>
              We elevate your business to the pinnacle of the digital era with 
              <span className={styles.highlight}> artificial intelligence</span> technologies and 
              <span className={styles.highlight}> modern software solutions.</span>
            </p>
            
            <div className={`${styles.features} ${isLoaded ? styles.fadeInUp : ''} ${styles.delayMedium}`}>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🚀</span>
                <span>Fast Development</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🎯</span>
                <span>AI-Powered Solutions</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>💎</span>
                <span>Premium Quality</span>
              </div>
            </div>
            
            <div className={`${styles.actions} ${isLoaded ? styles.fadeInUp : ''} ${styles.delayLong}`}>
              <button 
                onClick={() => scrollToSection('contact')} 
                className={`${styles.primaryBtn}`}
              >
                <span>Start Your Project</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className={`${styles.secondaryBtn}`}
              >
                <span>Explore Services</span>
              </button>
            </div>
          </div>
          
          <div ref={statsRef} className={`${styles.statsGrid} ${isLoaded ? styles.fadeInRight : ''} ${styles.delayMedium}`}>
            <div className={`${styles.statCard} ${styles.statHover}`}>
              <div className={styles.statNumber} data-count="30">30+</div>
              <div className={styles.statLabel}>Projects</div>
            </div>
            
            <div className={`${styles.statCard} ${styles.statHover}`}>
              <div className={styles.statNumber} data-count="30">30+</div>
              <div className={styles.statLabel}>Clients</div>
            </div>
            
            <div className={`${styles.statCard} ${styles.statHover}`}>
              <div className={styles.statNumber} data-count="5">5+</div>
              <div className={styles.statLabel}>Years</div>
            </div>
            
            <div className={`${styles.statCard} ${styles.statHover}`}>
              <div className={styles.statNumber} data-count="100">100%</div>
              <div className={styles.statLabel}>Success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

