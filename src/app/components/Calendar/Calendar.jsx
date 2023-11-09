'use client';

import { useContext, useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import './Calendar.scss';
import { valueShiftContext } from '@/app/page';

export const GetCalendar = () => {
  const [value, onChange] = useState(new Date());
  const { valueShift } = useContext(valueShiftContext);
  const [loading, setLoading] = useState(true);
  const [countShift, setCountShift] = useState(0);
  const [toggle, setToggle] = useState(1);

  useEffect(() => {
    setLoading(false);
    setToggle(toggle + 1);
    // нужен для правельного окраса смен,
    // иначе не успевает прокрасить то что надо
  }, []);

  const count = () => {
    const days = document.querySelectorAll(
      '.react-calendar__month-view__days__day'
    );
    const arr = [];
    days.forEach((day) => {
      if (
        !day.classList.contains(
          'react-calendar__month-view__days__day--neighboringMonth'
        )
      ) {
        arr.push(day);
      }
    });
    const newArr = arr.filter(
      (e) => e.classList.contains('day') || e.classList.contains('night')
    );
    setCountShift(newArr.length);
  };

  useEffect(() => {
    count();
  }, [toggle]);
  useEffect(() => {
    count();
  }, [valueShift]);

  console.log(countShift);

  return (
    <>
      {loading ? (
        'Загрузка...'
      ) : (
        <>
          <Calendar
            onActiveStartDateChange={() => setToggle(toggle + 1)}
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

          <span>{`количество смен: ${countShift}`}</span>
        </>
      )}
    </>
  );
};
