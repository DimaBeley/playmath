import data from '../data.json'
import React from 'react'
import { actionTypes } from '../../redux/game'
import { useDispatch, useSelector } from 'react-redux'
import styles from './GameConfiguration.module.scss'
import { selectors } from '../../redux/game/'

export const GameDifficultySelection = (): JSX.Element => {
  const dispatch = useDispatch()
  const level = useSelector(selectors.getLevelDifficulty)
  const levelNamesArray = Object.keys(data.levels)
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
        className={styles.levelInputSelect}
        name={'select'}
        value={level}
      >
        {LevelOptionsItems}
      </select>
    </>
  )
}
