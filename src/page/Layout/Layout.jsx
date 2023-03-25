import { NavLink, Outlet } from "react-router-dom";
import styled from 'styled-components';
import {Header} from './Layout.styled';
import { Suspense } from "react";
import { Loader } from "components/Loader/Loader";

const StyledLink  = styled(NavLink)`
padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
olor: black;
font-weight: 500;

&.active {
    color: white;
    background-color: orangered;
}
`;


const Layout =()=> {
return(
<div>
    <header>
        <Header>
        <li>
            <StyledLink to= "/">Home</StyledLink>
        </li>
        <li>
            <StyledLink to= "/movies">Movies</StyledLink>
        </li>
    </Header>
    </header>
    <main>
    <Suspense fallback={<Loader/>}>
         <Outlet/>
    </Suspense>
   </main>
</div>

)};

export default Layout;