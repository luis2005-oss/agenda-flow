import { MyTemplate } from '../templates/myTemplate'
import styles from './helpPage.module.css'

function HelpPage() {
  return (
    <MyTemplate className={styles.home}>
      <h2>Ayuda</h2>
    </MyTemplate>
    )
}

export { HelpPage }