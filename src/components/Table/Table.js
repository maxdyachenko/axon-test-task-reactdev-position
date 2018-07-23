import React from 'react'
import Header from '../Header'
import Head from './Head'
import Row from '../../containers/Table/RowContainer'
import propTypes from 'prop-types'
import uuid from 'uuid'

const Table = ({data}) => (
    <div>
        <Header>Table</Header>
        <table>
            <Head />
            <tbody>
            {
                data.map( item => <Row key={uuid()} item={item} /> )
            }
            </tbody>
        </table>
    </div>
);

Table.propTypes = {
    data: propTypes.arrayOf(propTypes.object),
};

export default Table;
