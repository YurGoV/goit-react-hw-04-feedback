import styled from '@emotion/styled';

export const Stat = styled.h2`
  font-size: 22px;
  ${props => props.isData > 0 ? 'font-weight: normal; text-decoration: underline;'
    : 'font-weight: lighter'};
`;
