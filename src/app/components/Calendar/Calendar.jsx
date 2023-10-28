'use client';

import { useContext, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import './Calendar.scss';
import { valueShiftContext } from '@/app/page';

export const GetCalendar = () => {
  const [value, onChange] = useState(new Date());
  const { valueShift } = useContext(valueShiftContext);

  return (
    <>
      <Calendar
        onChange={onChange}
        value={value}
        locale="ru-RU"
        tileClassName={({ date }) => {
          const days = Math.floor(
            (Date.parse(date) / (1000 * 60 * 60 * 24) + valueShift) % 4
          );
          const painting = days === 3 ? 'day' : days === 0 ? 'night' : '';
          return painting;
        }}
      />
    </>
  );
};
