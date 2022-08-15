// 
//   /* title, description, timing */
// 
import styled from "styled-components";

let MenuItemWrap = styled.div`
background-color: white;
padding: 2rem;

h3{color: gray;margin:0;padding:0;}
div>span{text-transform:uppercase;font-size:1rem;letter-spacing:2px;}

`

export default function MenuItem(props) {
  return (
      <MenuItemWrap>
        <h3> {props.title}</h3>
        <p> {props.description}</p>
        <div><span>Approximate Length</span>: {props.timing}</div>
      </MenuItemWrap>
   
  );
}
