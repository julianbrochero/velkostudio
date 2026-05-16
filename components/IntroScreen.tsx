'use client'

import { useEffect, useRef } from 'react'

const LETTERS = ['V', 'E', 'L', 'k', 'O', '®']

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
      <div className="flex overflow-visible">
        {LETTERS.map((letter, i) => (
          <span
            key={letter}
            ref={(el) => {
              lettersRef.current[i] = el
            }}
            className="text-white"
            style={{
              alignSelf: letter === '®' ? 'flex-start' : 'auto',
              color: '#fff',
              display: 'inline-block',
              fontFamily: 'var(--font-display), Inter, sans-serif',
              fontSize:
                letter === '®'
                  ? 'clamp(18px, 2.8vw, 34px)'
                  : 'clamp(58px, 10vw, 112px)',
              fontWeight: 700,
              letterSpacing: '-0.06em',
              lineHeight: 1,
              marginLeft: letter === '®' ? '0.08em' : 0,
              marginTop: letter === '®' ? '0.06em' : 0,
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
