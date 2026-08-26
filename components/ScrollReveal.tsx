'use client'

import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )
    reveals.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return null
}
