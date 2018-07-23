import React from 'react'
import propTypes from 'prop-types'

const Header = ({children}) => (
    <h1>{children}</h1>
);

Header.propTypes = {
    children: propTypes.node.isRequired
};

export default Header;