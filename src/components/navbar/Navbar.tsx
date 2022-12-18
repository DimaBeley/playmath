import React from 'react'
import styles from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => (
  <>
    <div className={styles.container}>
      <NavLink to="/">
        <span className={styles.logo}>Play Math Make Fun</span>
      </NavLink>
    </div>
  </>
)
