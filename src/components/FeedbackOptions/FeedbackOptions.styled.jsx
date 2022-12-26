import styled from '@emotion/styled';

export const ButtonsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 280px;
  margin: 10px 0;
`;


export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 3px;
  font-weight: bold;
  height: 30px;
  min-width: 80px;
  //color: #f69090;

  &:hover {
    background-color: ${props => props.vote === 'good' ? '#a7f8a7'
      : props.vote === 'neutral' ? '#fdfd91'
        : '#f69090'};
  }
`;
