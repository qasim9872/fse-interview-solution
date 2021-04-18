import ProviderWithContextHoc from "../../utils/hoc/provider-with-context";

export const INITIAL_ELIGIBILITY_STATE = {
  applicationData: {
    name: "",
    email: "",
    address: "",
  },
  isReadyToBeSubmitted: false,
  results: [] as string[],
};

export const {
  Provider: EligibilityStoreProvider,
  useHook: useEligibilityStoreHook,
} = ProviderWithContextHoc(INITIAL_ELIGIBILITY_STATE);
