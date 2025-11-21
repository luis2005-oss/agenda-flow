import { MyTemplate } from '../templates/myTemplate'
import styles from './remindersPage.module.css'

function RemindersPage() {
  return (
    <MyTemplate className={styles.home}>
      <h2>Recordatorios</h2>
    </MyTemplate>
    )
}

export { RemindersPage }