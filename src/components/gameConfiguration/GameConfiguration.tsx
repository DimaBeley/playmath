import React from 'react'
import StartButton from './StartButton'
import styles from './GameConfiguration.module.scss'
import { GameDifficultySelection } from './GameDifficultySelection'
import { GoBackButton } from '../about/GoBackButton'
import data from '../data.json'
import { useSelector } from 'react-redux'
import { selectors } from '../../redux/multiplication'

const GameConfiguration = (): JSX.Element => {
  const levelDifficulty = useSelector(selectors.getLevelDifficulty)
  const { example } = data.levels[levelDifficulty as keyof typeof data.levels]
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <GameDifficultySelection />
        <div className={styles.example}>
          <span className={styles.example}>Example: {example}</span>
        </div>
        <StartButton />
        <GoBackButton />
      </div>
    </div>
  )
}

export default GameConfiguration
