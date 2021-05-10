import React, { ReactChildren, ReactChild } from 'react';
import styled from 'styled-components';
import Heading from '../molecules/Heading';

const StyledCard = styled.div<Pick<CardProps, 'wide'>>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ wide }) => (wide ? '800px' : '450px')};
  height: 100%;
  max-height: 450px;
  background: ${(props) => props.theme.grey};
  padding: 35px;
`;

interface CardProps {
  children: ReactChild | ReactChildren | ReactChild[] | ReactChildren[];
  wide?: boolean;
}

const Card = ({ children, wide = false }: CardProps) => (
  <StyledCard wide={wide}>
    <Heading />
    {children}
  </StyledCard>
);

export default Card;
