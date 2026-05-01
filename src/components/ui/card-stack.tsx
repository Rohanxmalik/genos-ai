'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from 'framer-motion'
import { RotateCcw, Shuffle, ChevronLeft, ChevronRight } from 'lucide-react'

export interface StackCard {
  id: string
  src: string
  alt: string
  title: string
  description: string
  href?: string
  meta?: string
  tags?: string[]
}

interface CardStackProps {
  cards: StackCard[]
}

export default function CardStack({ cards: initialCards }: CardStackProps) {
  const router = useRouter()
  const [cards, setCards] = useState<StackCard[]>(initialCards)
  const [dragDirection, setDragDirection] = useState<'up' | 'down' | null>(null)
  const [showInfo, setShowInfo] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const dragY = useMotionValue(0)
  const rotateX = useTransform(dragY, [-200, 0, 200], [15, 0, -15])

  const offset = 10
  const scaleStep = 0.06
  const dimStep = 0.15
  const stiff = 170
  const damp = 26
  const borderRadius = 14
  const swipeThreshold = 50

  const spring = { type: 'spring' as const, stiffness: stiff, damping: damp }

  const moveToEnd = () => {
    setCards((prev) => [...prev.slice(1), prev[0]])
    setCurrentIndex((prev) => (prev + 1) % initialCards.length)
  }

  const moveToStart = () => {
    setCards((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)])
    setCurrentIndex(
      (prev) => (prev - 1 + initialCards.length) % initialCards.length,
    )
  }

  const shuffleCards = () =>
    setCards((prev) => [...prev].sort(() => Math.random() - 0.5))

  const resetCards = () => {
    setCards(initialCards)
    setCurrentIndex(0)
  }

  const handleDragEnd = (_: unknown, info: { offset: { y: number }; velocity: { y: number } }) => {
    const velocity = info.velocity.y
    const offsetY = info.offset.y

    if (Math.abs(offsetY) > swipeThreshold || Math.abs(velocity) > 500) {
      if (offsetY < 0 || velocity < 0) {
        setDragDirection('up')
        setTimeout(() => {
          moveToEnd()
          setDragDirection(null)
        }, 150)
      } else {
        setDragDirection('down')
        setTimeout(() => {
          moveToStart()
          setDragDirection(null)
        }, 150)
      }
    }
    dragY.set(0)
  }

  if (initialCards.length === 0) return null

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Top control bar */}
      <div className="w-full flex items-center justify-between mb-10">
        <div className="flex gap-2">
          <motion.button
            onClick={resetCards}
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Reset"
            aria-label="Reset stack order"
          >
            <RotateCcw className="w-4 h-4 text-white/80" />
          </motion.button>
          <motion.button
            onClick={shuffleCards}
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Shuffle"
            aria-label="Shuffle posts"
          >
            <Shuffle className="w-4 h-4 text-white/80" />
          </motion.button>
        </div>

        <div className="flex gap-1.5">
          {initialCards.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex % initialCards.length
                  ? 'bg-white w-8'
                  : 'bg-white/15 w-1.5'
              }`}
            />
          ))}
        </div>

        <div className="text-xs text-white/40 tabular-nums">
          {String((currentIndex % initialCards.length) + 1).padStart(2, '0')}
          <span className="text-white/20"> / </span>
          {String(initialCards.length).padStart(2, '0')}
        </div>
      </div>

      <div className="relative flex items-center justify-center gap-4 sm:gap-6 w-full">
        <motion.button
          onClick={moveToStart}
          className="p-3 sm:p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-colors shrink-0"
          whileHover={{ scale: 1.1, x: -3 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Previous post"
        >
          <ChevronLeft className="w-5 h-5 text-white/80" />
        </motion.button>

        <div className="relative w-full max-w-[480px] aspect-video overflow-visible">
          <ul className="relative w-full h-full m-0 p-0">
            <AnimatePresence>
              {cards.map((card, i) => {
                const isFront = i === 0
                const brightness = Math.max(0.3, 1 - i * dimStep)
                const baseZ = cards.length - i

                return (
                  <motion.li
                    key={card.id}
                    className="absolute w-full h-full list-none overflow-hidden border border-white/10"
                    style={{
                      borderRadius: `${borderRadius}px`,
                      cursor: isFront ? 'grab' : 'default',
                      touchAction: 'none',
                      boxShadow: isFront
                        ? '0 30px 60px rgba(0,0,0,0.6)'
                        : '0 15px 30px rgba(0,0,0,0.35)',
                      rotateX: isFront ? rotateX : 0,
                      transformPerspective: 1000,
                    }}
                    animate={{
                      top: `${i * -offset}%`,
                      scale: 1 - i * scaleStep,
                      filter: `brightness(${brightness})`,
                      zIndex: baseZ,
                      opacity: dragDirection && isFront ? 0 : 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                      transition: { duration: 0.2 },
                    }}
                    transition={spring}
                    drag={isFront ? 'y' : false}
                    dragConstraints={{ top: 0, bottom: 0 }}
                    dragElastic={0.7}
                    onDrag={(_, info) => {
                      if (isFront) dragY.set(info.offset.y)
                    }}
                    onDragEnd={handleDragEnd}
                    onTap={() => {
                      if (isFront && card.href) router.push(card.href)
                    }}
                    whileDrag={
                      isFront
                        ? {
                            zIndex: cards.length + 1,
                            cursor: 'grabbing',
                            scale: 1.05,
                          }
                        : {}
                    }
                    onHoverStart={() => isFront && setShowInfo(true)}
                    onHoverEnd={() => setShowInfo(false)}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={card.src}
                      alt={card.alt}
                      className="w-full h-full object-cover pointer-events-none select-none"
                      draggable={false}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent pointer-events-none" />

                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-5"
                      animate={{
                        opacity: isFront ? 1 : 0.85,
                        y: isFront && showInfo ? -4 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {card.meta && (
                        <p className="text-white/60 text-[10px] uppercase tracking-[0.18em] mb-2">
                          {card.meta}
                        </p>
                      )}
                      <h3 className="text-white font-display text-lg sm:text-xl leading-snug line-clamp-2">
                        {card.title}
                      </h3>
                      <motion.p
                        className="text-white/70 text-sm mt-2 line-clamp-2"
                        animate={{
                          opacity: isFront && showInfo ? 1 : 0,
                          height: isFront && showInfo ? 'auto' : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {card.description}
                      </motion.p>
                      {isFront && card.tags && card.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {card.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] uppercase tracking-wider text-white/70 border border-white/15 rounded-full px-2 py-0.5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </motion.li>
                )
              })}
            </AnimatePresence>
          </ul>
        </div>

        <motion.button
          onClick={moveToEnd}
          className="p-3 sm:p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-colors shrink-0"
          whileHover={{ scale: 1.1, x: 3 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Next post"
        >
          <ChevronRight className="w-5 h-5 text-white/80" />
        </motion.button>
      </div>

      <p className="text-white/40 text-xs mt-10 text-center">
        Drag up/down to flick · Click the front card to read · Arrows to browse
      </p>
    </div>
  )
}
