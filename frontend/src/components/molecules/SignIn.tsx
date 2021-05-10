import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Spinner from '../atoms/Spinner';
import { useAuth } from '../../context/auth';

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

const Message = styled.h4`
  position: absolute;
  bottom: 100%;
  color: ${({ theme }) => theme.secondary};
  font-family: ${({ theme }) => theme.typography.robotoRegular};
  font-size: 14px;
`;

const Buttons = styled.div`
  position: relative;
`;

interface FormData {
  password: string;
}

const SignIn = () => {
  const [responseMessage, setResponseMessage] = useState<string>('');
  const history = useHistory();
  const { signin } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async ({ password }) => {
    const msg = await signin(password);
    setResponseMessage(msg);
  });

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledInput placeholder="password" id="password" register={register} />
      <Buttons>
        {responseMessage !== '' && <Message>{responseMessage}</Message>}
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <Spinner white /> : 'Sing in'}
        </Button>
        <Separator>OR</Separator>
        <Button type="button" light onClick={() => history.push('/signup')}>
          Sing up
        </Button>
      </Buttons>
    </StyledForm>
  );
};

export default SignIn;
