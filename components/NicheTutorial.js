 
import styled from "styled-components";
import Image from "next/image";

let NicheTutorialWrap = styled.div`
  background-color: white;
  padding: 2rem;

  h3 {
    color: gray;
    margin: 0;
    padding: 0;
  }
 
`;

export default function NicheTutorial(props) {
  return (
    <NicheTutorialWrap>
      <h3> {props.title}</h3>
      {/* <p>
        <Image src={props.image} width="300px" height="169px"></Image> {props.description}
      </p> */}
      <p>
        <a href={props.link} target="_blank">
          View
        </a>
      </p>
    </NicheTutorialWrap>
  );
}
