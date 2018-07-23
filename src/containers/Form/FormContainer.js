import React, {Component} from 'react'
import {connect} from 'react-redux'
import Form from '../../components/Form/Form'
import {dataSubmitted} from '../../actions'
import uuid from 'uuid'
import moment from 'moment'

const INIT_STATE = {
    'id': uuid(),
    'first_name': '',
    'last_name': '',
    'dob': 'dd.mm.yyyy',
    'location': '',
    'error': ''
};

class FormContainer extends Component {
    state = {
        ...INIT_STATE
    };

    onChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;

        this.setState({
            [key]: value
        })
    };

    onSubmit = (event) => {
        event.preventDefault();

        this.validateDate()
    };

    submitData = () => {
        const {error, ...data} = this.state;

        this.props.onSubmit(data);

        this.setState(INIT_STATE);
    };

    validateDate = () => {
        if (moment(this.state.dob, 'DD.MM.YYYY').isValid()) {
            this.setState({dob: moment(this.state.dob, 'DD.MM.YYYY').format('DD.MM.YYYY') }, this.submitData);
            return true;
        }
        this.setState({error: 'please type correct date'});
        return false;
    };

    render() {
        return (
            <Form
                state={this.state}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
            />
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => {
            dispatch(dataSubmitted(data))
        }
    }
};

export default connect(undefined, mapDispatchToProps)(FormContainer);
