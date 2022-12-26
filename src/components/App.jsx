import {useState} from "react";
import { Stat } from './App.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { NoFeedbackNotification } from './Notification/Notification';


const keys = ['good', 'neutral', 'bad']

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const changeVoteState = (data) => {
    data === 'good' ? setGood(good + 1) :
      data === 'neutral' ? setNeutral(neutral + 1) :
        data === 'bad' ? setBad(bad + 1) : console.log('error: no vote value');
  }
    // console.log('data: ', data);

  const isFeedback = () => good > 0 || neutral > 0 || bad > 0;


  return (

    <Section title='Please Leave Feedback'>

      <FeedbackOptions
        options={keys}
        onVote={changeVoteState}>
      </FeedbackOptions>

      <Stat isData={isFeedback()}>Statistics</Stat>
      {isFeedback() ? (
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

