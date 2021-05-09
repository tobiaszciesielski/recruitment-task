import React, { ReactChildren, ReactChild } from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  outline: none;
  font-size: 16px;
  padding: 12px 80px;

  ${({ theme: { touch, background, primary }, light }) =>
    light
      ? css`
          background-color: rgba(0, 0, 0, 0);
          border: 1px solid ${touch};
          color: ${primary};
          :hover {
            background-color: rgba(0, 0, 0, 0.1);
          }
        `
      : css`
          background-color: ${touch};
          border: none;
          color: ${background};
          :hover {
            opacity: 0.8;
            color: ${background};
          }
        `}
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  light?: boolean;
  children: ReactChild | ReactChildren | ReactChild[] | ReactChildren[];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ light = false, children, ...rest }: ButtonProps) => (
  <StyledButton light={light} {...rest}>
    {children}
  </StyledButton>
);

export default Button;
