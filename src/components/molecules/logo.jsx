import { Link } from '../atoms/customLink'
import styles from './logo.module.css'

function Logo() {
  return (
    <Link
      href ='/'
      className={styles.logo}
    >
      <img src="/LOGO.png" alt="Imagen del logo" className={styles.logoImg}/>
      <h1>Agenda Flow</h1>
    </Link>
    )
}

export {Logo}