import { gsap } from 'gsap'

export const getRandomRangeNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min)
}
export const exitCheck = (): Boolean => {
  return window.confirm('Exit from game?')
}

export const answerAnimation = (div: HTMLDivElement | null, color: string) => {
  gsap.to(div, {
    boxShadow: `0 0 20px 20px ${color}`,
    ease: 'none',
    duration: 0,
  })
  gsap.to(div, {
    delay: 0.6,
    duration: 0,
    boxShadow: '0 0 62px 0 rgba(255, 255, 255, .8)',
  })
}
