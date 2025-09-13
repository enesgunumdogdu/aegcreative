'use client'

import { useEffect } from 'react'

export function useTabAnimation() {
  useEffect(() => {
    const originalTitle = document.title
    const text = '3nes'
    const frames = [
      '💜',
      '3💜',
      '3n💜',
      '3ne💜',
      '3nes💜',
      '3nes ✨',
      '3nes 🚀',
      '3nes 💻',
      '3nes 🎯',
      '3nes 💜',
    ]
    
    let frameIndex = 0
    let charIndex = 0
    let isTyping = true
    let pauseCounter = 0
    
    const typewriterInterval = setInterval(() => {
      if (isTyping) {
        if (charIndex <= text.length) {
          const displayText = text.substring(0, charIndex)
          const cursor = charIndex < text.length ? '|' : ''
          document.title = displayText + cursor
          charIndex++
        } else {
          isTyping = false
          pauseCounter = 0
        }
      } else {
        pauseCounter++
        
        if (pauseCounter === 10) {
          document.title = frames[frameIndex]
          frameIndex = (frameIndex + 1) % frames.length
        }
        
        if (pauseCounter === 15) {
          if (frameIndex === 0) {
            charIndex = 0
            isTyping = true
          } else {
            pauseCounter = 9
          }
        }
      }
    }, 200)
    
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = '👀 Come back! - 3nes'
      } else {
        charIndex = 0
        isTyping = true
        frameIndex = 0
        pauseCounter = 0
      }
    }
    
    document.addEventListener('visibilitychange', handleVisibilityChange)
    
    return () => {
      clearInterval(typewriterInterval)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      document.title = originalTitle
    }
  }, [])
}