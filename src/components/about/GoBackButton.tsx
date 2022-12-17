import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './About.module.scss'
import { gsap } from 'gsap'

export const GoBackButton: React.FC = () => {
  const navigate = useNavigate()
  const ButtonRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    gsap.to(ButtonRef.current, {
      opacity: 1,
      y: 15,
      duration: 1,
      delay: 0.4,
      color: 'white',
    })
  }, [])
  return (
    <button
      type="button"
      className={styles.goBackButton}
      onClick={() => navigate(-1)}
      ref={ButtonRef}
    >
      Go back
    </button>
  )
}
