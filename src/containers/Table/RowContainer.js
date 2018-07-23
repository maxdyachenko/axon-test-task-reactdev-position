import {connect} from 'react-redux'
import Row from '../../components/Table/Row'
import {deleteData} from '../../actions'

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (id) => {
            dispatch(deleteData(id));
        },
        onEdit: (id) => {

        }
    };
};

export default connect(undefined, mapDispatchToProps)(Row);
