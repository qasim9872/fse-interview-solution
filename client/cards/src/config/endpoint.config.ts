export const { NODE_ENV, REACT_APP_SERVER_URL } = process.env;
export const IS_PROD = NODE_ENV === "production";

export const BASE_URL = REACT_APP_SERVER_URL || "http://localhost:8080";
export const ORCHESTRATE_ELIGIBILITY_CHECK = `${BASE_URL}/orchestrate/eligibility-check`;
