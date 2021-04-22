import AuthProvider from "./auth";
import ToastProvider from "./toast";
import LayoutProvider from "./layout";

interface IAppProviderProps {
  children: React.ReactNode;
}

export default function AppProvider({ children }: IAppProviderProps) {
  return (
    <AuthProvider>
      <LayoutProvider>
        <ToastProvider>{children}</ToastProvider>
      </LayoutProvider>
    </AuthProvider>
  );
}
