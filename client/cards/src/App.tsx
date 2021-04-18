import React from "react";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";

import Eligibility from "./Views/Eligibility";

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 40px;
`;

const App = () => {
  return (
    <AppWrapper>
      <Eligibility />
      <ToastContainer hideProgressBar={true} />
    </AppWrapper>
  );
};

export default App;
