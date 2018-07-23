import {connect} from 'react-redux'
import Table from '../../components/Table/Table'
import {getData} from '../../selectors'

const mapStateToProps = (state) => {
    return {
        data: getData(state)
    }
};

export default connect(mapStateToProps)(Table);
