'use client'
import React, { createContext, useContext, useState } from "react";

// Crea el contexto
const MyContext = createContext();

// Crea un componente de proveedor para proporcionar el valor del contexto
const MyContextProvider = ({ children }) => {
  const [variable, setVariable] = useState("experiencia_aeropuerto"); // Inicializa la variable de contexto

  return (
    <MyContext.Provider value={{ variable, setVariable }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
