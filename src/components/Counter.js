import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Controls from './Controls';

export default class Counter extends Component {
  static propTypes = {
    step: PropTypes.number,
    initialValue: PropTypes.number,
  };

  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
    stepValueFromInput: this.props.step,
  };

  inputIds = {
    step: shortid.generate(),
  };

  componentDidMount() {}

  handleStepChange = evt => {
    this.setState({
      stepValueFromInput: Number(evt.target.value),
    });
  };

  handleIncrement = number => {
    console.log(number);
    this.setState(prevState => ({
      value: prevState.value + prevState.stepValueFromInput,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - prevState.stepValueFromInput,
    }));
  };

  render() {
    const { stepValueFromInput, value } = this.state;

    return (
      <div>
        <label htmlFor={this.inputIds.step}>
          Step
          <input
            type="number"
            name="step"
            onChange={this.handleStepChange}
            value={stepValueFromInput}
            id={this.inputIds.step}
          />
        </label>

        <span className="Counter__value">{value}</span>
        <p>{value % 3 === 0 ? '✅' : '❌'}</p>

        <Controls
          step={stepValueFromInput}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}
