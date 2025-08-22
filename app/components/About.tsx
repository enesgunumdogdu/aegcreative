import styles from './About.module.css'

export default function About() {
  const stats = [
    { year: '2020', label: 'Founded' },
    { number: '30+', label: 'Completed Projects' },
    { number: '30+', label: 'Happy Clients' },
    { number: '10+', label: 'Tech Experts' }
  ]

  const technologies = [
    'React', 'Next.js', 'Node.js', 'Python', 'TypeScript',
    'TensorFlow', 'PyTorch', 'AWS', 'Docker', 'Kubernetes',
    'MongoDB', 'PostgreSQL'
  ]

  const values = [
    {
      title: 'Quality',
      description: 'Excellence standard in every project',
      icon: '⭐'
    },
    {
      title: 'Innovation',
      description: 'Continuous learning and development',
      icon: '🚀'
    }
  ]

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        
        <div className={styles.aboutContent}>
          <div className={styles.textContent}>
            <p className={styles.description}>
              As 3nes, we are a digital agency specialized in artificial intelligence and modern software 
              technologies since 2020.
            </p>
            <p className={styles.description}>
              Our mission is to be the most reliable partner for businesses in their digital transformation journey. 
              With our deep expertise in artificial intelligence, machine learning, and cloud technologies, 
              we help our clients gain competitive advantage.
            </p>
            <p className={styles.description}>
              By prioritizing quality, innovation, and customer satisfaction in every project, 
              we bring the technologies of the future to life today.
            </p>
          </div>
          
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <span className={styles.statNumber}>{stat.year || stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.visionSection}>
          <h3 className={styles.visionTitle}>Our Vision</h3>
          <p className={styles.visionText}>
            As Turkey's most innovative technology company, we create social and economic value with 
            artificial intelligence and digital solutions. Leading sustainable technology projects 
            that can compete on a global scale.
          </p>
        </div>

        <div className={styles.techStack}>
          <h3 className={styles.techTitle}>Our Tech Stack</h3>
          <div className={styles.techGrid}>
            {technologies.map((tech, index) => (
              <span key={index} className={styles.techBadge}>{tech}</span>
            ))}
          </div>
        </div>

        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.valueIcon}>{value.icon}</div>
              <h4 className={styles.valueTitle}>{value.title}</h4>
              <p className={styles.valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
