import React from "react";
import styled from "styled-components";
import { useEligibilityStoreHook } from "../Eligibility.store";

const ResultsWrapper = styled.div`
  flex: 1 1 auto;
  padding-top: 48px;
  justify-content: center;
  margin: 0 -8px;
  display: flex;
  flex-wrap: wrap;
`;

const EligibilityResults = () => {
  const [eligibilityState] = useEligibilityStoreHook();

  return (
    <ResultsWrapper>
      {JSON.stringify(eligibilityState.applicationData)}
    </ResultsWrapper>
  );
};

export default EligibilityResults;
