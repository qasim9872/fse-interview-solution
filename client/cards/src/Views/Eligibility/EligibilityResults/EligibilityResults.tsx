import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "../../../DesignSystem/Card";
import { useEligibilityStoreHook } from "../Eligibility.store";

const ResultsWrapper = styled.div`
  flex: 1 1 auto;
  padding-top: 48px;
  justify-content: center;
  margin: 0 -8px;
  display: flex;
  flex-wrap: wrap;
`;

type ResultPresenter = React.FC<{ results: string[] }>;

const EligibilityResults: ResultPresenter = ({ results }) => {
  return (
    <ResultsWrapper>
      {results.map((result) => (
        <Card key={result}> {result} </Card>
      ))}
    </ResultsWrapper>
  );
};

const withApplicationResultsHOC = (View: ResultPresenter) => () => {
  const [eligibilityState] = useEligibilityStoreHook();

  return <View results={eligibilityState.results} />;
};

export default withApplicationResultsHOC(EligibilityResults);
