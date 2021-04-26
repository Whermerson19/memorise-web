import AuthProvider from "./auth";
import ToastProvider from "./toast";
import LayoutProvider from "./layout";
import AddCardModalProvider from "./addCardModal";
import EditCardModalProvider from "./editCardModal";

interface IAppProviderProps {
  children: React.ReactNode;
}

export default function AppProvider({ children }: IAppProviderProps) {
  return (
    <AuthProvider>
      <LayoutProvider>
        <AddCardModalProvider>
          <EditCardModalProvider>
            <ToastProvider>{children}</ToastProvider>
          </EditCardModalProvider>
        </AddCardModalProvider>
      </LayoutProvider>
    </AuthProvider>
  );
}
