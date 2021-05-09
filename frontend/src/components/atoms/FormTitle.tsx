import React from 'react';
import styled from 'styled-components';

const StyledFormTitle = styled.div`
  width: 100%;
  text-align: center;
  h2 {
    font-family: ${({ theme }) => theme.typography.ralewayRegular};
    font-size: 14px;
  }
  h1 {
    font-family: ${({ theme }) => theme.typography.robotoRegular};
    font-size: 18px;
  }
`;

const FormTitle = () => (
  <StyledFormTitle>
    <h2>Tobiasz Ciesielski’s</h2>
    <h1>RECRUITMENT TASK</h1>
  </StyledFormTitle>
);

export default FormTitle;
