import React, { createContext } from "react";

export const CoffeeContext = createContext()
const CoffeeProvider = () => {
  return(
    <CoffeeContext.Provider value={'Hello World'}>
      {children}
    </CoffeeContext.Provider>
  )
}
export default CoffeeProvider
