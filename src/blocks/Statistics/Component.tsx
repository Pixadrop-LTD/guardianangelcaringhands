'use client'

import type { FC } from 'react'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface Statistic {
  label: string
  value: number
}

interface StatisticsBlockProps {
  statisticsList: Statistic[]
}

export const StatisticsBlock: FC<StatisticsBlockProps> = ({ statisticsList }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
      <section ref={ref} className="py-16 bg-primary-100 text-primary-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statisticsList.map((statistic, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl shadow-lg bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm transition duration-500 ease-in-out transform hover:scale-105"
            >
              {inView ? (
                <AnimatedNumber value={statistic.value} />
              ) : (
                <div className="text-4xl md:text-5xl font-bold mb-2 font-montserrat">0+</div>
              )}
              <p className="text-lg font-source-serif-pro">{statistic.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface AnimatedNumberProps {
  value: number
}

const AnimatedNumber: FC<AnimatedNumberProps> = ({ value }) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (count < value) {
      const increment = Math.ceil(value / 200)
      const timer = setTimeout(() => {
        setCount(Math.min(count + increment, value))
      }, 10)
      return () => clearTimeout(timer)
    }
  }, [count, value])

  return <div className="text-4xl md:text-5xl font-bold mb-2 font-montserrat">{count}+</div>
}
