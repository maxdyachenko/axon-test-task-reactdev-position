import React, {Component} from 'react'
import Table from './containers/Table/TableContainer'
import Form from './containers/Form/FormContainer'
import Summary from './containers/Summary/SummaryContainer'

class App extends Component {
    state = {};

    render() {
        return (
            <div>
                <Table />
                <Summary />
                <Form />
            </div>
        );
    }
}

export default App;
