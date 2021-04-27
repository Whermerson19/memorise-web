import { createContext, useCallback, useContext, useState } from "react";

interface ICardInfo {
  id?: string;
  front?: string;
  versus?: string;
}

interface IEditCardModalContext {
  isVisible: boolean;
  buttonAvailable: boolean;
  cardInfo: ICardInfo;
  handleModalVisibility(data?: ICardInfo): void;
  handleButtonAvailability(): void;
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

  const [cardInfo, setCardInfo] = useState<ICardInfo>({} as ICardInfo);

  const handleModalVisibility = useCallback(
    (data: ICardInfo) => {
      setIsVisible(!isVisible);
      setCardInfo(data ? data : {});
    },
    [isVisible]
  );

  const handleButtonAvailability = useCallback(() => {
    if (!buttonAvailable) setButtonAvailable(true);
  }, [buttonAvailable]);

  return (
    <EditCardModalContext.Provider
      value={{
        isVisible,
        buttonAvailable,
        handleModalVisibility,
        handleButtonAvailability,
        cardInfo,
      }}
    >
      {children}
    </EditCardModalContext.Provider>
  );
}
