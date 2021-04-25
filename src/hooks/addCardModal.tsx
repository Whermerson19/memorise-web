import { createContext, useContext, useState, useCallback } from "react";

interface IModalContextData {
  isOpen: boolean;
  handleOpenModal(): void;
  handleCloseModal(): void;
}

interface IAddCardModalProvider {
  children: React.ReactNode;
}

const ModalContext = createContext<IModalContextData>({} as IModalContextData);

export function useAddCardModal(): IModalContextData {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Invalid context");

  return context;
}

export default function AddCardModalProvider({
  children,
}: IAddCardModalProvider) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = useCallback(() => setIsOpen(false), []);
  const handleOpenModal = useCallback(() => setIsOpen(true), []);

  return (
    <ModalContext.Provider
      value={{ isOpen, handleOpenModal, handleCloseModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}
