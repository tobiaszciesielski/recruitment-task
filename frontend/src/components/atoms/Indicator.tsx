import React from 'react';
import styled from 'styled-components';
import { ImSpinner2 } from 'react-icons/im';

const StyledSpinner = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;

  svg {
    color: ${({ theme }) => theme.primary};
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

const Spinner = () => (
  <StyledSpinner>
    <ImSpinner2 />
  </StyledSpinner>
);

export default Spinner;
