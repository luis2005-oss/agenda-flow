import { Bell } from 'lucide-react'
import styles from './headerUser.module.css'


function HeaderUser({ setModalIsOpen }) {
  return (
    <div className={styles.login}>
      <span className={styles.containnerIcon}>
        <Bell className={styles.notifications} size={'25px'} />
      </span>
      <span className={styles.separator}></span>
      <button
        onClick={setModalIsOpen}
        className={styles.button}
      >
        Iniciar Sesión
      </button>

    </div>
  )
}

export { HeaderUser }