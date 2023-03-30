import React, { useState, useEffect } from 'react'
import styles from './multiplication.module.scss'

export const CountdownTimer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(60)
  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1)
    }, 1000)
    if (seconds === 0) clearInterval(countdown)
    return () => clearInterval(countdown)
  }, [seconds])

  return (
    <div className={styles.countDownTimer}>
      00:
      {seconds < 10 ? '0' : ''}
      {seconds}
    </div>
  )
}
