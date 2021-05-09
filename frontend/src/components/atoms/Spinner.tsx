import React from 'react';
import styled from 'styled-components';
import { ImSpinner2 } from 'react-icons/im';

const StyledSpinner = styled.div<SpinnerProps>`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;

  svg {
    color: ${({ theme, white }) => (white ? theme.background : theme.primary)};
    animation-name: spin;
    animation-duration: 500ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

interface SpinnerProps {
  white?: boolean;
}

const Spinner = ({ white = false }: SpinnerProps) => (
  <StyledSpinner white={white}>
    <ImSpinner2 />
  </StyledSpinner>
);

export default Spinner;
