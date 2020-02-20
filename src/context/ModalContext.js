import React, { createContext, useState, useContext } from "react";
import axios from "axios";

//crear el context
export const ModalContext = createContext();

const ModalProvider = props => {
  // state del provider
  const [idreceta, guardarIdReceta] = useState(null);

  return (
    <ModalContext.Provider value={{ guardarIdReceta }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
