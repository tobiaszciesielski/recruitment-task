import React, { ReactChildren, ReactChild } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global';
import theme from '../../styles/theme';
import Card from '../organisms/Card';

interface LayoutProps {
  children: ReactChild | ReactChildren | ReactChild[] | ReactChildren[];
  wide?: boolean;
}

const Layout = ({ children, ...rest }: LayoutProps) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <Card {...rest}>{children}</Card>
    </>
  </ThemeProvider>
);

export default Layout;
