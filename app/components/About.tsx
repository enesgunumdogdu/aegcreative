import styles from './About.module.css'

export default function About() {
  const stats = [
    { year: '2019', label: 'Kuruldu' },
    { number: '50+', label: 'Tamamlanan Proje' },
    { number: '25+', label: 'Mutlu Müşteri' },
    { number: '10+', label: 'Teknoloji Uzmanı' }
  ]

  const technologies = [
    'React', 'Next.js', 'Node.js', 'Python', 'TypeScript',
    'TensorFlow', 'PyTorch', 'AWS', 'Docker', 'Kubernetes',
    'MongoDB', 'PostgreSQL'
  ]

  const values = [
    {
      title: 'Kalite',
      description: 'Her projede mükemmellik standardı',
      icon: '⭐'
    },
    {
      title: 'İnovasyon',
      description: 'Sürekli öğrenme ve gelişim',
      icon: '🚀'
    }
  ]

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">Hakkımızda</h2>
        
        <div className={styles.aboutContent}>
          <div className={styles.textContent}>
            <p className={styles.description}>
              AegCreative olarak, 2019 yılından bu yana yapay zeka ve modern yazılım 
              teknolojileri konusunda uzmanlaşmış bir dijital ajansız.
            </p>
            <p className={styles.description}>
              Misyonumuz, işletmelerin dijital dönüşüm yolculuğunda en güvenilir 
              ortağı olmaktır. Yapay zeka, makine öğrenmesi ve bulut teknolojileri 
              konusundaki derin uzmanlığımızla müşterilerimizin rekabet avantajı 
              elde etmelerine yardımcı oluyoruz.
            </p>
            <p className={styles.description}>
              Her projede kalite, inovasyon ve müşteri memnuniyetini önceleyerek, 
              geleceğin teknolojilerini bugün hayata geçiriyoruz.
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
          <h3 className={styles.visionTitle}>Vizyonumuz</h3>
          <p className={styles.visionText}>
            Türkiye'nin en yenilikçi teknoloji şirketi olarak, yapay zeka ve dijital 
            çözümlerle toplumsal ve ekonomik değer yaratmak. Küresel ölçekte rekabet 
            edebilen sürdürülebilir teknoloji projelerine öncülük etmek.
          </p>
        </div>

        <div className={styles.techStack}>
          <h3 className={styles.techTitle}>Teknoloji Yığınımız</h3>
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
