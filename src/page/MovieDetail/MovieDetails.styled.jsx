import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieContainer = styled.div`
  display: flex;
  padding: 30px;
  background-color: #3f51b542;
  margin: 20px 30px 30px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export const ImgMovie = styled.img`
  width: 250px;
`;

export const MovieInfo = styled.div`
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const AboutInfo = styled.h3`
  margin-left: 35px;
  margin-bottom: 0;
`;

export const InfoLink = styled(Link)`
  color: darkblue;
  font-weight: 600;
  
  &.active {
    color: orangered;
    font-weight: 700;
    transform: scale(1.1);
  }
 
`;