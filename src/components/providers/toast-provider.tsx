"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ToastProvider() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={4000}
      hideProgressBar
      newestOnTop
      closeOnClick
      pauseOnFocusLoss
      draggable={false}
      theme="dark"
      toastClassName="!bg-surface !text-foreground !border !border-subtle !font-sans !text-sm"
    />
  );
}
