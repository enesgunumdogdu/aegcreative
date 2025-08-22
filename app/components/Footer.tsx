'use client'

import styles from './Footer.module.css'

export default function Footer() {
  const __scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element) return
    element.scrollIntoView({ behavior: 'smooth' })
  }

  const __handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    
    if (!email) return
    
    const mailtoLink = `mailto:hello@aegcreative.com?subject=Newsletter Aboneliği&body=Email: ${email}`
    window.location.href = mailtoLink
  }

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.logo}>AegCreative</h3>
            <p className={styles.description}>
              AI destekli yazılım çözümleri sunan dijital ajans. 
              Geleceğin teknolojilerini bugün hayata geçiriyoruz.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4>Şirket</h4>
            <ul>
              <li>
                <button onClick={() => __scrollToSection('about')}>
                  Hakkımızda
                </button>
              </li>
              <li>
                <button onClick={() => __scrollToSection('services')}>
                  Hizmetler
                </button>
              </li>
              <li>
                <button onClick={() => __scrollToSection('contact')}>
                  İletişim
                </button>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Hizmetler</h4>
            <ul>
              <li>AI Çözümleri</li>
              <li>Web Geliştirme</li>
              <li>Mobil Uygulamalar</li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Hukuki</h4>
            <ul>
              <li>Destek</li>
              <li>SSS</li>
              <li>Gizlilik Politikası</li>
            </ul>
          </div>

          <div className={styles.newsletterSection}>
            <h4>Bültenimize Abone Olun</h4>
            <form onSubmit={__handleNewsletterSubmit} className={styles.newsletterForm}>
              <input
                type="email"
                name="email"
                placeholder="Email adresiniz"
                required
              />
              <button type="submit" className="btn">
                Abone Ol
              </button>
            </form>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2025 AegCreative. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
