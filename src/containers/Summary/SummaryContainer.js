import {connect} from 'react-redux'
import Summary from '../../components/Summary/Summary'
import {getNumberOfUsersByCity, getSumOfOldestAges, getLongestFullName} from '../../selectors'


const mapStateToProps = (state) => {
    return {
        data: state.data,
        numberOfUserByCity: getNumberOfUsersByCity(state),
        sumOfAges: getSumOfOldestAges(state),
        longestFullName: getLongestFullName(state)
    }
};

export default connect(mapStateToProps)(Summary);
