import React from 'react';
import styled from 'styled-components';
import Logos from '../atoms/Logos';
import Title from '../atoms/Title';

const StyledHeading = styled.div`
  width: 100%;
`;

const Heading = () => (
  <StyledHeading>
    <Logos />
    <Title />
  </StyledHeading>
);
export default Heading;
