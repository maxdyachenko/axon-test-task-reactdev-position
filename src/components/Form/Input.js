import React from 'react'
import propTypes from 'prop-types'

const label = {
    margin: '10px'
};

const Input = ({children, name, value, onChange, pattern, title}) => (
    <div>
        <label style={label} htmlFor={name}>{children}</label>
        <input
            type="text"
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            pattern={pattern}
            title={title}
            required
        />
    </div>

);

Input.propTypes = {
    children: propTypes.node.isRequired,
    name: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    pattern: propTypes.string,
    title: propTypes.string
};

export default Input;