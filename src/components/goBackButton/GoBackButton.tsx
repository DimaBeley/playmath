import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './GoBackButton.module.scss'
import { gsap } from 'gsap'
import { ButtonPropsType } from './types'

export const GoBackButton: React.FC<ButtonPropsType> = ({
  callback,
  text,
}: any) => {
  const navigate = useNavigate()
  const ButtonRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    gsap.to(ButtonRef.current, {
      opacity: 1,
      y: 15,
      duration: 1,
      delay: 0.4,
    })
  }, [])
  const onClickHandler = () => {
    if (callback) return callback()
    return navigate('/')
  }
  return (
    <button
      type="button"
      onClick={onClickHandler}
      ref={ButtonRef}
      className={styles.goBackButton}
    >
      {text}
    </button>
  )
}
