export const getRandomRangeNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min)
}
export const getMultiplication = (
  firstNumber: number,
  secondNumber: number
): number => firstNumber * secondNumber
