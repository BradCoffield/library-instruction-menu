import { Formik, Form, Field, ErrorMessage } from "formik"; 
//
//   /* title, description, timing */
//
import styled from "styled-components";
// let menuItemTitle = styled.span`
// font-size:24px;
// `
const Unit = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  line-height: 1.2;
  font-weight: bold; */
  /* background-color: white; */
  /* margin: 2rem 0rem; */
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  

  .form-control {
    font-family: system-ui, sans-serif;
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.1;
    display: grid;
    grid-template-columns: 1em auto;
    gap: 0.5em;
  }

  .form-control + .form-control {
    margin-top: 1em;
  }

  .form-control--disabled {
    color: var(--form-control-disabled);
    cursor: not-allowed;
  }

  input[type="checkbox"] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* Remove most all native input styles */
    appearance: none;
    /* For iOS < 15 */
    background-color: aliceblue;
    /* Not removed via appearance */
    margin: 0;
    padding-left: 10px;

    font: inherit;
    color: #333;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid #333;
    border-radius: 0.15em;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;
  }

  input[type="checkbox"]::before {
    content: "";
    width: 1em;
    height: 1em;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color);
    /* Windows High Contrast Mode */
    background-color: CanvasText;
  }

  input[type="checkbox"]:checked::before {
    transform: scale(1);
  }

  input[type="checkbox"]:focus {
    outline: max(2px, 0.15em) solid #333;
    outline-offset: max(2px, 0.15em);
  }

  input[type="checkbox"]:disabled {
    --form-control-color:gray;

    color: var(--form-control-disabled);
    cursor: not-allowed;
  }

  /* p {
    background-color: #333;
  } */

  /* &::before {
    content: "◀";
    margin: 0 10px;
  } */
`;

export default function CheckboxItem(props) {
  return (
    <Unit>
      <Field className="form-control" type="checkbox" name="menu-items" value={props.title} />
      <label htmlFor={props.title}>{props.title}  </label>
      <p>{props.description}</p>
    </Unit>
  );
}