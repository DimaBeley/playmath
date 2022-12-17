import StartButton from './StartButton'
import styles from './GameConfiguration.module.scss'
import { GameDifficultySelection } from './GameDifficultySelection'
import { GoBackButton } from '../about/GoBackButton'
import React from 'react'

const GameConfiguration = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <GameDifficultySelection />
        <StartButton />
        <GoBackButton />
      </div>
    </div>
  )
}

export default GameConfiguration
