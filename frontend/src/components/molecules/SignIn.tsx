import React from 'react';
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

interface FormData {
  password: string;
}

const SignIn = () => {
  const history = useHistory();
  const { signin } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => signin(data.password));

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledInput placeholder="password" id="password" register={register} />
      <div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <Spinner white /> : 'Sing in'}
        </Button>
        <Separator>OR</Separator>
        <Button type="button" light onClick={() => history.push('/signup')}>
          Sing up
        </Button>
      </div>
    </StyledForm>
  );
};

export default SignIn;
