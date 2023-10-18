'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';

export const GetCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};
