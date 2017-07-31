import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { AutoComplete } from './AutoComplete';
import { Calendar } from './Calendar';

const options = [
  { value: 'hermosillo-son', label: 'Hermosillo, Son' },
  { value: 'ciudad-obregon-son', label: 'Ciudad Obregón, Son' }
];

const required = value => (value ? undefined : 'Required')

let SearchForm = props => {
  const { handleSubmit } = props

  return (
    <form onSubmit={ handleSubmit((values, dispatch) => dispatch({type:'RESULTS', values}))
    }>
      <div>
        <label htmlFor="origin">
          <Field name="origin" component={AutoComplete} options={options}
          validate={required} placeholder='Origin'/>
        </label>
      </div>
      <div>
        <label htmlFor="destination">
          <Field name="destination" component={AutoComplete} options={options}
          validate={required} placeholder='Destination'/>
        </label>
      </div>
      <div>
        <label htmlFor="date"> {/*TODO: VALIDATE FOR SAME DAY PICK*/}
          <Field name="date" component={Calendar} placeholder='calendar'/>
        </label>
      </div>
      <br/>
      <button type="submit">Search</button>
    </form>
  )
}

SearchForm = reduxForm({
  form: 'search'
})(SearchForm)

export default (SearchForm);
