import React, { createContext, useEffect, useState } from 'react';
import {showName} from '../logic/NameShow'

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const Token = localStorage.getItem('Token')
  const [showNameBool, setShowNameBool] = useState(false);
  const [user , setUser] = useState({});
  const [cartProducts , setCartProducts] = useState([]);

 useEffect(()=>{
  if (Token) {
    const data = showName(Token);
    setUser(data);
  }
 },[showNameBool])

  const handleChange = (value) => {
    setShowNameBool(value)
  }

  const handleCartProducts = (value) => {
    setCartProducts((prev)=>[...prev , value]);
  }

  return (
    <MyContext.Provider value={{ showNameBool, handleChange , handleCartProducts , cartProducts , user , Token}}>
      {children}
    </MyContext.Provider>
  );
};

export {MyContext ,MyContextProvider}