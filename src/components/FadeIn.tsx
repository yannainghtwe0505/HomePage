import { type ReactNode, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type FadeInProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function FadeIn({ children, className = '', delay = 0 }: FadeInProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
