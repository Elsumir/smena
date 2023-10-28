'use client';
import { createContext, useEffect, useState } from 'react';
import { GetCalendar } from './components/Calendar/Calendar';
import { FunctionalBlock } from './components/FunctionalBlock/FunctionalBlock';
import styles from './page.module.css';
import { BlockColor } from './components/BlockColor/BlockColor';

export const valueShiftContext = createContext(0);

export default function Home() {
  const [storage, setStage] = useState('');

  useEffect(() => {
    setStage(+localStorage.getItem('shift'));
  }, []);

  const [valueShift, setValueShift] = useState(storage);

  if (typeof window !== 'undefined') {
    localStorage.setItem('shift', valueShift);
  }

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
