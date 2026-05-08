import React from "react";
import {Toaster} from "sonner";

export function ToastProvider({children}) {
  return (
    <>
      {children}
      <Toaster
        position="top-center"
        richColors
        closeButton
        toastOptions={{
          style: {
            fontFamily:
              "\"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif",
          },
        }}
      />
    </>
  );
}
