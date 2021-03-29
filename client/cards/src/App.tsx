import React from "react";
import { Formik, Form } from "formik";
import styled from "styled-components";
import FormInput from "./DesignSystem/FormInput";
import SubmitButton from "./DesignSystem/SubmitButton";

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const FormWrapper = styled.div`
  flex: 0 0 auto;
  width: 600px;
`;

const App = () => {
  return (
    <>
      <h1>Cards</h1>

      <AppWrapper>
        <FormWrapper>
          <Formik onSubmit={() => console.log("sdsf")} initialValues={{}}>
            <Form>
              <FormInput
                type="text"
                name="name"
                id="name"
                onChange={() => console.log("hello")}
              />
              <FormInput
                type="email"
                name="email"
                id="email"
                onChange={() => console.log("hello")}
              />
              <FormInput
                type="text"
                name="address"
                id="address"
                onChange={() => console.log("hello")}
              />
              <SubmitButton
                text="Submit"
                onSubmit={() => console.log("submit")}
              />
            </Form>
          </Formik>
        </FormWrapper>
      </AppWrapper>
    </>
  );
};

export default App;
