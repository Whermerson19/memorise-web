import { createContext, useContext, useState, useCallback } from "react";

interface ICreateFolderContextData {
  isVisible: boolean;
  handleModalVisibility(value: boolean): void;
}

interface ICreateFolderProviderProps {
  children: React.ReactNode;
}

const CreateFolderContext = createContext<ICreateFolderContextData>(
  {} as ICreateFolderContextData
);

export function useCreateFolder(): ICreateFolderContextData {
  const context = useContext(CreateFolderContext);
  if (!context) throw new Error("Invalid context");

  return context;
}

export default function CreateFolderProvider({
  children,
}: ICreateFolderProviderProps) {
  const [isVisible, setIsVisible] = useState(false);

  const handleModalVisibility = useCallback((value: boolean) => {
    setIsVisible(value);
  }, []);

  return (
    <CreateFolderContext.Provider value={{ isVisible, handleModalVisibility }}>
      {children}
    </CreateFolderContext.Provider>
  );
}
