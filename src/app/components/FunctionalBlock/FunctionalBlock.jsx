'use client';
import { useContext, useState } from 'react';
import styles from './FunctionalBlock.module.scss';
import { valueShiftContext } from '@/app/page';

export const FunctionalBlock = () => {
  const [value, setValue] = useState('');
  const [resultDay, setResultDay] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [windows, setWindows] = useState(false);
  const { setValueShift } = useContext(valueShiftContext);

  const formatDate = new Date(value).toDateString();

  const handlerChange = (event) => {
    setValue(event.target.value);
  };

  const windowsToggle = () => {
    setWindows(!windows);
  };

  const result = () => {
    const days = [
      'Воскресенье',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота'
    ];

    const day = Math.floor(
      (Date.parse(formatDate) / (1000 * 60 * 60 * 24)) % 4
    );

    const shiftWork =
      day === 3
        ? 'В день'
        : day === 0
        ? 'В ночь'
        : day === 1
        ? 'Отсыпной'
        : 'Выходной';

    const resultDay = `По графику: ${shiftWork}`;
    const weekDay = `День недели: ${days[new Date(value).getDay()]}`;

    setWeekDay(weekDay);
    setResultDay(resultDay);
  };

  return (
    <div className={styles.wrapper}>
      {windows && (
        <div id="windowsSearch" className={styles.windowsSearch}>
          <span> Введите дату: </span>
          <input defaultValue={value} type="date" onChange={handlerChange} />
          <button onClick={result}>найти дату</button>
          <span className={styles.result}>{resultDay}</span>
          <span className={styles.result}>{weekDay}</span>
          <button onClick={windowsToggle}>назад</button>
        </div>
      )}

      <button onClick={windowsToggle}>поиск даты</button>
      <label>
        Выберите смену:
        <select
          onChange={(e) => {
            setValueShift(+e.target.value);
          }}
        >
          <option value="0">Г</option>
          <option value="2">А</option>
          <option value="3">Б</option>
          <option value="1">В</option>
        </select>
      </label>
    </div>
  );
};
