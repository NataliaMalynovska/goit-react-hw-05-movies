import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 12px;
  margin: 0px auto;
  padding: 0px;
`;

export const CastWrapper = styled.div`
  height: 320px;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 2px 1px -1px rgb(0 0 0 / 12%);
`;

export const CastName = styled.h4`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;
export const CastImg = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
`;
