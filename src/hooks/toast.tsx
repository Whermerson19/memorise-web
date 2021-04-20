import { createContext, useContext, useCallback } from "react";
import { toast, ToastContainer } from "react-toastify";

interface IToastData {
  message: string;
  type: string;
}

interface IToastContext {
  showToast(data: IToastData): void;
}

interface IToastProvider {
  children: React.ReactNode;
}

const ToastContext = createContext<IToastContext>({} as IToastContext);

export function useToast(): IToastContext {
  const context = useContext(ToastContext);

  if (!context) throw new Error("Invalid context");

  return context;
}

export default function ToastProvider({ children }: IToastProvider) {
  const showToast = useCallback(({ message, type }) => {
    toast(message, {
      type,
    });
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        closeOnClick
        pauseOnHover
      />
    </ToastContext.Provider>
  );
}
