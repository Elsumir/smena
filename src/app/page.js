'use client';
import { createContext, useEffect, useState } from 'react';
import { GetCalendar } from './components/Calendar/Calendar';
import { FunctionalBlock } from './components/FunctionalBlock/FunctionalBlock';
import styles from './page.module.css';
import { BlockColor } from './components/BlockColor/BlockColor';
export const valueShiftContext = createContext();

export default function Home() {
  let storage;
  if (typeof window !== 'undefined') {
    storage = +localStorage.getItem('shift');
  } else {
    storage = false;
  }

  const [valueShift, setValueShift] = useState(storage);

  useEffect(() => {
    localStorage.setItem('shift', valueShift);
  }, [valueShift]);

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
