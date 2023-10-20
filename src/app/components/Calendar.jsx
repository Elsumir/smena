'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

export const GetCalendar = () => {
  const [value, onChange] = useState(new Date());
  const item = document.querySelectorAll('abbr');
  // const days = [...item].map((e) => e.ariaLabel).filter((e) => e.length > 9);
  // const w = Date.parse('September 26, 2023');
  // .parentNode.classList.add('day');
  // const sumDays = Math.floor(1695675600000 / (1000 * 60 * 60 * 24));
  // console.log(
  //   Math.floor((Date.parse('October 22, 2023') / (1000 * 60 * 60 * 24)) % 4)
  // );

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

    // if (days % 4 === 3) {
    //   e.parentNode.classList.add('day');
    // }

    // console.log(e.getAttribute('aria-label'));
    console.log(
      Math.floor((Date.parse('October 21, 2023') / (1000 * 60 * 60 * 24)) % 4)
    );
  });
  return (
    <>
      <Calendar onChange={onChange} value={value} locale="en-En" />
    </>
  );
};
