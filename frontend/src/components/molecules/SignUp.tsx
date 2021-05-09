import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  label:last-of-type {
    margin-bottom: 20px;
  }
`;

// const Separator = styled.div`
//   text-align: center;
//   font-family: ${({ theme }) => theme.typography.robotoRegular};
//   font-size: 14px;
//   color: ${({ theme }) => theme.outline};
//   margin: 3px;
// `;

const StyledInput = styled(Input)`
  margin-bottom: 12px;
`;

const SignUp = () => (
  <StyledForm action="submit">
    <StyledInput id="firstName" placeholder="first name" />
    <StyledInput id="secondName" placeholder="second name" />
    <StyledInput id="password" placeholder="password" />
    <Button type="submit">Sign up</Button>
  </StyledForm>
);

export default SignUp;
