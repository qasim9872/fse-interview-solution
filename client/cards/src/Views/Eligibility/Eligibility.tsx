import React, { useEffect } from "react";
import { ORCHESTRATE_ELIGIBILITY_CHECK } from "../../config/endpoint.config";

import View from "../../DesignSystem/View";
import WrapComponentInProvidersHoc from "../../utils/hoc/wrap-component-in-providers";
import { logger } from "../../utils/logger";
import {
  EligibilityStoreProvider,
  useEligibilityStoreHook,
} from "./Eligibility.store";
import EligibilityApplication from "./EligibilityApplication";
import EligibilityResults from "./EligibilityResults";

const Eligibility = () => {
  const [eligibilityState, setEligibilityState] = useEligibilityStoreHook();

  useEffect(() => {
    if (eligibilityState.isReadyToBeSubmitted) {
      logger.info("eligibility application is ready to be submitted");

      // call the orchestrator api
      const orchestrateEligibilityCheck = async () => {
        logger.info("orchestrating eligibility check");
        const response = await fetch(ORCHESTRATE_ELIGIBILITY_CHECK, {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(eligibilityState.applicationData),
        });
        const { eligibleCards } = await response.json();

        logger.info("eligible cards: ", eligibleCards);

        setEligibilityState((previousState) => ({
          ...previousState,
          isReadyToBeSubmitted: false,
          results: eligibleCards,
        }));
      };
      orchestrateEligibilityCheck();
    }
  }, [eligibilityState, setEligibilityState]);

  return (
    <View>
      <EligibilityApplication />
      <EligibilityResults />
    </View>
  );
};

export default WrapComponentInProvidersHoc(Eligibility, [
  EligibilityStoreProvider,
]);
