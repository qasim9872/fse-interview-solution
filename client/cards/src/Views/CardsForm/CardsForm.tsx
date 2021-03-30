import React from "react";
import { useFormik } from "formik";
import styled from "styled-components";

import FormInput from "../../DesignSystem/Form/FormInput";
import SubmitButton from "../../DesignSystem/Form/SubmitButton";
import Title from "../../DesignSystem/Title";

const FormWrapper = styled.div`
  flex: 0 0 auto;
  width: 600px;
`;

interface FormValues {
  name: string;
  email: string;
  address: string;
}

const CardsForm = () => {
  const { handleChange, handleSubmit, values } = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      address: "",
    },
    onSubmit: (values) => console.log(values),
  });
  return (
    <FormWrapper>
      <Title>Cards</Title>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={values.name}
        />
        <FormInput
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={values.email}
        />
        <FormInput
          type="text"
          name="address"
          id="address"
          onChange={handleChange}
          value={values.address}
        />
        <SubmitButton text="Submit" />
      </form>
    </FormWrapper>
  );
};

export default CardsForm;
