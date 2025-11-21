import { MyTemplate } from '../templates/myTemplate'
import styles from './calendarPage.module.css'

function CalendarPage() {
  return (
    <MyTemplate className={styles.home}>
      <h2>Calendario</h2>
    </MyTemplate>
    )
}

export { CalendarPage }