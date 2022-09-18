import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 8px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  width: 100px;
  margin-left: 10px;
  padding: 8px 16px;
  border-radius: 4px;
  color: black;
  font-weight: 500;
  box-shadow: 0px 1px 3px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 2px 1px -1px rgb(0 0 0 / 12%);
  :hover,
  :focus {
    color: white;
    background-color: #3f51b5;
    transform: scale(1.03);
  }
  &.active {
    color: white;
    background-color: #3f51b5;
  }
`;
