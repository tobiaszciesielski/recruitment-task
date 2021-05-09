import React, { ReactChildren, ReactChild } from 'react';
import styled from 'styled-components';
import GlobalStyles from '../../styles/global';
import FormHeader from '../molecules/FormHeader';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  height: 100%;
  max-height: 450px;
  background: ${(props) => props.theme.grey};
  padding: 35px;
`;

interface LayoutProps {
  children: ReactChild | ReactChildren | ReactChild[] | ReactChildren[];
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <GlobalStyles />
    <FormWrapper>
      <FormHeader />
      {children}
    </FormWrapper>
  </>
);

export default Layout;
