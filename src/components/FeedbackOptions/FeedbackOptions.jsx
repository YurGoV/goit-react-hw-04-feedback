import React from 'react';
import {Button, ButtonsStyle} from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({onVote, options}) => {

  const onVoteClick = vote => {
    onVote(vote.option);
  };

  return (
    <ButtonsStyle>
      {options.map(option => (
          <Button type='button'
                  key={options.indexOf(option)}
                  vote={option}
                  onClick={() => onVoteClick({option})}
          >{option}</Button>
        ),
      )}
    </ButtonsStyle>
  );
};

FeedbackOptions.propTypes = {
  onVote: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
}

