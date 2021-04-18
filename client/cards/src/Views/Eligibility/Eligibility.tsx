import React from "react";
import View from "../../DesignSystem/View";
import { EligibilityStoreProvider } from "./Eligibility.store";
import EligibilityApplication from "./EligibilityApplication";
import EligibilityResults from "./EligibilityResults";

const Eligibility = () => {
  return (
    <View>
      <EligibilityStoreProvider>
        <EligibilityApplication />
        <EligibilityResults />
      </EligibilityStoreProvider>
    </View>
  );
};

export default Eligibility;
