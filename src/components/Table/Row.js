import React from 'react'
import propTypes from 'prop-types'
import Button from './Button'

const Row = ({item, onDelete, onEdit}) => (
    <tr>
        <td>{item.first_name}</td>
        <td>{item.last_name}</td>
        <td>{item.dob}</td>
        <td>{item.location}</td>
        <td>
            <Button action={onEdit} id={item.id}>Edit</Button>
            <Button action={onDelete} id={item.id}>Delete</Button>
        </td>
    </tr>
);

Row.propTypes = {
    item: propTypes.shape({
        first_name: propTypes.string,
        last_name: propTypes.string,
        dob: propTypes.string,
        location: propTypes.string,
    }),
    onDelete: propTypes.func.isRequired,
    onEdit: propTypes.func.isRequired
};

export default Row;
