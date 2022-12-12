import data from '../data.json'
import React, { useEffect } from 'react'
import { actionTypes } from '../../redux/multiplication'
import { useDispatch } from 'react-redux'

export const GameDifficultySelection = (): JSX.Element => {
  const dispatch = useDispatch()
  const levelNamesArray = Object.keys(data.levels)
  const defaultSelectedValue = levelNamesArray[0]
  useEffect(() => {
    dispatch({
      type: actionTypes.SET_LEVEL_DIFFICULTY,
      payload: defaultSelectedValue,
    })
  }, [])
  const LevelOptionsItems: JSX.Element[] = levelNamesArray.map(
    (name: string) => (
      <option key={name} value={name}>
        {name}
      </option>
    )
  )
  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value, 'selected')
    dispatch({
      type: actionTypes.SET_LEVEL_DIFFICULTY,
      payload: event.target.value,
    })
  }
  return (
    <select onChange={onSelectChange} defaultValue={defaultSelectedValue}>
      {LevelOptionsItems}
    </select>
  )
}
