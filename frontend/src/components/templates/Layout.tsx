import React, { ReactChildren, ReactChild } from 'react';

interface LayoutProps {
  children: ReactChild | ReactChildren;
}

const Layout = ({ children }: LayoutProps) => <div>{children}</div>;

export default Layout;
