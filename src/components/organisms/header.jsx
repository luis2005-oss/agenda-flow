import { HeaderSearch } from '../molecules/headerSearch'
import { HeaderUser } from '../molecules/headerUser'
import styles from './header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <HeaderSearch/>
      <HeaderUser/>
    </header>
    )
}

export { Header }