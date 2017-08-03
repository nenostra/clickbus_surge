import { connect } from 'react-redux';
import TripList from './components/TripList';

const mapStateToProps = ({ route }) => ({ route });

const mapDispatchToProps = dispatch => ({
    handleClick: () => dispatch({type: 'SEAT_MAP'})
});

const Results = connect(
  mapStateToProps,
  mapDispatchToProps
)(TripList);

export default Results;