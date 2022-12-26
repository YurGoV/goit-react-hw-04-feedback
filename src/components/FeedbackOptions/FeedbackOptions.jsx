import React from 'react';
import { Button, ButtonsStyle } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onVote, options }) => {

  const onVoteClick = vote => {
    console.log(vote.option);
    onVote(vote.option);
  };

  console.log(options);

  return (
    <ButtonsStyle>
      {options.map(option => (
          <Button type='button'
                  key={options.indexOf(option)}
                  vote={option}
                  onClick={() => onVoteClick({ option })}
          >{option}</Button>
        ),
      )

      }
    </ButtonsStyle>
  );
};

