import React from 'react'
import propTypes from 'prop-types'

const Button = ({children, action, id}) => (
    <button onClick={ () => action(id)}>{children}</button>
);

Button.propTypes = {
    children: propTypes.node.isRequired,
    action: propTypes.func.isRequired,
    id: propTypes.string.isRequired,
};

export default Button;
