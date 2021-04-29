import { createContext, useCallback, useContext, useState } from "react";

interface ICardInfo {
  id?: string;
  front?: string;
  versus?: string;
}

interface IEditCardModalContext {
  isVisible: boolean;
  buttonAvailable: boolean;
  removeContainerVisibility: boolean;
  cardInfo: ICardInfo;
  handleModalVisibility(data?: ICardInfo): void;
  handleButtonAvailability(): void;
  handleActivateRemoveContainerVisibility(value: boolean): void;
}

interface IEditCardModalProvider {
  children: React.ReactNode;
}

const EditCardModalContext = createContext<IEditCardModalContext>(
  {} as IEditCardModalContext
);

export function useEditCardModalContext(): IEditCardModalContext {
  const context = useContext(EditCardModalContext);
  if (!context) throw new Error("Invalid context");
  return context;
}

export default function EditCardModalProvider({
  children,
}: IEditCardModalProvider) {
  const [isVisible, setIsVisible] = useState(false);
  const [buttonAvailable, setButtonAvailable] = useState(false);
  const [removeContainerVisibility, setRemoveContainerVisibility] = useState(
    false
  );

  const [cardInfo, setCardInfo] = useState<ICardInfo>({} as ICardInfo);

  const handleModalVisibility = useCallback(
    (data: ICardInfo) => {
      setIsVisible(!isVisible);
      setCardInfo(data ? data : {});
      if (buttonAvailable) setButtonAvailable(false);
      if (removeContainerVisibility) setRemoveContainerVisibility(false);
    },
    [isVisible, buttonAvailable, removeContainerVisibility]
  );

  const handleActivateRemoveContainerVisibility = useCallback((value: boolean) => {
    setRemoveContainerVisibility(value);
  }, []);

  const handleButtonAvailability = useCallback(() => {
    if (!buttonAvailable) setButtonAvailable(true);
  }, [buttonAvailable]);

  return (
    <EditCardModalContext.Provider
      value={{
        isVisible,
        buttonAvailable,
        removeContainerVisibility,
        handleActivateRemoveContainerVisibility,
        handleModalVisibility,
        handleButtonAvailability,
        cardInfo,
      }}
    >
      {children}
    </EditCardModalContext.Provider>
  );
}
