'use client';
import { createContext, useState } from 'react';
import { GetCalendar } from './components/Calendar/Calendar';
import { FunctionalBlock } from './components/FunctionalBlock/FunctionalBlock';
import styles from './page.module.css';
import { BlockColor } from './components/BlockColor/BlockColor';

export const valueShiftContext = createContext(0);

export default function Home() {
  const [valueShift, setValueShift] = useState(0);

  return (
    <main className={styles.main}>
      <valueShiftContext.Provider value={{ valueShift, setValueShift }}>
        <GetCalendar />
        <FunctionalBlock />
      </valueShiftContext.Provider>
      <BlockColor />
    </main>
  );
}
