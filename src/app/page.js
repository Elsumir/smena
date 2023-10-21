import { GetCalendar } from './components/Calendar';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <GetCalendar />
    </main>
  );
}
