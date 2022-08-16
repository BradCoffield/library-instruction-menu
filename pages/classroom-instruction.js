 
import MenuItem from "../components/MenuItem";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CheckboxItem from "../components/CheckboxItem";
import inPersonInstruction from "../data/inPersonInstruction";
import styled from "styled-components";

let Formwrap = styled.div`
  width: 550px;
  background: transparent;
  padding: 50px 0px 160px 0px;
  margin: auto;
  .form-unit {
    background-color: green;
    max-width: 90%;
    padding: 2rem;
    display: flex;
    flex-direction: column;

    input {
      height: 38px;
      border-radius: 5px;
      border: 0px;
    }
    .errorMessage {
      text-transform: uppercase;
      font-size: 0.8em;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      color: red;
    }
  }
`;

export default function ClassroomInstruction() {
  return (
    <div>
      <h1>Classroom Instruction</h1>
      <p>
        Peruse the "menu" options and send in your "order" at the bottom of the
        page, if you'd like. Otherwise, please feel free to reach out to arrange
        instruction in your class(es).{" "}
      </p>
      {/* <MenuItem title="Title1" timing="30m" description="Lorem eiusmod nulla sint excepteur dolore irure nisi pariatur officia ad adipisicing qui sunt proident. Veniam minim sit elit non occaecat elit esse ea exercitation. Laboris minim laboris qui ipsum commodo nisi amet est pariatur dolor adipisicing pariatur amet veniam. Ad adipisicing officia qui tempor ad do anim Lorem excepteur ut labore."></MenuItem> */}
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
        validate={(values) => {
          const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
          const errors = {};
          if (!values.name) {
            errors.name = "Name Required";
          }
          if (!values.email || !emailRegex.test(values.email)) {
            errors.email = "Valid Email Required";
          }
          //   if (!values.message) {
          //     errors.message = "Message Required";
          //   }
          return errors;
        }}
      >
        {(formikProps) => (
          <Form className="wrap-contact100">
            {/*
              Multiple checkboxes with the same name attribute, but different
              value attributes will be considered a "checkbox group". Formik will automagically
              bind the checked values to a single array for your benefit. All the add and remove
              logic will be taken care of for you.
            */}

            <div role="group" aria-labelledby="checkbox-group">
              {inPersonInstruction.map((sessionData) => (
                <CheckboxItem
                  key={sessionData.title}
                  title={sessionData.title}
                  timing={sessionData.timingInMinutes}
                  description={sessionData.description}
                ></CheckboxItem>
              ))}
            </div>
            <Formwrap>
              <h2>Place your 'order'!</h2>{" "}
              <div className="form-unit">
                <label htmlFor="name">Name: </label>
                <Field name="name" />
                <div className="errorMessage">
                  <ErrorMessage name="name" />
                </div>
              </div>
              <div className="form-unit">
                <label htmlFor="email">Email: </label>
                <Field name="email" />
                <div className="errorMessage">
                  <ErrorMessage name="email" className="errorMessage" />
                </div>
              </div>
              <div className="form-unit">
                {" "}
                <label htmlFor="message">Message: </label>
                <Field name="message" component="textarea" />
              </div>{" "}
              <div className="form-unit">
                {" "}
                Your selections:
                {/* {formikProps.values.menuItems} */}
                {formikProps.values.menuItems && formikProps.values.menuItems.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
              <button type="submit">Send</button>{" "}
            </Formwrap>
          </Form>
        )}
      </Formik>
    </div>
  );
}
