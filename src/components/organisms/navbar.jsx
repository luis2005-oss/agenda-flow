import { Logo } from '../molecules/Logo'
import { NavMenu } from '../molecules/navMenu'
import { UserProfile } from '../molecules/userProfile'
import styles from './navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo/>
      <NavMenu/>
      <UserProfile/>
    </nav>
  )
}

export { Navbar }