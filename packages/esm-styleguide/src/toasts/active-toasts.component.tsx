import React from "react";
import { Toast, ToastDescriptor } from "./toast.component";

export default function ActiveToasts({ subject }) {
  const [toasts, setToasts] = React.useState<Array<ToastDescriptor>>([]);
  const [toastsClosing, setToastsClosing] = React.useState([]);

  const closeToast = React.useCallback(
    (toast) => {
      if (!toastsClosing.some((t) => t === toast)) {
        setToastsClosing(toastsClosing.concat(toast));
      }
    },
    [toastsClosing]
  );

  React.useEffect(() => {
    const subscription = subject.subscribe((toast) =>
      setToasts((toasts) => [...toasts, toast])
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [subject]);

  React.useEffect(() => {
    if (toastsClosing.length > 0) {
      const timeoutId = setTimeout(() => {
        setToasts((toasts) =>
          toasts.filter(
            (toast) =>
              !toastsClosing.some((toastClosing) => toastClosing === toast)
          )
        );
        setToastsClosing([]);
      }, 200);

      return () => clearTimeout(timeoutId);
    }
  }, [toastsClosing]);

  return (
    <>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          toast={toast}
          isClosing={toastsClosing.some((t) => t === toast)}
          closeToast={closeToast}
        />
      ))}
    </>
  );
}
