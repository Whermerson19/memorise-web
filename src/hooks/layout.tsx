import { createContext, useCallback, useContext, useState } from 'react'

interface ILayoutContext {
  handleAsideVisibility(): void;
  asideVisibility: boolean;
}

interface ILayoutProvider {
  children: React.ReactNode;
}

const LayoutContext = createContext<ILayoutContext>({} as ILayoutContext);

export function useLayout(): ILayoutContext {
  const context = useContext(LayoutContext);
  if (!context) throw new Error("invalid context")

  return context;
}

export default function LayoutProvider({ children }: ILayoutProvider) {
  const [asideVisibility, setAsideVisibility] = useState(false);

  const handleAsideVisibility = useCallback(() => {
    setAsideVisibility(!asideVisibility)
  }, [asideVisibility])

  return (
    <LayoutContext.Provider value={{ handleAsideVisibility, asideVisibility }} >
      { children }
    </LayoutContext.Provider>
  )
}