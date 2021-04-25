import AuthProvider from "./auth";
import ToastProvider from "./toast";
import LayoutProvider from "./layout";
import AddCardModalProvider from "./addCardModal";

interface IAppProviderProps {
  children: React.ReactNode;
}

export default function AppProvider({ children }: IAppProviderProps) {
  return (
    <AuthProvider>
      <LayoutProvider>
        <AddCardModalProvider>
          <ToastProvider>{children}</ToastProvider>
        </AddCardModalProvider>
      </LayoutProvider>
    </AuthProvider>
  );
}
