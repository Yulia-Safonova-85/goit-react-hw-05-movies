import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
`;

export const SearchInput = styled.input`

    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    padding-left: 8px;
    padding-right: 8px;
    margin-left: 10px;
`;

export const SearchButton = styled.button`
   display: inline-block;
    width: 48px;
    height: 40px;
    border: 0;
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    &:hover{
opacity: 1
    }
    `;

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  padding: 0;
`;

export const MovieItem = styled.li`
  background: rgb(255, 255, 255);
  width: 100%;
  max-width: 200px;
  margin: 10px;
  border-radius: 5px;
  display: inline-block;
  text-decoration: none;
  color: black;
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: rgb(0 0 0 / 8%) 0px 10px 25px;
  }
`;
 
export const MovieImg = styled.img`
  padding: 0px;
  margin: 0px;
  height: 260px;
  width: 100%;
  display: block;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;



