import { Bell } from 'lucide-react'
import styles from './headerUser.module.css'


function HeaderUser({ setModalISOpen }) {
  return (
    <div className={styles.login}>
      <span className={styles.containnerIcon}>
        <Bell className={styles.notifications} size={'25px'} />
      </span>
      <span className={styles.separator}></span>
      <button
        onClick={setModalISOpen}
        className={styles.button}
      >
        Iniciar Sesión
      </button>

    </div>
  )
}

export { HeaderUser }