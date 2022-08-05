import React, { Fragment, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { gsap } from 'gsap'

export const About: React.FC = () => {
  const history = useHistory()
  const AboutRef = useRef<HTMLDivElement>(null)
  const TextRef = useRef<HTMLDivElement>(null)
  const ButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    gsap.from(AboutRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
    })
    gsap.from(TextRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.3,
    })
    gsap.from(ButtonRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.6,
    })
  })
  return (
    <Fragment>
      <div ref={AboutRef}>
        <h1>About</h1>
      </div>
      <div ref={TextRef}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          possimus doloribus error cumque autem asperiores, ullam deserunt quid
          omnis doloremque itaque eius eaque sint facilis unde tenet cisgendered
          aliquam soluta?
        </p>
      </div>
      <button
        ref={ButtonRef}
        type="button"
        className="btn"
        cy-data="go-back-button"
        onClick={() => history.push('/')}
      >
        Go back
      </button>
    </Fragment>
  )
}
