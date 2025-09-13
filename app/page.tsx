'use client'

import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useTabAnimation } from './hooks/useTabAnimation'

export default function Home() {
  useTabAnimation()
  
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
