import React from 'react';
import styled from 'styled-components';
import Logos from '../atoms/Logos';
import FormTitle from '../atoms/FormTitle';

const StyledFormHeader = styled.div`
  width: 100%;
`;

const FormHeader = () => (
  <StyledFormHeader>
    <Logos />
    <FormTitle />
  </StyledFormHeader>
);
export default FormHeader;
