import { connect } from 'react-redux';
import * as timerActions from '../../redux/timer/timerActions';
import Timer from './Timer';

const mapStateToProps = state => {
  return {
    value: state.value,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: value => dispatch(timerActions.increment(value)),
    onDecrement: value => dispatch(timerActions.decrement(value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Timer);
