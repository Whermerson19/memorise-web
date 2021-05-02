import AuthProvider from "./auth";
import ToastProvider from "./toast";
import LayoutProvider from "./layout";

import ModalProvider from "./modals";

interface IAppProviderProps {
  children: React.ReactNode;
}

export default function AppProvider({ children }: IAppProviderProps) {
  return (
    <AuthProvider>
      <LayoutProvider>
        <ToastProvider>
          <ModalProvider>{children}</ModalProvider>
        </ToastProvider>
      </LayoutProvider>
    </AuthProvider>
  );
}
