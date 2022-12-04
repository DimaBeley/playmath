import React, { Fragment, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'

const About: React.FC = () => {
  const navigate = useNavigate()
  const AboutRef = useRef<HTMLDivElement>(null)
  const TextRef = useRef<HTMLDivElement>(null)
  const ButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    gsap.to(AboutRef.current, {
      opacity: 1,
      y: 50,
      duration: 1,
    })
    gsap.to(TextRef.current, {
      opacity: 1,
      y: 50,
      duration: 1,
      delay: 0.2,
    })
    gsap.to(ButtonRef.current, {
      opacity: 1,
      y: 50,
      duration: 1,
      delay: 0.4,
    })
  }, [])
  return (
    <Fragment>
      <div ref={AboutRef}>
        <h1>About</h1>
      </div>
      <div ref={TextRef}>
        <p>This game created for fun and brain relaxing.</p>
      </div>
      <button
        ref={ButtonRef}
        type="button"
        className="btn"
        cy-data="go-back-button"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </Fragment>
  )
}

export default About
