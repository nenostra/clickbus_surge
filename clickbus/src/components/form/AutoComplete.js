import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export const AutoComplete = ({ input: { value, onChange }, options, placeholder,
   meta: { touched, error }}) =>  (
    <div>
      <Select value={value} onChange={onChange} options={options} placeholder={placeholder}/>
      {touched && (error && <span>{error}</span>)}
    </div>
  )
