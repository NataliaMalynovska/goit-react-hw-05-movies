import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContainerInfo = styled.div`
  padding: 8px 36px;
`;
export const MovieTitle = styled.h3`
  margin-top: 8px;
  margin-bottom: 8px;
  color: #3f51b5;
`;
export const InfoTitle = styled.h4`
  margin-top: 8px;
  margin-bottom: 8px;
`;
export const InfoContent = styled.span`
  padding: 8px 16px;
`;

export const MovieImg = styled.img`
  display: block;
  max-width: 280px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 2px 1px -1px rgb(0 0 0 / 12%);
`;

export const StyledLink = styled(NavLink)`
  width: 100px;
  border-radius: 2px;
  margin-left: 10px;
  padding: 8px 16px;

  border-radius: 4px;
  text-decoration: none;
  color: black;

  font-weight: 500;
  background-color: #fff;
  box-shadow: 0px 1px 3px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 2px 1px -1px rgb(0 0 0 / 12%);
  :hover {
    color: white;
    background-color: #3f51b5;
    transform: scale(1.03);
  }
  &.active {
    color: white;
    background-color: #3f51b5;
  }
`;
