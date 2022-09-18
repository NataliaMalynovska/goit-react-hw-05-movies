import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: flex;
  width: 120px;
  margin-left: 8px;
  padding: 8px 16px;
  color: black;
  font-weight: 500;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 2px 1px -1px rgb(0 0 0 / 12%);

  :hover {
    color: white;
    background-color: #3f51b5;
    transform: scale(1.03);
  }
`;

export const BackLink = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};
