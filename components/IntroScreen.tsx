'use client'

import { useEffect, useRef } from 'react'

const LETTERS = [
  'J',
  'U',
  'L',
  'I',
  'A',
  'N',
  ' ',
  'B',
  'R',
  'O',
  'C',
  'H',
  'E',
  'R',
  'O',
]

type IntroScreenProps = {
  onComplete?: () => void
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const introRef = useRef<HTMLDivElement | null>(null)
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const intro = introRef.current

    if (!intro) {
      return
    }

    lettersRef.current.forEach((el, i) => {
      if (!el) {
        return
      }

      el.style.transition = `transform 0.72s cubic-bezier(0.16,1,0.3,1) ${
        0.1 + i * 0.11
      }s`
      el.style.transform = 'translateY(0%)'
    })

    const handleTransitionEnd = () => onComplete?.()

    const timer = setTimeout(() => {
      intro.style.transition = 'transform 0.7s cubic-bezier(0.76,0,0.24,1)'
      intro.style.transform = 'translateY(-100%)'
      intro.addEventListener('transitionend', handleTransitionEnd, {
        once: true,
      })
    }, 1400)

    return () => {
      clearTimeout(timer)
      intro.removeEventListener('transitionend', handleTransitionEnd)
    }
  }, [onComplete])

  return (
    <div
      ref={introRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      style={{ transform: 'translateY(0)' }}
    >
      <div className="flex flex-wrap justify-center overflow-visible px-6">
        {LETTERS.map((letter, i) => (
          <span
            key={`${letter}-${i}`}
            ref={(el) => {
              lettersRef.current[i] = el
            }}
            className="text-white"
            style={{
              color: '#fff',
              display: 'inline-block',
              fontFamily: 'var(--font-display), Inter, sans-serif',
              fontSize: 'clamp(32px, 6vw, 72px)',
              fontWeight: 600,
              letterSpacing: '-0.05em',
              lineHeight: 1,
              whiteSpace: 'pre',
              transform: 'translateY(115vh)',
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  )
}
