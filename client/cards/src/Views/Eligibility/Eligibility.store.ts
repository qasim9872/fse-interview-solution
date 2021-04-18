import ProviderWithContextHoc from "../../utils/hoc/provider-with-context";

export const INITIAL_ELIGIBILITY_STATE = {
  applicationData: {
    name: "",
    email: "",
    address: "",
  },
  results: {},
};

export const {
  Provider: EligibilityStoreProvider,
  useHook: useEligibilityStoreHook,
} = ProviderWithContextHoc(INITIAL_ELIGIBILITY_STATE);
