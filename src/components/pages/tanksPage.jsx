import { MyTemplate } from '../templates/myTemplate'
import styles from './tanksPage.module.css'

function TanksPage() {
  return (
    <MyTemplate className={styles.home}>
      <h2>Tareas</h2>
    </MyTemplate>
    )
}

export { TanksPage }