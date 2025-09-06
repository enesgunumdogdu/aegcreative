'use client'

import React, { useState } from 'react'
import styles from './Contact.module.css'

interface ContactFormData {
  name: string
  email: string
  phone: string
  projectType: string
  message: string
  honeypot: string
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
    honeypot: ''
  })

  const [submitTime, setSubmitTime] = useState<number | null>(null)
  const [formStartTime] = useState<number>(Date.now())

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [result, setResult] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = (): boolean => {
    if (formData.honeypot.trim() !== '') {
      console.log('Bot detected: honeypot filled')
      return false
    }

    const currentTime = Date.now()
    const timeDiff = currentTime - formStartTime
    if (timeDiff < 3000) {
      console.log('Bot detected: too fast submission')
      return false
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setResult("Sending....")
    setIsSubmitting(true)
    
    const web3FormData = new FormData()
    web3FormData.append("access_key", "1a718ec8-9e39-4fef-87f1-8b4ba0789a31")
    web3FormData.append("name", formData.name)
    web3FormData.append("email", formData.email)
    web3FormData.append("phone", formData.phone)
    web3FormData.append("projectType", formData.projectType)
    web3FormData.append("message", formData.message)
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData
      })

      const data = await response.json()

      if (data.success) {
        setResult("Form Submitted Successfully")
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          message: '',
          honeypot: ''
        })
      } else {
        console.log("Error", data)
        setResult(data.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Submission error:", error)
      setResult("Failed to submit form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'me@enesgunumdogdu.com.tr',
      link: 'mailto:me@enesgunumdogdu.com.tr'
    },
    {
      icon: '📍',
      label: 'Address',
      value: 'Antalya, Turkey',
      link: null
    }
  ]

  if (isSubmitted) {
    return (
      <section id="contact" className="section">
        <div className="container">
          <div className={styles.successMessage}>
            <div className={styles.successIcon}>✅</div>
            <h3>Thank you!</h3>
            <p>Your message has been sent successfully. We will get back to you as soon as possible.</p>
            <button 
              onClick={() => setIsSubmitted(false)} 
              className="btn"
            >
              Send New Message
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Let's talk about your project. We're here to develop custom solutions for you.
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

          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleInputChange}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="projectType">Project Type *</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="Web Application">Web Application</option>
                  <option value="Mobile Application">Mobile Application</option>
                  <option value="AI Solution">AI Solution</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Cloud & DevOps">Cloud & DevOps</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Other">Other</option>
                </select>
              </div>

            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Project Details *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Please provide detailed information about your project..."
                required
              />
            </div>

            <button 
              type="submit" 
              className={`btn ${styles.submitBtn}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Project Request'}
            </button>
            
            {result && !isSubmitted && (
              <div className={styles.formResult}>
                <span>{result}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

