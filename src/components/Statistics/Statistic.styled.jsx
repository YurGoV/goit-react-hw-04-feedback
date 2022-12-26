import styled from '@emotion/styled';

export const Statistic = styled.p`
  font-size: 18px;
`;

export const Positive = styled.p`
  font-size: 18px;


  ${props => props.data > 0 && 'color: green; text-decoration: underline;'};
  ${props => props.data > 50 && 'text-shadow: 1px 0px 1px lightgreen;'};
`;

