import React from 'react'
import Header from '../Header'
import Input from './Input'
import propTypes from 'prop-types'

const Form = ({state, onChange, onSubmit}) => (
    <div>
        <Header>Form</Header>
        <form action="#" onSubmit={onSubmit}>
            <Input
                name="first_name"
                value={state.first_name}
                onChange={onChange}
                pattern="[a-zA-Z]+"
                title="Only chars allowed">
                First name
            </Input>
            <Input
                name="last_name"
                value={state.last_name}
                onChange={onChange}
                pattern="[a-zA-Z]+"
                title="Only chars allowed">
                Last name
            </Input>
            <Input name="dob"
                   value={state.dob}
                   onChange={onChange}
                   pattern="(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}"
                   title="format date: dd.mm.yyyy">
                Date of birth
            </Input>
            <Input
                name="location"
                value={state.location}
                onChange={onChange}
                pattern="[a-zA-Z]+"
                title="Only chars allowed">
                Location
            </Input>
            {state.error ? <p>{state.error}</p> : null}
            <button>Submit</button>
        </form>
    </div>
);

Form.propTypes = {
    state: propTypes.objectOf(propTypes.string),
    onChange: propTypes.func.isRequired,
    onSubmit: propTypes.func.isRequired
};

export default Form;