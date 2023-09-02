import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import ptBr from 'date-fns/locale/pt-BR';

const DashCalendar = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      locale={ptBr}
      inline
    />
  );
};

export default DashCalendar;
