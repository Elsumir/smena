'use client';

import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
// import 'react-calendar/dist/Calendar.css';

export const GetCalendar = () => {
  const [value, onChange] = useState(new Date());
  const [toggle, setToggle] = useState(1);

  useEffect(() => {
    const item = document.querySelectorAll('abbr');

    item.forEach((e) => {
      const days = Math.floor(
        Date.parse(e.getAttribute('aria-label')) / (1000 * 60 * 60 * 24)
      );
      switch (days % 4) {
        case 3:
          e.parentNode.classList.add('day');
          break;
        case 0:
          e.parentNode.classList.add('night');
          break;
        case 1:
          e.parentNode.classList.add('dump');
          break;
        case 2:
          e.parentNode.classList.add('output');
          break;
      }
    });
  }, [toggle]);

  const clickBtn = () => setToggle(toggle + 1);

  return (
    <>
      <Calendar
        onClickDay={clickBtn}
        onActiveStartDateChange={clickBtn}
        onChange={onChange}
        value={value}
        locale="en-En"
      />
    </>
  );
};
