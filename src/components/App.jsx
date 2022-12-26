import React, { Component } from 'react';
import { Stat } from './App.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { NoFeedbackNotification } from './Notification/Notification';

export class App extends Component {

  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  };



  changeVoteState = (data) => {
    this.setState(prevState => ({
      [data]: prevState[data] + 1,
    }));
  };

  isFeedback = () => this.state.good > 0 || this.state.neutral > 0 || this.state.bad > 0;


  render() {
    const { good, neutral, bad } = this.state;

    return (

      <Section title='Please Leave Feedback'>

        <FeedbackOptions
          options={Object.keys(this.state)}
          onVote={this.changeVoteState}>
        </FeedbackOptions>

        <Stat isData={this.isFeedback()}>Statistics</Stat>
        {this.isFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}>
          </Statistics>
        ) : (
          <NoFeedbackNotification message='There is no feedback'></NoFeedbackNotification>
        )}

      </Section>
    );
  }
}

