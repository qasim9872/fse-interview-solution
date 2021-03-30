import React from "react";
import styled from "styled-components";
import CardsForm from "./Views/CardsForm";

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 40px;
`;

const App = () => {
  return (
    <AppWrapper>
      <CardsForm />
    </AppWrapper>
  );
};

export default App;
