import React from 'react';
import styled, { css } from 'styled-components';

const Label = styled.label`
  justify-self: center;
  max-width: 300px;
  width: 100%;
`;

export const StyledInput = styled.input`
  ${({ theme: { background, outline, primary, secondary } }) => css`
    background-color: ${background};
    border: 1px solid ${outline};
    color: ${primary};
    ::placeholder {
      color: ${secondary};
    }
    :focus {
      outline: 1px solid ${secondary};
      border-radius: 0;
    }
  `}
  padding: 10px 15px;
  width: 100%;
  font-size: 14px;
`;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ id, placeholder, className = '', ...rest }: InputProps) => (
  <Label htmlFor={id}>
    <StyledInput className={className} placeholder={placeholder} {...rest} />
  </Label>
);

export default Input;
