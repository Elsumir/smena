import { GetCalendar } from './components/Calendar/Calendar';
import { FunctionalBlock } from './components/FunctionalBlock/FunctionalBlock';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <GetCalendar />
      <FunctionalBlock />
    </main>
  );
}
