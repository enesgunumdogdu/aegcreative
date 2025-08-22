'use client'

import styles from './Services.module.css'

interface Service {
  title: string
  description: string
  features: string[]
  icon: string
}

export default function Services() {
  const __scrollToContact = () => {
    const element = document.getElementById('contact')
    if (!element) return
    element.scrollIntoView({ behavior: 'smooth' })
  }
  const services: Service[] = [
    {
      title: 'AI Çözümleri',
      description: 'Makine Öğrenmesi, Derin Öğrenme ve AI tabanlı uygulamalar geliştiriyoruz. Verilerinizi değerli içgörülere dönüştürün.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      icon: '🤖'
    },
    {
      title: 'Web Uygulamaları',
      description: 'Modern, hızlı ve kullanıcı dostu web uygulamaları. React, Next.js ve en son teknolojilerle geliştiriyoruz.',
      features: ['React/Next.js', 'TypeScript', 'Responsive Design', 'PWA Support'],
      icon: '💻'
    },
    {
      title: 'Mobil Uygulamalar',
      description: 'iOS ve Android platformları için native ve cross-platform mobil uygulamalar geliştiriyoruz.',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'UI/UX Design'],
      icon: '📱'
    },
    {
      title: 'Cloud & DevOps',
      description: 'Cloud altyapı kurulumu, otomasyon ve sürekli entegrasyon çözümleri sunuyoruz.',
      features: ['AWS/Azure/GCP', 'Docker/Kubernetes', 'CI/CD Pipeline', 'Monitoring'],
      icon: '☁️'
    },
    {
      title: 'E-ticaret Çözümleri',
      description: 'Kapsamlı e-ticaret platformları ve ödeme sistemi entegrasyonları geliştiriyoruz.',
      features: ['Shopify/WooCommerce', 'Payment Integrations', 'Inventory Management', 'Analytics Dashboard'],
      icon: '🛒'
    },
    {
      title: 'Danışmanlık & Analiz',
      description: 'Dijital dönüşüm danışmanlığı ve teknoloji stratejisi geliştirme hizmetleri sunuyoruz.',
      features: ['Digital Strategy', 'Technology Consulting', 'Code Review', 'Performance Optimization'],
      icon: '📊'
    }
  ]

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">Hizmetlerimiz</h2>
        <p className="section-subtitle">
          AI destekli modern teknolojilerle iş ihtiyaçlarınıza özel çözümler geliştiriyoruz.
        </p>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
              <ul className={styles.features}>
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className={styles.customProject}>
          <p>Aradığınız hizmeti bulamadınız mı? Sizin için özel çözümler de geliştiriyoruz.</p>
          <button onClick={__scrollToContact} className="btn">Özel Proje Talebi</button>
        </div>
      </div>
    </section>
  )
}
