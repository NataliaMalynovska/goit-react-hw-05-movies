import styled from 'styled-components';

export const SearchbarBox = styled.div`
  // top: 0;
  // left: 0;
  // position: sticky;
  // z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  // min-height: 48px;
  padding: 12px 24px;
  // color: #fff;
`;
export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 2px 1px -1px rgb(0 0 0 / 12%);
  overflow: hidden;
`;
export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-color: #C0C0C0;
  background-size: 40%;
  background-repeat: no-repeat;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

:hover
  opacity: 1;
`;
export const SearchFormButtonLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;
export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 10px;
  padding-right: 4px;
  
::placeholder 
  font: inherit;
  font-size: 18px;
`;
