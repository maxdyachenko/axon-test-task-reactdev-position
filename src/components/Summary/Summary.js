import React from 'react'
import Header from '../Header'
import propTypes from 'prop-types'

const Summary = ({numberOfUserByCity, sumOfAges, longestFullName}) => (
    <div>
        <Header>Summary</Header>
        <dl>
            <dt>>Count of user from kiev or Kiev</dt>
            <dd>{numberOfUserByCity}</dd>
            <dt>>um of three oldest user ages</dt>
            <dd>{sumOfAges}</dd>
            <dt>>Longest string of first name + last name</dt>
            <dd>{longestFullName}</dd>
        </dl>
    </div>
);

Summary.propTypes = {
    numberOfUserByCity: propTypes.number.isRequired,
    sumOfAges: propTypes.number.isRequired,
    longestFullName: propTypes.string.isRequired
};

export default Summary;