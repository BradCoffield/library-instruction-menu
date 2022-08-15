import styled from "styled-components";
// import MenuItem from "../components/MenuItem";
import NicheTutorialWrap from "../components/NicheTutorial";

export default function AsyncInstruction() {
  return (
    <div>
      <h1>Asyncronous Instruction</h1>
      {/* <div id="urdjllkqjxb"></div> */}
      {/* <a class="a1s89zloke9"></a>
      <a class="xishiezxcah"></a>
      <a href="https://my.nicheacademy.com/rmcl/course/703" target="_blank">regliar mfing link</a> */}
      <h2>Database Tutorials</h2>
      <NicheTutorialWrap
        title="Academic OneFile"
        link="https://my.nicheacademy.com/rmcl/course/703"
        image="/AcademicOneFile.jpg"
      ></NicheTutorialWrap>
      <NicheTutorialWrap
        title="CINAHL Complete"
        link="https://my.nicheacademy.com/rmcl/course/6541"
      ></NicheTutorialWrap>
    </div>
  );
}
