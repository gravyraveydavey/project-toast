import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function addToast( toast ) {
    toast.id = crypto.randomUUID();
    setToasts( [...toasts, toast] );
  }

  function removeToast(id) {
    const newToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });
    setToasts(newToasts);
  }


  return (
    <ToastContext.Provider value={ { toasts, setToasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
