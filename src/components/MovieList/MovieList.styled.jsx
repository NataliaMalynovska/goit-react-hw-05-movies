import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 8px;
  margin: 0px auto;
  padding: 0px;
`;
export const Item = styled.li`
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    transform: scale(1.03);
  }
`;
export const Card = styled(Link)`
  // display: block;
  // overflow: hidden;
`;
