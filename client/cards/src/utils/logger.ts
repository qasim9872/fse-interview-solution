import { toast } from "react-toastify";

class MyLogger {
  debug(message: string, data?: any) {
    console.log(message, data);
  }

  info(message: string, data?: any) {
    console.info(message, data);
    toast(message, { type: "info" });
  }

  warn(message: string, data?: any) {
    console.warn(message, data);
    toast(message, { type: "warning" });
  }

  error(message: string, data?: any) {
    console.error(message, data);
    toast(message, { type: "error" });
  }
}

export const logger = new MyLogger();
