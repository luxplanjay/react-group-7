/* eslint-disable */
import React, { Component } from 'react';

export default class Quiz extends Component {
  state = {
    questionIdx: 0,
  };

  render() {
    console.table(this.props);

    return (
      <div>
        <h2>Quiz</h2>
        <p>{this.props.questions[this.state.questionIdx]}</p>
      </div>
    );
  }
}
