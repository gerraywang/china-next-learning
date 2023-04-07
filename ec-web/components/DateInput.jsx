import React, { useState } from 'react';

const DateInput = () => {
  const [date, setDate] = useState('');

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  return (
      <input
        type="date"
        id="date"
        value={date}
        onChange={handleDateChange}
      />
  );
};

export default DateInput;
