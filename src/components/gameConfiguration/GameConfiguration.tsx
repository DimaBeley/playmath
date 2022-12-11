import StartButton from './StartButton'
import styles from './GameConfiguration.module.scss'
import { GameDifficultySelection } from './GameDifficultySelection'

const GameConfiguration = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <GameDifficultySelection />
        <StartButton />
      </div>
    </div>
  )
}

export default GameConfiguration
