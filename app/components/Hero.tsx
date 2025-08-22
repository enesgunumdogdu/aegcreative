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
              <span className={styles.brand}>Aeg Creative</span>
              <span className={styles.subtitle}>Dijital Dönüşüm için</span>
            </h1>
            <p className={styles.description}>
              AegCreative'de, yapay zeka teknolojileri ve modern yazılım çözümleri ile 
              işinizi dijital çağın zirvesine taşıyoruz.
            </p>
            <div className={styles.actions}>
              <button 
                onClick={() => __scrollToSection('contact')} 
                className="btn"
              >
                Proje Başlat
              </button>
              <button 
                onClick={() => __scrollToSection('services')} 
                className="btn btn-outline"
              >
                Hizmetleri Görüntüle
              </button>
            </div>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.number}>50+</span>
              <span className={styles.label}>Tamamlanan Proje</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.number}>25+</span>
              <span className={styles.label}>Mutlu Müşteri</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.number}>5+</span>
              <span className={styles.label}>Yıl Deneyim</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.number}>100%</span>
              <span className={styles.label}>Müşteri Memnuniyeti</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
