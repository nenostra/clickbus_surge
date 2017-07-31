import { connect } from 'react-redux';
import { Button } from './Button';

const mapStateToProps = state => {
  return {from: state.route.from}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleClick: () => {
    return dispatch({type: 'DATA_FETCH'})
  }
})

const ButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default ButtonContainer;
