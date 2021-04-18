export const { NODE_ENV, REACT_APP_SERVER_URL } = process.env;
export const IS_PROD = NODE_ENV === "production";

export const NAME = REACT_APP_SERVER_URL || "http://localhost:8080";
