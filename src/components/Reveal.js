'use client'
import { motion, useReducedMotion } from 'framer-motion'

export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  duration = 0.6,
  y = 24,
  once = true,
  children,
  className = ''
}) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once, margin: '0px 0px -10% 0px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Tag>{children}</Tag>
    </motion.div>
  )
}
