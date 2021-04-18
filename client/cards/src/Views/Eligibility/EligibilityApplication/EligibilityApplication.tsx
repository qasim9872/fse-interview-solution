import React from "react";
import { useFormik } from "formik";
import styled from "styled-components";

import FormInput from "../../../DesignSystem/Form/FormInput";
import SubmitButton from "../../../DesignSystem/Form/SubmitButton";
import Title from "../../../DesignSystem/Title";
import {
  INITIAL_ELIGIBILITY_STATE,
  useEligibilityStoreHook,
} from "../Eligibility.store";
import { logger } from "../../../utils/logger";

const FormWrapper = styled.div`
  flex: 1 1 auto;
  width: 100%;
`;

interface FormValues {
  name: string;
  email: string;
  address: string;
}

const EligibilityApplication = () => {
  const [eligibilityState, setEligibilityState] = useEligibilityStoreHook();

  const { handleChange, handleSubmit, values } = useFormik<FormValues>({
    initialValues: INITIAL_ELIGIBILITY_STATE.applicationData,
    onSubmit: (applicationData, { resetForm }) => {
      logger.info("submitting application data", applicationData);
      setEligibilityState((previousState) => ({
        ...previousState,
        isReadyToBeSubmitted: true,
        applicationData,
      }));
      resetForm();
    },
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
          placeholder="Name"
          autoComplete="name"
        />
        <FormInput
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={values.email}
          placeholder="Email"
          autoComplete="email"
        />
        <FormInput
          type="text"
          name="address"
          id="address"
          onChange={handleChange}
          value={values.address}
          placeholder="Address"
          autoComplete="street-address"
        />
        <SubmitButton text="Submit" />
      </form>
    </FormWrapper>
  );
};

export default EligibilityApplication;
