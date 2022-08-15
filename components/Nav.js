// import MainNavStyles from './styles/MainNavStyles';
// import NavLi from './NavLi';
// import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";
import styled from 'styled-components'

const StyledNav = styled.nav`
  padding: 2rem 0;
  text-align: center;
  color: white;
  background-color: var(--dark);
  background-image: var(--noise);
`;

export default function Nav() {
  return (
    <StyledNav>
     <h1><Link href="/">RMC Library Instruction Menu</Link></h1>
    </StyledNav>
    // <MainNavStyles>
    //   <div id="nav-left">
    //     <span id="h1-wrap">
    //       <h1>Ashley Kunsa</h1>
    //     </span>
    //   </div>
    //   <div id="nav-right" className="font-2">
    //     <NavLi />
    //   </div>
    //   <div id="hammy-wrap">
    //     <HamburgerMenu menuStatus={"closed"} />
    //   </div>
    // </MainNavStyles>
  );
}
