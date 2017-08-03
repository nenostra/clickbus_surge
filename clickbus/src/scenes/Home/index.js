import React from 'react';
import { Field, reduxForm } from 'redux-form';
import AutoComplete from './components/AutoComplete';
import Calendar from './components/Calendar';

const options = [
    { value: 'hermosillo-son', label: 'Hermosillo, Son' },
    { value: 'ciudad-obregon-son', label: 'Ciudad Obregón, Son' }
];

const required = value => (value ? undefined : 'Required');

let Home = props => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={ handleSubmit((values, dispatch) => dispatch({type: 'RESULTS', payload: values}))
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

                {/*TODO: VALIDATE FOR SAME DAY PICK !!!!!!*/}
                <label htmlFor="date">
                    <Field name="date" component={Calendar} placeholder='calendar'
                    validate={required}/>
                </label>
            </div>
            <br/>
            <button type="submit">Search</button>
        </form>
    )
};

Home = reduxForm({
    form: 'search'
})(Home);

export default Home;