import data from '../data.json'
import React from 'react'
import { actionTypes } from '../../redux/multiplication'
import { useDispatch, useSelector } from 'react-redux'
import styles from './GameConfiguration.module.scss'
import { selectors } from '../../redux/multiplication/'

export const GameDifficultySelection = (): JSX.Element => {
  const dispatch = useDispatch()
  const level = useSelector(selectors.getLevelDifficulty)
  const levelNamesArray = Object.keys(data.levels)
  const defaultSelectedValue = levelNamesArray[0]
  const LevelOptionsItems: JSX.Element[] = levelNamesArray.map(
    (name: string) => {
      return (
        <option key={name} value={name} className={styles.option}>
          {name}
        </option>
      )
    }
  )
  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value, 'selected')
    dispatch({
      type: actionTypes.SET_LEVEL_DIFFICULTY,
      payload: event.target.value,
    })
  }
  return (
    <>
      <label className={styles.selectLabel}>Select level</label>
      <select
        onChange={onSelectChange}
        defaultValue={defaultSelectedValue}
        className={styles.levelInputSelect}
        name={'select'}
        value={level}
      >
        {LevelOptionsItems}
      </select>
    </>
  )
}
