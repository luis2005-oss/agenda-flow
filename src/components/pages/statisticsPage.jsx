import { MyTemplate } from '../templates/myTemplate'
import styles from './statisticsPage.module.css'

function StatisticsPage() {
  return (
    <MyTemplate className={styles.home}>
      <h2>Estadísticas</h2>
    </MyTemplate>
    )
}

export { StatisticsPage }