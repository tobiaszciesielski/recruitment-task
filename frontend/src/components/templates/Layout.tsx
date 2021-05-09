import React, { ReactChildren, ReactChild } from 'react';
import styled from 'styled-components';
import GlobalStyles from '../../styles/global';

const FormWrapper = styled.div`
  width: 100%;
  max-width: 450px;
  height: 100%;
  max-height: 450px;
  background: ${(props) => props.theme.grey};
`;

interface LayoutProps {
  children: ReactChild | ReactChildren | ReactChild[] | ReactChildren[];
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <GlobalStyles />
    <FormWrapper>{children}</FormWrapper>
  </>
);

export default Layout;
