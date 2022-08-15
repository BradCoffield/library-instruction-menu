import styled from 'styled-components'

const FooterStyled = styled.footer`
  text-align: center;
  font-size: 1rem;
  background-color: var(--dark);
  background-image: var(--noise);
  padding: 2rem 0px;
  color: white;
  margin-top: 4rem;
  a {
    text-decoration: 0px solid black;
  }
  a:hover {
    border-bottom: 1px solid white;
  }
`;

const Footer = () => {
    return <FooterStyled> <a href="https://www.rocky.edu/library">RMC Library</a></FooterStyled>;
}
 
export default Footer;