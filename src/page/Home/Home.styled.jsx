import styled from 'styled-components';

export const HomeContainer = styled.ul`
display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 5px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
    `

export const MovieItem = styled.li`
    background: rgb(255, 255, 255);
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    width: 100%;
    max-width: 260px;
    margin: 10px;
    border-radius: 5px;
    display: inline-block;
    text-decoration: none;
    color: black;
    transition-duration: 300ms;
    &:hover {
      cursor: pointer;
      transform: scale(1.03);
      box-shadow: rgb(0 0 0 / 8%) 0px 10px 25px;
    }
  `;

export const ImgMovie = styled.img`
  padding: 0px;
  margin: 0px;
  height: 300px;
  width: 100%;
  display: block;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;