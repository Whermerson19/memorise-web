import AddCardModalProvider from "./addCardModal";
import CreateFolderProvider from "./createFolderModal";
import EditCardModalProvider from "./editCardModal";

interface IModalProviderProps {
  children: React.ReactNode;
}

export default function ModalProvider({ children }: IModalProviderProps) {
  return (
    <AddCardModalProvider>
      <EditCardModalProvider>
        <CreateFolderProvider>{children}</CreateFolderProvider>
      </EditCardModalProvider>
    </AddCardModalProvider>
  );
}
