'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

export function useScrollEngine() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Skip Lenis on touch devices — native momentum scroll is faster and ScrollTrigger
    // works directly against window scroll. Lenis on mobile causes jitter and breaks
    // ScrollTrigger updates.
    const isTouch =
      window.matchMedia('(pointer: coarse)').matches ||
      'ontouchstart' in window

    if (isTouch) {
      const refreshId = window.setTimeout(() => ScrollTrigger.refresh(), 100)
      const onLoaded = () => ScrollTrigger.refresh()
      window.addEventListener('site:loaded', onLoaded)
      return () => {
        window.clearTimeout(refreshId)
        window.removeEventListener('site:loaded', onLoaded)
      }
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(tickerCallback)
    gsap.ticker.lagSmoothing(0)

    const onLoaded = () => { ScrollTrigger.refresh(); lenis.resize() }
    window.addEventListener('site:loaded', onLoaded)

    return () => {
      gsap.ticker.remove(tickerCallback)
      window.removeEventListener('site:loaded', onLoaded)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return lenisRef
}
