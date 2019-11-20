import { connect } from 'react-redux';
import Timer from './Timer';
import * as timerActions from '../../redux/timer/timerActions';
import timerSelectors from '../../redux/timer/timerSelectors';

const mapStateToProps = state => {
  return {
    value: timerSelectors.getTimerValue(state),
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
