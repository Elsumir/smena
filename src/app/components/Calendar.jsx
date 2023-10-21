'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';

export const GetCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Calendar
        onChange={onChange}
        value={value}
        locale="ru-RU"
        tileClassName={({ date }) => {
          const days = Math.floor(
            (Date.parse(date) / (1000 * 60 * 60 * 24)) % 4
          );

          const painting = days === 3 ? 'day' : days === 0 ? 'night' : '';
          return painting;
        }}
      />
    </>
  );
};
