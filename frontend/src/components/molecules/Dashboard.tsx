import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../../context/auth';
import Button from '../atoms/Button';

const Header = styled.h1`
  text-align: center;
  font-size: 36px;
  font-family: ${({ theme }) => theme.typography.ralewayRegular};
  color: ${({ theme }) => theme.primary};
`;

const StyledDashboard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <StyledDashboard>
      <Header>Welcome {`${user?.firstName} ${user?.lastName}`}</Header>
      <Button onClick={() => logout()} type="button">
        Log out
      </Button>
    </StyledDashboard>
  );
};

export default Dashboard;
