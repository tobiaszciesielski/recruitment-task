import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useAuth } from '../../context/auth';
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

const StyledInput = styled(Input)`
  margin-bottom: 12px;
`;

interface FormData {
  firstName: string;
  lastName: string;
  password: string;
}

const SignUp = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const { signup } = useAuth();
  const onSubmit = handleSubmit((data) => signup(data));

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledInput
        id="firstName"
        placeholder="First Name"
        register={register}
      />
      <StyledInput
        id="lastName"
        placeholder="Second Name"
        register={register}
      />
      <StyledInput id="password" placeholder="Password" register={register} />
      <Button type="submit">Sign up</Button>
    </StyledForm>
  );
};

export default SignUp;
