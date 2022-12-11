import data from '../data.json'

export const GameDifficultySelection = (): JSX.Element => {
  const levelNamesArray = Object.keys(data.levels)
  const LevelOptionsItems: JSX.Element[] = levelNamesArray.map(
    (name: string, index) => <option key={index} value={name}>{name}</option>
  )
  return <select>{LevelOptionsItems}</select>
}
