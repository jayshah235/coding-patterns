import { createContext, useContext, useState } from "react";

export const CreateStore = createContext(null);

export const StoreProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  return (
    <CreateStore.Provider value={{ users, setUsers }}>
      {children}
    </CreateStore.Provider>
  );
};

export const UseGlobalContext = () => {
  return useContext(CreateStore);
};
