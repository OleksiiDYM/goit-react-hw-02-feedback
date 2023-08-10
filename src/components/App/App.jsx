import Feedback from '../Feedback/Feedback';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, el) => acc + el, 0);

  countPositiveFeedbackPercentage = () => {
    const goodPercentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return !goodPercentage ? 0 : goodPercentage;
  };

  render() {
    return (
      <Feedback
        state={this.state}
        onLeaveFeedback={this.onLeaveFeedback}
        countTotalFeedback={this.countTotalFeedback}
        countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
      />
    );
  }
}
