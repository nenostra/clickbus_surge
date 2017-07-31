import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export const Calendar = ({input, placeholder, defaultValue, meta: {touched, error} }) => (
  <div>
        <DatePicker {...input} dateFormat="YYYY-MM-DD" placeholderText={placeholder}
        selected={input.value ? moment(input.value) : moment()} />
        {touched && error && <span>{error}</span>}
  </div>
);
