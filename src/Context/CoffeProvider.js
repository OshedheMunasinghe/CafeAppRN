import React, { createContext, useState } from "react";

export const CoffeeContext = createContext();
const CoffeeProvider = ({ children }) => {
  const [item, setItem] = useState(0);

  const setNewItem = () => {
    setItem(item)
  }

  return (
    <CoffeeContext.Provider value={item}>
      {children}
    </CoffeeContext.Provider>
  );
};
export default CoffeeProvider;
