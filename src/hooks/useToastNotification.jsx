import React, { useCallback } from "react";
import ToastNotification from "../components/ToastNotification/ToastNotification";
import { removeToast, showToast } from "../features/toast/toastSlice";
import { useDispatch, useSelector } from "react-redux";

const useToastNotification = () => {
  const dispatch = useDispatch()
  const { toastMsg } = useSelector((state) => state.toast);

  let timer;

  const toast = useCallback((notificationProps) => {
    clearTimeout(timer);
    dispatch(showToast(notificationProps))

    timer = setTimeout(() => {
      dispatch(removeToast())
    }, notificationProps.duration);
  }, []);


  const notificationComponent = toastMsg ? (
    <ToastNotification {...toastMsg} />
  ) : null;

  return { notificationComponent, toast };
};

export default useToastNotification;
