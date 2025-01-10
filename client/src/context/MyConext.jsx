import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [showNameBool, setShowNameBool] = useState(false);

  const handleChange = (value) => {
    setShowNameBool(value)
  }

  return (
    <MyContext.Provider value={{ showNameBool, handleChange }}>
      {children}
    </MyContext.Provider>
  );
};
