import { connect } from 'react-redux';
import { TripList } from './TripList';

const mapStateToProps = state => {
  return {route: state.route}
}

const TripContainer = connect(
  mapStateToProps
)(TripList)

export default TripContainer;
