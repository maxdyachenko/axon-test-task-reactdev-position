import axios from 'axios'

const getInitData = (data) => ({type: 'GET_DATA', data});

export const initApp = () => {
    return (dispatch) => {
        axios.get('/users')
            .then( response => dispatch(getInitData(response.data)))
            .catch( err => console.log(err));
    }
};

const deleteRow = (id) => ({type: 'DELETE_ROW', id});

export const deleteData = (id) => {
    return (dispatch) => {
        axios.delete(`/users/${id}`)
            .then(dispatch(deleteRow(id)))
            .catch( err => console.log(err));
    }
};

const addRow = (data) => ({type: 'ADD_ROW', data});

export const dataSubmitted = (data) => {
    return (dispatch) => {
        axios.post('/users', data)
            .then(dispatch(addRow(data)))
            .catch(err => console.log(err))
    }
};