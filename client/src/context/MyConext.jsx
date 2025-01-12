import React, { createContext, useEffect, useState } from 'react';
import {showName} from '../logic/NameShow'

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const Token = localStorage.getItem('Token')
  const [showNameBool, setShowNameBool] = useState(false);
  const [user , setUser] = useState({});

 useEffect(()=>{
  if (Token) {
    const data = showName(Token);
    setUser(data);
  }
 },[showNameBool])

  const handleChange = (value) => {
    setShowNameBool(value)
  }

  return (
    <MyContext.Provider value={{ showNameBool, handleChange , user , Token}}>
      {children}
    </MyContext.Provider>
  );
};

export {MyContext ,MyContextProvider}