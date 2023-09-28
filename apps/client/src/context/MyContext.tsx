import { createContext, useContext, useState } from "react";
interface MyContextData {
  auth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyContext = createContext<MyContextData | undefined>(undefined);

export function useMyContext() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
}

export function MyContextProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<boolean>(false);

  const contextValue: MyContextData = {
    auth,
    setAuth,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}
