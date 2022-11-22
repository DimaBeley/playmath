export const getRandomRangeNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min)
}
export const exitCheck = (): Boolean => {
  return window.confirm('Exit from game?')
}
