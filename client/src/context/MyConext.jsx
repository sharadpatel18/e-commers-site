import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
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

export {MyContext ,MyContextProvider}