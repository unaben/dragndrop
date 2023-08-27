import { toast } from "react-toastify";

export const notifySuccess = (message: string) =>
  toast(<p style={{ fontSize: 16 }}>{message}</p>, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    type: "success",
    theme:"colored"
  });

export const notifyError = (message: string) =>
  toast(<p style={{ fontSize: 16 }}>{message}</p>, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    type: "error",
    theme:"colored"
  });