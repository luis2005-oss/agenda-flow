import { MyTemplate } from '../templates/myTemplate'
import styles from './dashboardPage.module.css'

function DashboardPage() {
  return (
    <MyTemplate className={styles.home}>
      <h2>Inicio</h2>
    </MyTemplate>
    )
}

export { DashboardPage }