import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Home.module.scss'

export const Home: React.FC = () => (
  <div className={styles.container}>
    <nav className={styles.navigation}>
      <ul className={styles.navList}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/gameConfiguration">Game!</NavLink>
        </li>
      </ul>
    </nav>
  </div>
)
