import React from 'react';
import { useHistory } from 'react-router-dom';
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
`;

const Separator = styled.div`
  text-align: center;
  font-family: ${({ theme }) => theme.typography.robotoRegular};
  font-size: 14px;
  color: ${({ theme }) => theme.outline};
  margin: 3px;
`;

const StyledInput = styled(Input)`
  margin-bottom: 50px;
`;

const SignIn = () => {
  const history = useHistory();

  return (
    <StyledForm action="submit">
      <StyledInput placeholder="password" id="password" />
      <div>
        <Button type="submit">Sign in</Button>
        <Separator>OR</Separator>
        <Button type="button" light onClick={() => history.push('/signup')}>
          Sign in
        </Button>
      </div>
    </StyledForm>
  );
};

export default SignIn;
