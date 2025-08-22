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
      title: 'AI Solutions',
      description: 'We develop Machine Learning, Deep Learning, and AI-based applications. Transform your data into valuable insights.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      icon: '🤖'
    },
    {
      title: 'Web Applications',
      description: 'Modern, fast, and user-friendly web applications. We develop with React, Next.js, and the latest technologies.',
      features: ['React/Next.js', 'TypeScript', 'Responsive Design', 'PWA Support'],
      icon: '💻'
    },
    {
      title: 'Mobile Applications',
      description: 'We develop native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'UI/UX Design'],
      icon: '📱'
    },
    {
      title: 'Cloud & DevOps',
      description: 'We provide cloud infrastructure setup, automation, and continuous integration solutions.',
      features: ['AWS/Azure/GCP', 'Docker/Kubernetes', 'CI/CD Pipeline', 'Monitoring'],
      icon: '☁️'
    },
    {
      title: 'E-commerce Solutions',
      description: 'We develop comprehensive e-commerce platforms and payment system integrations.',
      features: ['Shopify/WooCommerce', 'Payment Integrations', 'Inventory Management', 'Analytics Dashboard'],
      icon: '🛒'
    },
    {
      title: 'Consulting & Analysis',
      description: 'We provide digital transformation consulting and technology strategy development services.',
      features: ['Digital Strategy', 'Technology Consulting', 'Code Review', 'Performance Optimization'],
      icon: '📊'
    }
  ]

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We develop custom solutions for your business needs with AI-powered modern technologies.
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
          <p>Can't find the service you're looking for? We also develop custom solutions for you.</p>
          <button onClick={__scrollToContact} className="btn">Custom Project Request</button>
        </div>
      </div>
    </section>
  )
}
