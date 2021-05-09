import React, { ReactChildren, ReactChild } from 'react';
import styled from 'styled-components';
import Heading from '../molecules/Heading';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  height: 100%;
  max-height: 450px;
  background: ${(props) => props.theme.grey};
  padding: 35px;
`;

interface CardProps {
  children: ReactChild | ReactChildren | ReactChild[] | ReactChildren[];
}

const Card = ({ children }: CardProps) => (
  <StyledCard>
    <Heading />
    {children}
  </StyledCard>
);

export default Card;
