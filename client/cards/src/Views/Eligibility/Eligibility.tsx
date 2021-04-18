import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";

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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (eligibilityState.isReadyToBeSubmitted) {
      logger.debug("eligibility application is ready to be submitted");

      // call the orchestrator api
      const orchestrateEligibilityCheck = async () => {
        logger.info("Submitting application data");

        setIsLoading(true);
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

        setIsLoading(false);
        logger.info("Application is successfully submitted. ", eligibleCards);
        const isPlural = eligibleCards.length !== 1;
        logger.info(
          `You're eligible for ${eligibleCards.length} card${
            isPlural ? "s" : ""
          }`
        );

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
      {isLoading && (
        <ReactLoading
          className="absolute-loading-spinner"
          type={"spin"}
          color={"yellow"}
          height={"20%"}
          width={"20%"}
        />
      )}
      <EligibilityApplication />
      <EligibilityResults />
    </View>
  );
};

export default WrapComponentInProvidersHoc(Eligibility, [
  EligibilityStoreProvider,
]);
