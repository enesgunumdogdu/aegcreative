'use client'

import { useState } from 'react'
import styles from './Contact.module.css'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  projectType: string
  budget: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const __handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const __handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const mailtoLink = `mailto:hello@aegcreative.com?subject=Proje Talebi - ${formData.projectType}&body=
      İsim: ${formData.name}
      Email: ${formData.email}
      Telefon: ${formData.phone}
      Şirket: ${formData.company}
      Proje Türü: ${formData.projectType}
      Bütçe: ${formData.budget}
      
      Mesaj:
      ${formData.message}
    `
    
    window.location.href = mailtoLink
    setIsSubmitted(true)
  }

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'hello@aegcreative.com',
      link: 'mailto:hello@aegcreative.com'
    },
    {
      icon: '📞',
      label: 'Telefon',
      value: '+90 (212) 123 45 67',
      link: 'tel:+902121234567'
    },
    {
      icon: '📍',
      label: 'Adres',
      value: 'Maslak, Istanbul, Turkey',
      link: null
    },
    {
      icon: '💬',
      label: 'WhatsApp',
      value: 'Hızlı İletişim',
      link: 'https://wa.me/902121234567'
    }
  ]

  if (isSubmitted) {
    return (
      <section id="contact" className="section">
        <div className="container">
          <div className={styles.successMessage}>
            <div className={styles.successIcon}>✅</div>
            <h3>Teşekkürler!</h3>
            <p>Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.</p>
            <button 
              onClick={() => setIsSubmitted(false)} 
              className="btn"
            >
              Yeni Mesaj Gönder
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">İletişime Geçin</h2>
        <p className="section-subtitle">
          Projeniz hakkında konuşalım. Sizin için özel çözümler geliştirmek için buradayız.
        </p>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            {contactInfo.map((info, index) => (
              <div key={index} className={styles.infoCard}>
                <div className={styles.infoIcon}>{info.icon}</div>
                <div className={styles.infoContent}>
                  <h4>{info.label}</h4>
                  {info.link ? (
                    <a href={info.link} target="_blank" rel="noopener noreferrer">
                      {info.value}
                    </a>
                  ) : (
                    <span>{info.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={__handleSubmit} className={styles.contactForm}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">İsim Soyisim *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={__handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={__handleInputChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={__handleInputChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="company">Şirket</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={__handleInputChange}
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="projectType">Proje Türü *</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={__handleInputChange}
                  required
                >
                  <option value="">Seçin...</option>
                  <option value="Web Uygulaması">Web Uygulaması</option>
                  <option value="Mobil Uygulama">Mobil Uygulama</option>
                  <option value="AI Çözümü">AI Çözümü</option>
                  <option value="E-ticaret">E-ticaret</option>
                  <option value="Cloud & DevOps">Cloud & DevOps</option>
                  <option value="Danışmanlık">Danışmanlık</option>
                  <option value="Diğer">Diğer</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="budget">Bütçe</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={__handleInputChange}
                >
                  <option value="">Seçin...</option>
                  <option value="10K-25K TL">10K-25K TL</option>
                  <option value="25K-50K TL">25K-50K TL</option>
                  <option value="50K-100K TL">50K-100K TL</option>
                  <option value="100K+ TL">100K+ TL</option>
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Proje Detayları *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={__handleInputChange}
                placeholder="Projeniz hakkında detaylı bilgi verin..."
                required
              />
            </div>

            <button type="submit" className={`btn ${styles.submitBtn}`}>
              Proje Talebini Gönder
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
