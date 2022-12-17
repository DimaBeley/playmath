import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import styles from './About.module.scss'
import { GoBackButton } from './GoBackButton'

const About: React.FC = () => {
  const AboutRef = useRef<HTMLDivElement>(null)
  const TextRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.to(AboutRef.current, {
      opacity: 1,
      y: 15,
      duration: 1,
      color: 'white',
    })
    gsap.to(TextRef.current, {
      opacity: 1,
      y: 15,
      duration: 1,
      delay: 0.2,
      color: 'white',
    })
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div ref={AboutRef}>
          <h1>About</h1>
        </div>
        <div ref={TextRef} className={styles.text}>
          <p>This game created for fun and brain relaxing.</p>
          <p>Also for kids who learning basic math.</p>
        </div>
        <GoBackButton />
      </div>
    </div>
  )
}

export default About
