import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Home.module.scss'

const Home: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/gameConfiguration">Game!</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Home
