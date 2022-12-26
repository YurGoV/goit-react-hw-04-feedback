import React from 'react';
import { Statistic } from './Statistic.styled';
import { Positive } from './Statistic.styled';
import PropTypes from 'prop-types';


//todo: add options to display and calculate statistic !)
export const Statistics = ({ good, neutral, bad }) => {

  const totalFeedbacks = good + neutral + bad;

  const positivePercentage = () => {
    if (good === 0 && neutral === 0 && bad === 0) {
      return 0;
    }
    return Math.round(good / (good + neutral + bad) * 100);
  };
  const positivePercent = positivePercentage();

  return (
    <div>
      <Statistic>Good: {good}</Statistic>
      <Statistic>Neutral: {neutral}</Statistic>
      <Statistic>Bad: {bad}</Statistic>
      <Statistic>Total: {totalFeedbacks}</Statistic>
      <Positive data={positivePercent}>
        Positive feedback: {positivePercent}%</Positive>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
