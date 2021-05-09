import React from 'react';
import styled from 'styled-components';
import synapsi from '../../assets/synapsi.png';
import tcies from '../../assets/tcies.png';

const StyledLogos = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;

  .synapsi-img,
  .tcies-img-wrapper {
    width: 54px;
  }

  .tcies-img {
    width: 32px;
  }
`;

const X = styled.span`
  position: relative;
  width: 15px;
  height: 15px;
  margin: 0 5px;

  ::before,
  ::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 1px;
    background-color: ${({ theme }) => theme.outline};
    top: 50%;
    left: 0%;
  }

  ::before {
    transform: rotate(45deg);
  }

  ::after {
    transform: rotate(135deg);
  }
`;

const Logos = () => (
  <StyledLogos>
    <img className="synapsi-img" src={synapsi} alt="synapsi-logo" />
    <X />
    <div className="tcies-img-wrapper">
      <img className="tcies-img" src={tcies} alt="tcies-logo" />
    </div>
  </StyledLogos>
);

export default Logos;
