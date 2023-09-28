import { createContext, useContext, useState } from "react";
import { User } from "../interfaces/User";

// Define the context data type
interface MyContextData {
  auth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
  databaseUsers: User[];
  setDatabaseUsers: React.Dispatch<React.SetStateAction<User[]>>;
  emailPayload: object;
  setEmailPayload: React.Dispatch<React.SetStateAction<object>>;
}

// Create the context
const MyContext = createContext<MyContextData | undefined>(undefined);

// Create a custom hook for using the context
export function useMyContext() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
}

// Create the context provider component
export function MyContextProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<boolean>(false);
  const [emailPayload, setEmailPayload] = useState<object>({});
  const [databaseUsers, setDatabaseUsers] = useState<User[]>([]);

  const contextValue: MyContextData = {
    auth,
    setAuth,
    emailPayload,
    setEmailPayload,
    databaseUsers,
    setDatabaseUsers,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}
